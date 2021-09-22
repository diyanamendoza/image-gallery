import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Gallery from './Gallery.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/gallery" 
                            exact
                            render={(routerProps) => <Gallery {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}