import React from 'react';
import { TaskContext } from '../contexts/TaskContext';
import './FormTask.css'

function FormTask () {
    const [newTaskValue, setNewTaskValue] = React.useState('');
    const {
        addTask,
        setOpenModal,
    } = React.useContext(TaskContext);

    const onChange = (event) => {
        setNewTaskValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>New TASK:</label>
            <textarea
                value={newTaskValue}
                onChange={onChange}
                placeholder=""
            />
            <div className="TaskForm-buttonContainer">
                <button
                    type="button"
                    className="TaskForm-button Task-button--cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="TaskForm-button Task-button--add"
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export { FormTask };