import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className='welcome-div'>
               <h2>Welcome</h2>
               <p><Link to="/gallery">Go to Gallery</Link></p>
            </div>
        )
    }
}
