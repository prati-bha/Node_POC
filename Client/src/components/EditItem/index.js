/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Input } from 'antd';

function EditItem(props) {
    const [value, setValue] = useState('');
    const { idx, taskList, modifyTasks } = props;
    const editTask = () => {
        const currentTask = [...taskList];
        const index = currentTask.findIndex((item) => item.uniqueTaskId === idx)
        currentTask[index].taskDescription = value;
        modifyTasks(currentTask);
    }
    useEffect(editTask, [value])
    return (
        <div>
            <Input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
        </div>
    );
}

export default EditItem;