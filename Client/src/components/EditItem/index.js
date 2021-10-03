/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Input } from 'antd';

function EditItem(props) {
    const [value, setValue] = useState('');
    const { idx, taskList } = props;
    const editTask = () => {
            if(value.length > 0) {
                const currentTask = [...taskList];
                const index = currentTask.findIndex((item) => item.id === idx)
                currentTask[index].taskDescription = value;
            }
    }
    useEffect(editTask, [value])
    return (
        <div>
            <Input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
        </div>
    );
}

export default EditItem;