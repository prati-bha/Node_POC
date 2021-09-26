import { Tabs } from 'antd';
import List from '../ListItem/index';

const { TabPane } = Tabs;

const FilterItem = (props) => {
    const { taskList, modifyTasks } = props;
    return (<Tabs defaultActiveKey="3" centered>
        <TabPane tab="All" key="3">
            <List
                taskList={taskList}
                modifyTasks={modifyTasks}
                source={taskList}
            />
        </TabPane>
        <TabPane tab="Active" key="2">
            <List
                taskList={taskList}
                modifyTasks={modifyTasks}
                source={taskList.filter((item) => !item.isDone)}
            />
        </TabPane>
        <TabPane tab="Completed" key="1">
            <List
                taskList={taskList}
                modifyTasks={modifyTasks}
                source={taskList.filter((item) => item.isDone)}
            />
        </TabPane>
    </Tabs>)
};

export default FilterItem