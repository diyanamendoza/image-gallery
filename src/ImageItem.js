import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="image-div">
                <img src={this.props.url} alt={this.props.description} />
                <h3>{this.props.title}</h3>
                <p>Number of horns: {this.props.horns}</p>
            </div>
        )
    }
}
