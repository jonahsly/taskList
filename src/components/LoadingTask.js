import React from "react";
import './LoadingTask.css';

function LoadingTask() {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Loading...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    );
};

export { LoadingTask };