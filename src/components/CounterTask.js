import React from "react";
import { TaskContext } from '../contexts/TaskContext';
import "./CounterTask.css";

function CounterTask(){
    const {totalTasks, completedTasks} = React.useContext(TaskContext);

    return (
        <h2 className="TaskCounter">You have completed {completedTasks} of {totalTasks} tasks</h2>
    );
};

export { CounterTask };