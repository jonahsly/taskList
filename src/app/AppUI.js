import React from 'react';
import { TaskContext } from "../contexts/TaskContext";
import { CounterTask } from "../components/CounterTask";
import { SearchTask } from "../components/SearchTask";
import { ListTask } from "../containers/ListTask";
import { ItemTask } from '../components/ItemTask';
import { FormTask } from "../components/FormTask";
import { AddButtonTask } from "../components/AddButtonTask";
import { Modal } from '../containers/Modal';
import { ErrorTask } from "../components/ErrorTask";
import { LoadingTask } from '../components/LoadingTask';
import { EmptyTask } from '../components/EmptyTask';

export function AppUI() {
  const {
    error,
    loading,
    searchedTasks,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
  } = React.useContext(TaskContext);
  return (
    <>
        <CounterTask/>
        <SearchTask/>
        <ListTask>
          {error && <ErrorTask error={error}/>}
          {loading && <LoadingTask/>}
          {(!loading && !searchedTasks.length) && <EmptyTask/>}
          
          {searchedTasks.map(task => (
            <ItemTask
              key={task.text}
              text={task.text}
              completed={task.completed}
              onComplete={() => completeTask(task.text)}
              onDelete={() => deleteTask(task.text)}
            />
          ))}
        </ListTask>
        {!!openModal && (
          <Modal>
            <FormTask />
          </Modal>
        )}
        <AddButtonTask setOpenModal={setOpenModal}/>
    </>
  );
};
