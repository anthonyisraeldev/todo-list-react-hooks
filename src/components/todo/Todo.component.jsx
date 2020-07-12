import React from 'react';
import './Todo.component.css';
import { Button, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
function Todo({ todo, deleteTodo }) {

  /* Delete task */
  function handleRemoveClick() {
    deleteTodo(todo.id);
  }

  return (
    <div>
      <Paper className="item-todo">
        {todo.task}
        <Button
          className="btn-todo btn-delete"
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={ handleRemoveClick }
        >
        Delete
      </Button>
      </Paper>
    </div>
  )
}

Todo.displayName = 'Todo';

export default Todo;
