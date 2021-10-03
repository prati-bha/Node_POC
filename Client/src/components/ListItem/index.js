/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Checkbox, Table } from 'antd';
import EditItem from '../EditItem/index';
import './List.css';
import AddItem from '../AddItem';
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
        } else if (type === 'cancel') {
            currentTaskList[index].isEdit = false;
            modifyTasks(currentTaskList);
        } else {
            currentTaskList[index].isEdit = false;
            editItem(id, currentTaskList[index])
            modifyTasks(currentTaskList);
        }

    }
    const ITEM_COLUMNS = [
        {
            title: 'Is Done',
            dataIndex: 'isDone',
            key: 'isDone',
            render: (text, record) => {
                return <Checkbox
                    checked={record.isDone}
                    onChange={(e) => changeTaskStatus(e, record.id)}
                />
            },
            width: "20%"
        },
        {
            title: 'Item Description',
            dataIndex: 'taskDescription',
            key: 'taskDescription',
            render: (text, record) => {
                if (record.isEdit) {
                    return <EditItem
                        idx={record.id}
                        editItem={editItem}
                        taskList={taskList}
                        modifyTasks={modifyTasks}
                    />
                }
                return text
            },
            width: "60%"
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => {
                const actionUI =
                    <>
                        {record.isEdit ? <><a
                            onClick={() => {
                                    editTask(record.id, 'done')
                            }
                            }

                        >
                            Done
                        </a>
                            <a
                                style={{ marginLeft: '20px' }}

                                onClick={() => {
                                    editTask(record.id, 'cancel')
                                }
                                }

                            >
                                Cancel
                            </a>
                        </>
                            :
                            <a
                                onClick={() => editTask(record.id, 'edit')}
                            >
                                Edit
                            </a>
                        }
                    </>
                return <>{actionUI}
                    <a
                        style={{ marginLeft: '20px' }}
                        onClick={() => deleteTask(record.id)}>
                        Delete
                    </a>
                </>

            },
            width: "20%"
        },
    ];
    return (
        <Table
            pagination={false}
            columns={ITEM_COLUMNS}
            itemLayout="horizontal"
            dataSource={source}
            footer={() => <AddItem
                taskList={taskList}
                addTask={modifyTasks}
            />}
        />
    );
}

export default index;