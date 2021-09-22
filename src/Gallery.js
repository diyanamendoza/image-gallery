import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './data.js'
import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import { uniqueArray } from './utils.js';
// import ImageItem from './ImageItem.js';

const keywordDupesArray = images.map(entry => entry.keyword);
const uniqueKeywords = uniqueArray(keywordDupesArray);

const hornDupesArray = images.map(entry => entry.horns );
const uniqueHornCounts = uniqueArray(hornDupesArray);

export default class Gallery extends Component {

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
    const filteredArray = images
    .filter(entry => (entry.keyword === this.state.keyword) || !this.state.keyword)
    .filter(entry => (String(entry.horns) === String(this.state.horn)) || !this.state.horn)

  return (
    <div className="App">
    <Header />
    <Dropdown
    handleChange={this.handleKWSelect}
    options={uniqueKeywords}
    h3="Keyword"
    />
    <Dropdown
    handleChange={this.handleHornSelect} 
    options={uniqueHornCounts}
    h3="Horn Count"
    />
    <ImageList 
    filteredArray={filteredArray}
    keyword={this.state.keyword}
    horn={this.state.horn}
    />
    </div>
  );
  }
  }