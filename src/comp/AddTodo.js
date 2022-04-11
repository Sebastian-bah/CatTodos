import React from 'react';

const Add = ({onCreate}) => {
  
    const [value, setValue] = React.useState('')

    function sumbitHandler(event){
      event.preventDefault()
    
      if(value.trim()){
        onCreate(value)
        setValue('')
      }
    }
  
    return (
    <form className="addtodo" onSubmit={sumbitHandler}>
      <input
        type='text'
        value={value}
        onChange={event => setValue(event.target.value)}
        style={{ width: "20rem", border: 1, padding: 5, backgroundColor: '#fdf9de', color: '#33333'}}
        placeholder={"напишите..."}
      ></input>

      <button
        type="submit"
        style={{
          cursor: "pointer",
          padding: 5,
          width: "5rem",
          backgroundColor: "black",
          border: 0,
          backgroundColor: '#fd6e72',
          color: "#fdf9de",
        }}
      >
        добавить
      </button>
    </form>
  );
};

export default Add;
