import React from 'react';
import { Card } from 'antd';
import './App.css';
import FilteredItem from './components/FilterItem/index';
function App() {


  return (
    <Card title="To-Do-App" className="App" type="inner">
      <>
        <FilteredItem />
      </>
    </Card>
  );
}

export default App;
