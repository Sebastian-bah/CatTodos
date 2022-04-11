import Add from "./comp/AddTodo";
import TodoList from "./comp/TodoList";
import React, { forwardRef } from "react";
import './App.scss'

function App(props) {

  const [todos, setTodos] = React.useState([]);

  function addTodo(title) {
    setTodos(todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  function remove(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <div>
        <Add onCreate={addTodo} />
      </div>
      <div style={{marginTop: 10}}>
        {todos.length ? 
        (<TodoList  todo={todos} rem={remove}/>)
         : 
        (<p style={{color: 'white', margin: '0 auto'}}>Пусто<img style={{width: 35, marginTop: 10}} src="https://cdn-icons-png.flaticon.com/128/5089/5089733.png"/></p>)}
      </div>

<div class="main">
<span class="stand"></span>
<div class="cat">
 <div class="body"></div>
 <div class="head">
   <div class="ear"></div>
 <div class="ear"></div>
 </div>
 <div class="face">
  <div class="nose"></div>
 <div class="whisker-container">
   <div class="whisker"></div>
   <div class="whisker"></div>
 </div>
 <div class="whisker-container">
   <div class="whisker"></div>
   <div class="whisker"></div>
 </div>
 </div>
 <div class="tail-container">
  <div class="tail">
    <div class="tail">
      <div class="tail">
        <div class="tail">
          <div class="tail">
            <div class="tail">
              <div class="tail"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</div>
</div>




    </div>
  );
}

export default App;
