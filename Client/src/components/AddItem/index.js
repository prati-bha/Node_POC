import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './AddItem.css';
import request from '../../utils/request';
import { API_ROUTES } from '../../constants';
function AddItem(props) {
    const { addTask, taskList } = props;
    const [currentTask, setCurrentTask] = useState('');
    const addToTaskList = () => {
        const apiBody = {
            method: 'POST',
            body: {
                taskDescription: currentTask,
                isDone: false
            }
        }
        request(API_ROUTES.TO_DO_ITEMS.ADD_ITEM, apiBody).then(res => {
            const currentTaskObject = {
                isDone: false,
                taskDescription: currentTask,
                isEdit: false,
                id: res._id,
            }
            setCurrentTask('');
            addTask([...taskList, currentTaskObject]);
        })
    }
    return (
        <div className="addItemContainer">
            <Input type="text" onChange={(e) => setCurrentTask(e.target.value)} value={currentTask} placeholder="Enter New Task" />
            <Button type="button" onClick={addToTaskList} disabled={!currentTask}>Add Task</Button>
        </div>
    );
}

export default AddItem;