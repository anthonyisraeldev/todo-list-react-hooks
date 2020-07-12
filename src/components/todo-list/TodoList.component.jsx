import React from 'react';
import Todo from '../todo/Todo.component';

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo 
          key={ todo.id } 
          todo={ todo } 
          deleteTodo={ deleteTodo} 
        />
      ))}
    </div>
  )
}

TodoList.displayName = 'TodoList';

export default TodoList;
