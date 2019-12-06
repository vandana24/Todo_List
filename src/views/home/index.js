import React, { Component } from 'react';
import TodoItems from './todoItems.js'
import './index.css'
class home extends Component {
    constructor(props){
        super(props);
         this.state = {
             items:[]
         }


        this.addItem = this.addItem.bind(this); 
    }
    
    addItem(e) {
        if(this._inputElement !==""){
            let newItem = {
                text:this._inputElement.value,
                key:Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                }
            });
        }
        this._inputElement.value = "";
        console.log(this.state.items)
        e.preventDefault();
    }

    render() {
        return (
            <div className='home'>
                <div className='header'>
                    <form onSubmit={this.addItem}>
                    <div className='to-do-text'>Todo</div>
                    <input ref={(a) => this._inputElement = a} 
                     
                     className='input-text'  ></input>
                    <button className='button-add'>+</button>
                    </form>
                </div>
                <hr></hr>
                <TodoItems entries={this.state.items} />
            </div>
        );
    }
}

export default home;