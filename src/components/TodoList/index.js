import React, { Component } from 'react';
import TodoItems from '../TodoItems';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state={
      task: '',
      items: []
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e){
    let state = this.state;
    if(this.taskInput.value !== ''){
      let newItem = {
        text: this.taskInput.value,
        key: Date.now()
      }
      this.setState({items: [...state.items, newItem]})
    }
    e.preventDefault();
    this.setState({tarefa: ''})
  }

  deleteItem(key){
    console.log('Item a ser deletado: ' + key);
    let filter = this.state.items.filter((item)=>{
      return(item.key !== key);
    })
    this.setState({items: filter});
  }

    render(){
        return (
            <div>
              <form onSubmit={this.addItem}>
                  <input type='text' placeholder='New Task' 
                         name='task' value={this.state.task} 
                         onChange={(ev) => this.setState({task: ev.target.value})} 
                         ref={(event) => this.taskInput = event} />
                  
                  <button type='submit'> 
                    Add
                  </button>

              </form>

              <TodoItems list={this.state.items} delete={this.deleteItem} />

            </div>
          );
        }
        
    }
   
export default TodoList;
  