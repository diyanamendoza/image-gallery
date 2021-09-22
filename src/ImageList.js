import React, { Component } from 'react'
// import images from './data.js'
import ImageItem from './ImageItem.js'

export default class ImageList extends Component {
    render() {
        if (this.props.filteredArray.length === 0) {
            return <h3>No images to show! Please redo your filters.</h3>
         } else {
                return (
                    <div className="gallery-container">
                        {
                        this.props.filteredArray.map(entry => {
                            return <ImageItem 
                            key={entry.title}
                            {...entry}
                            /> }) 
                        }       
                    </div>
                )}
}
}