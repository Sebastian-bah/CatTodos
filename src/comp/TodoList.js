import TodoItem from './TodoItem';

const TodoList = (props) => {



    return ( 
       <div className="todoList">
           {props.todo.map((todo, id) => {return <TodoItem rem={props.rem} key={todo.id} todo={todo} id={id}/>})}
       </div> 
    );
}
 
export default TodoList;