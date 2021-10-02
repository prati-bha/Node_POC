/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Input } from 'antd';

function EditItem(props) {
    const [value, setValue] = useState('');
    const { idx, taskList } = props;
    const editTask = () => {
        const currentTask = [...taskList];
        const index = currentTask.findIndex((item) => item.id === idx)
        currentTask[index].taskDescription = value;
    }
    useEffect(editTask, [value])
    return (
        <div>
            <Input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
        </div>
    );
}

export default EditItem;