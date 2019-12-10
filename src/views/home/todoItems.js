import React, { Component } from 'react';

class todoItems extends Component {
    createTasks(item){
        return <React.Fragment>
        <div key={item.key} className='taskList'>
          <input type="radio" ></input>{item.text}
        </div>
        <hr></hr>
        </React.Fragment>
    }
    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);
        return (
           <div className='theList'>
                {listItems}
           </div>
        );
    }
}

export default todoItems;