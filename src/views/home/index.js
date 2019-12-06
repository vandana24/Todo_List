import React, { Component } from 'react';

import './index.css'
class home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='header'>
                    <div className='to-do-text'>Todo</div>
                    <button className='button-add'>+</button>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default home;