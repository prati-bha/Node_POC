import React from 'react';
import { Checkbox, List, Button } from 'antd';
import { DeleteOutlined, EditOutlined, RightOutlined } from '@ant-design/icons';
import EditItem from '../EditItem/index';
import './List.css';
function index(props) {
    const { taskList, modifyTasks, source, deleteItem, editItem } = props;
    const changeTaskStatus = (e, id) => {
        const currentTaskList = [...taskList];
        const index = currentTaskList.findIndex((item) => item.id === id)
        currentTaskList[index].isDone = e.target.checked;
        modifyTasks(currentTaskList);
        editItem(id, currentTaskList[index]);
    }
    const deleteTask = (id) => {
        deleteItem(id);
    }
    const editTask = (id, type) => {
        const currentTaskList = [...taskList];
        const index = currentTaskList.findIndex((item) => item.id === id)
        if (type === 'edit') {
            currentTaskList[index].isEdit = true;
            modifyTasks(currentTaskList);
        } else {
            currentTaskList[index].isEdit = false;
            editItem(id, currentTaskList[index])
            modifyTasks(currentTaskList);
        }

    }
    return (
        <List
            itemLayout="horizontal"
            dataSource={source}
            renderItem={({ isEdit, isDone, taskDescription, id }, index) => (
                <List.Item>
                    <Checkbox
                        checked={isDone}
                        onChange={(e) => changeTaskStatus(e, id)}
                    />
                    {isEdit ?
                        <EditItem
                            idx={id}
                            editItem={editItem}
                            taskList={taskList}
                            modifyTasks={modifyTasks}
                        />
                        :
                        <p>
                            {taskDescription}
                        </p>}
                    <Button
                        type="link"
                        onClick={() => deleteTask(id)}>
                        <DeleteOutlined />
                    </Button>
                    {
                        isEdit ?
                            <Button
                                type="link"
                                onClick={() => editTask(id, 'done')}
                            >
                                <RightOutlined />
                            </Button>
                            :
                            <Button
                                type="link"
                                onClick={() => editTask(id, 'edit')}
                            >
                                <EditOutlined />
                            </Button>
                    }
                </List.Item>
            )}
        />
    );
}

export default index;