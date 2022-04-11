const TodoItem = ({todo, id, rem}) => {
    return (
        <div className="item">
        <span>
            {id + 1 + " - "}
            {todo.title}
        </span>
        <button onClick={rem.bind(null, todo.id)} style={{border: 0, background: 'none'}}>&#10060;</button>
        </div>
      );
}
 
export default TodoItem;


