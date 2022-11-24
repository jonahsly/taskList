import React from 'react';
import './AddButtonTask.css';

function AddButtonTask(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };
  
  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
};

export { AddButtonTask };