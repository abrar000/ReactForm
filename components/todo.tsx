import * as React from "react";
import TodoItem from "./TodoItem";
import Es from "./emptySpaces";
// class based component or stateful component
class Todo extends React.Component {
  state = {
      todos : []
    };
    
    createNewTodo = () => {
        const text = document.querySelector('#text');
        const value = text.value;
        if(value != ""){

            const obj = {
                text: value,
                done: false,
                id: this.state.todos.length + 1
            }
            
            this.setState({
                todos: [...this.state.todos, obj],
                
            });
            text.value="";
        }else{
            alert("your text feild is empty")
        }
    }

  render() {
    return (
      <div className="todo">
        <input type="text" id='text' /> <Es />
       <button onClick = {this.createNewTodo} class="add-new">Add New Todo</button>
        
        <table className='table'>
            <thead>
                <th style={{paddingRight:"1rem"}}>#</th>
                <th style={{paddingRight:"8rem"}}>TODO</th>
                <th style={{paddingRight:"3rem"}}>DUE</th>
                <th>STATUS</th>
            </thead>
        
            {
                this.state.todos.map(item => {
                    return (
                        <TodoItem text={item.text} done={item.done} id={item.id}  />
                    )   
                })
            }
        </table> 
      </div>
    );
  }
}

export default Todo;

