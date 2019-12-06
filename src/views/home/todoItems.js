import React, { Component } from 'react';

class todoItems extends Component {
    createTasks(item){
        return <li key={item.key}>{item.text}</li>
    }
    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);
        return (
           <ul className='theList' style={{color:'white'}}>
               {listItems}
           </ul>
        );
    }
}

export default todoItems;