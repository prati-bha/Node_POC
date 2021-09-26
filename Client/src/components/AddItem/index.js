import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './AddItem.css';
let key = 0;
function AddItem(props) {
    const { addTask, taskList } = props;
    const [currentTask, setCurrentTask] = useState('');
    const addToTaskList = () => {
        const currentTaskObject = {
            isDone: false,
            taskDescription: currentTask,
            isEdit: false,
            uniqueTaskId: key,
        }
        setCurrentTask('');
        addTask([...taskList, currentTaskObject]);
        key = key + 1;
    }
    return (
        <div className="addItemContainer">
            <Input type="text" onChange={(e) => setCurrentTask(e.target.value)} value={currentTask} />
            <Button type="button" onClick={addToTaskList} disabled={!currentTask}>Add Task</Button>
        </div>
    );
}

export default AddItem;