import React from 'react';
import { Checkbox, List, Button } from 'antd';
import { DeleteOutlined, EditOutlined, RightOutlined } from '@ant-design/icons';
import EditItem from '../EditItem/index';
import './List.css';
function index(props) {
    const { taskList, modifyTasks, source } = props;
    const changeTaskStatus = (e, uniqueTaskId) => {
        const currentTaskList = [...taskList];
        const index = currentTaskList.findIndex((item) => item.uniqueTaskId === uniqueTaskId)
        currentTaskList[index].isDone = e.target.checked;
        modifyTasks(currentTaskList);
    }
    const deleteTask = (uniqueTaskId) => {
        const currentTaskList = [...taskList];
        const index = currentTaskList.findIndex((item) => item.uniqueTaskId === uniqueTaskId)
        currentTaskList.splice(index, 1);
        modifyTasks(currentTaskList);
    }
    const editTask = (uniqueTaskId, type) => {
        const currentTaskList = [...taskList];
        const index = currentTaskList.findIndex((item) => item.uniqueTaskId === uniqueTaskId)
        if (type === 'edit') {
            currentTaskList[index].isEdit = true;
            modifyTasks(currentTaskList);
        } else {
            currentTaskList[index].isEdit = false;
            modifyTasks(currentTaskList);
        }

    }
    return (
        <List
            itemLayout="horizontal"
            dataSource={source}
            renderItem={({ isEdit, isDone, taskDescription, uniqueTaskId }, index) => (
                <List.Item>
                    <Checkbox checked={isDone} onChange={(e) => changeTaskStatus(e, uniqueTaskId)} />
                    {isEdit ? <EditItem idx={uniqueTaskId} taskList={taskList} modifyTasks={modifyTasks} /> : <p>{taskDescription}</p>}
                    <Button type="link" onClick={() => deleteTask(uniqueTaskId)}><DeleteOutlined /></Button>
                    {
                        isEdit ?
                            <Button type="link" onClick={() => editTask(uniqueTaskId, 'done')}><RightOutlined /></Button>
                            :
                            <Button type="link" onClick={() => editTask(uniqueTaskId, 'edit')}><EditOutlined /></Button>
                    }
                </List.Item>
            )}
        />
    );
}

export default index;