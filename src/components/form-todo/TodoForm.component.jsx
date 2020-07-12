import React from 'react'
import shortid from 'shortid';
import { Grid, Paper, Button, TextField } from '@material-ui/core';
import './TodoForm.styles.css';
import AlertForm from '../alert-form/AlertForm.component';


function TodoForm({ addTodo }) {

  /* Hooks */
  const [ todo, setTodo ] = React.useState({
    id: "",
    task: ""
  });
  const [ alert, setAlert ] = React.useState(false);

  /* Get input value */
  const handleInputChange = (e) => {
    setTodo({
      ...todo,
      task: e.target.value
    });
  }

  /* Submit function */
  const handleSubmit = (e) => {
    e.preventDefault();

    /* Validate no white spaces */
    if (!todo.task.trim()) {
      setAlert(true);
      return
    }

    /* Add task */
    addTodo({
      ...todo, id: shortid.generate()
    })
    
    /* Clear input */
    setTodo({ ...todo, task: ''});

    /* Remove alert */
    setAlert(false);
    
  }

  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} md={7}>
        <Paper className="paper">
          <form onSubmit={handleSubmit}>
            <div class="box-text-field">
              <TextField
                label="Task"
                name="task"
                type="text"
                onChange={handleInputChange}
                value={ todo.task }
                className="box-text-field__input"
              />
          </div>
            <AlertForm alert= { alert }/>
            <Button 
              variant="contained" 
              color="primary" 
              type="submit">
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

TodoForm.displayName = 'TodoForm';

export default TodoForm;
