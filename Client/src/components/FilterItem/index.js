import React, { useState, useEffect } from 'react';
import { Tabs, Spin, notification } from 'antd';
import List from '../ListItem/index';
import { API_ROUTES } from '../../constants';
import request from '../../utils/request';

const { TabPane } = Tabs;

const FilterItem = () => {
    const [taskList, modifyTasks] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        setLoading(true);
        getDataFromAPI();
    }, []);


    const getDataFromAPI = () => {
        const apiBody = {
            method: 'GET',
        }
        request(API_ROUTES.TO_DO_ITEMS.LIST_ITEMS, apiBody).then(res => {
            const taskList = [...res];
            const newRes = taskList.map((eachItem) => {
                const updated = { ...eachItem, isEdit: false, id: eachItem._id }
                return updated;
            })
            modifyTasks(newRes);
            setLoading(false);
        })
    }

    const editItem = (id, updatedBody) => {
        const apiBody = {
            method: 'PUT',
            body: {
                id,
                data: {
                    isDone: updatedBody.isDone,
                    taskDescription: updatedBody.taskDescription
                }
            }
        }
        request(API_ROUTES.TO_DO_ITEMS.EDIT_ITEM, apiBody).then(res => {
            notification.success({ message: res.message });
        })
    }

    const deleteItem = (id) => {
        const apiBody = {
            method: 'DELETE',
            body: {
                id
            }
        }
        request(API_ROUTES.TO_DO_ITEMS.DELETE_ITEM, apiBody).then(res => {
            notification.success({ message: res.message });
            getDataFromAPI();
        })
    }



    if (loading) {
        return <Spin />
    }
    return (
        <>
            <Tabs defaultActiveKey="3" centered>
                <TabPane tab="All" key="3">
                    <List
                        taskList={taskList}
                        modifyTasks={modifyTasks}
                        source={taskList}
                        editItem={editItem}
                        deleteItem={deleteItem}
                    />
                </TabPane>
                <TabPane tab="Active" key="2">
                    <List
                        taskList={taskList}
                        modifyTasks={modifyTasks}
                        source={taskList.filter((item) => !item.isDone)}
                        editItem={editItem}
                        deleteItem={deleteItem}
                    />
                </TabPane>
                <TabPane tab="Completed" key="1">
                    <List
                        taskList={taskList}
                        modifyTasks={modifyTasks}
                        source={taskList.filter((item) => item.isDone)}
                        editItem={editItem}
                        deleteItem={deleteItem}
                    />
                </TabPane>
            </Tabs>
        </>
    )
};

export default FilterItem