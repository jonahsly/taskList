import React from 'react';
import { IconTask } from './IconTask';

function CompleteIcon({ completed, onComplete }) {
  return (
    <IconTask
      type="check"
      color={completed ? '#4caf50' : 'gray'}
      onClick={onComplete}
    />
  );
};

export { CompleteIcon };