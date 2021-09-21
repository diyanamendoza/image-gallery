import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './data.js'
import React, { Component } from 'react';
// import ImageItem from './ImageItem.js';

const keywordArray = images.map(entry => entry.keyword);
let uniqueKeywords = [];
keywordArray.forEach((keyword) => { 
  if(!uniqueKeywords.includes(keyword)){
    uniqueKeywords.push(keyword);
  }});

const hornArray = images.map(entry => entry.horns );
let uniqueHornCounts = [];
hornArray.forEach((count) => {
  if(!uniqueHornCounts.includes(count)){
    uniqueHornCounts.push(count);
  }});

export default class App extends Component {

  state = {
    keyword: '',
    horn: ''
          }

  handleKWSelect = (e) => {
    this.setState({keyword: e.target.value});
    }

  handleHornSelect = (e) => {
    this.setState({horn: e.target.value});
    }



  render() {
  return (
    <div className="App">
      <Header />
      <h3>Filter by Keyword</h3>
      <select onChange={this.handleKWSelect}>
            <option value="">all</option>
                      {
                          uniqueKeywords.map(entry => 
                              <option value={entry}>{entry}</option>
                          )
                      }
      </select>
      <h3>Filter by Horn Count</h3>
      <select onChange={this.handleHornSelect}>
            <option value="">all</option>
                      {
                          uniqueHornCounts.map(entry => 
                              <option value={entry}>{entry}</option>
                          )
                      }
      </select>

    <ImageList 
    images={images}
    keyword={this.state.keyword}
    horn={this.state.horn}

    />
    </div>
  );
  }
  }