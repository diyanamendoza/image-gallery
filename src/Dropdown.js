import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <h3>Filter by {this.props.h3}</h3>
                <select onChange={this.props.handleChange}>
                <option value="">all</option>
                      {
                          this.props.options.map(entry => 
                              <option key={entry} value={entry}>{entry}</option>
                          )
                      }
                </select>
            </div>
        )
    }
}
