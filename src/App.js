import React from 'react';
import './App.css';
import HeroTitle from './components/hero-title/HeroTitle.component';
import TodoForm from './components/form-todo/TodoForm.component';
import TodoList from './components/todo-list/TodoList.component';
import CountTodos from './components/count-todos/CountTodos.component';
import NoItem from './components/no-item/NoItem.component';

function App() {
  
  /* Hooks */
  const [ todos, setTodos ] = React.useState([]);

  /* Add todo function */
  const addTodo = (todo) => {
    setTodos([ todo, ...todos ]);
  }

  /* Delete task */
  function deleteTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="container">
      <HeroTitle title="TODO, List - Hooks" />
      <TodoForm addTodo={ addTodo } />
      <div className="row justify-content-center py-3">
        <div className="col-12 col-md-7">
        < CountTodos todos = { todos } />
        {
          todos.length === 0 ? (
            <NoItem />
          ) : (
            <TodoList todos={ todos } deleteTodo={ deleteTodo } />
          )
        } 
        </div>
      </div>
    </div>
  );
}

export default App;
