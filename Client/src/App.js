import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import './App.css';
import AddItem from './components/AddItem/index.js';
import FilteredItem from './components/FilterItem/index';
import { STORAGE_KEY } from './constants';
function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
  useEffect(() => {
    const stringified = JSON.stringify(tasks);
    localStorage.setItem(STORAGE_KEY, stringified)    
  })
  return (
    <Card title="To-Do-App" className="App" type="inner">
      <FilteredItem 
        taskList={tasks} 
        modifyTasks={setTasks} 
        />
      <AddItem taskList={tasks} addTask={setTasks} />
    </Card>
  );
}

export default App;
