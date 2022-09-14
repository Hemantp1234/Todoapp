import React from 'react';
import Todolist from './todolist.js';
import './App.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";


library.add(faTrash);
class App extends React.Component
{
constructor(props)
{
  super(props);
  this.state ={
    todo:[],
    currentTodo:{
      text:"",
      key:""
    }
  };
  this.handleChange=this.handleChange.bind(this);
  this.addItem=this.addItem.bind(this);
  this.deleteTodo=this.deleteTodo.bind(this);
}




handleChange(event)
{
  this.setState({
    currentTodo:{
      text: event.target.value,
      key:Math.floor(Math.random() * 100)
    }
  })
}

addItem(event)
{
  event.preventDefault();
  const newItem = this.state.currentTodo
  console.log(newItem);


  if(newItem.text !== '')
  {
    const newTodo =[...this.state.todo, newItem]

    this.setState({
      todo : newTodo,
      currentTodo:{
        text :'',
        key :''
      }
    })
  }
}


deleteTodo(key)
{
  const filterTodo =this.state.todo.filter((item) => item.key !== key);
  this.setState({
    todo: filterTodo
  });
}

 
  render()
  {

    
    return(
      <div className='App'>
        <header>
          <h1 id='title'>To-Do App</h1>
        <form id='todo' onSubmit={this.addItem} >
        <input type='text' placeholder='Enter a text value' id='inp' value={this.state.currentTodo.text}  onChange={this.handleChange}/>
        <button type='submit' id='but'>Add</button>

        </form>




        </header>


<Todolist todo={this.state.todo} 
deleteTodo={this.deleteTodo}/>


      </div>
    )
  }
}

export default App;