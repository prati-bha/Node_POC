import React, { useState, useEffect } from 'react';
import { Card, Spin } from 'antd';
import './App.css';
import AddItem from './components/AddItem/index.js';
import FilteredItem from './components/FilterItem/index';
import { API_ROUTES } from './constants';
import request from './utils/request';
function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState([]);
  const getDataFromAPI = () => {
    const apiBody = {
      method: 'GET',
    }
    request(API_ROUTES.TO_DO_ITEMS.LIST_ITEMS, apiBody).then(res => {
      setTasks(res);
      setLoading(false);
  })
  }
  
  useEffect(() => {
    setLoading(true);
    getDataFromAPI();  
  }, [])
 
  return (
    <Card title="To-Do-App" className="App" type="inner">
      {loading 
      ? 
      <Spin /> 
      :  
      <>
      <FilteredItem
        taskList={tasks}
        modifyTasks={setTasks} />
      <AddItem taskList={tasks} addTask={setTasks} />
      </>
      }
     
    </Card>
  );
}

export default App;
