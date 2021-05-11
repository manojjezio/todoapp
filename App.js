import React from 'react';
import './App.css';
import Listitems from './Listitems';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(faTrash);


class App extends React.Component{
  constructor(){
    super();
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.changeInput = this.changeInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  changeInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items,newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item => 
      item.key!==key);
      this.setState({
        items:filteredItems
      })
  }
  setUpdate(text, key){
    const items = this.state.items;
    items.map(item => {
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({
      items: items
    })
  }
  render(){
    return(
      <div className="app">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
             <input type="text" placeholder="Enter Text" value={this.state.currentItem.text} onChange={this.changeInput} />
             <button type="submit">Add</button>
          
          </form>
        </header>
        <Listitems items= {this.state.items} deleteItem = {this.deleteItem} setUpdate ={this.setUpdate}></Listitems>
      </div>
      
    );
  }
}

export default App;
