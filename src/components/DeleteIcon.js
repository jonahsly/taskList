import React from 'react';
import { IconTask } from './IconTask';

function DeleteIcon({ onDelete }) {
  return (
    <IconTask
      type="delete"
      onClick={onDelete}
    />
  );
};

export { DeleteIcon };