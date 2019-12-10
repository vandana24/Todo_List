import React, { Component } from 'react';
import TodoItems from './todoItems.js'
import './index.css'
class home extends Component {
    constructor(props){
        super(props);
         this.state = {
             items:[],
             addButton:false
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
                    <div className='to-do-text'>Todo</div>
                    <button type="button" className='button-add' onClick={() => this.setState({addButton:true})}>+</button>
                </div>
                <hr></hr>
                <form onSubmit={this.addItem} className='form'>
                    {this.state.addButton &&
                    <input ref={(a) => this._inputElement = a} className='input-text'></input>
                    }
                </form>
                <TodoItems entries={this.state.items} />
            </div>
        );
    }
}

export default home;