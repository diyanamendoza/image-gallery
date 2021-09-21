import React, { Component } from 'react'
// import images from './data.js'
import ImageItem from './ImageItem.js'

export default class ImageList extends Component {
    render() {
        return (
            <div className="gallery-container">
            {/* {
                this.props.images
                //filter
                .filter(image => {
                    if(!this.props.keyword) {return true }
                    return image.keyword === this.props.keyword
                    })
                
                .filter(image => {
                    if(!this.props.horn) {return true }
                    return image.horns === this.props.horn
                    })
                //map
                .map(entry =>
                <ImageItem 
                    {...entry}
                />
                )
            } */}

            {
                this.props.images
                //filter
                .filter(entry => (entry.keyword === this.props.keyword) || !this.props.keyword)
                .filter(entry => (String(entry.horns) === String(this.props.horn)) || !this.props.horn)
                //map
                .map(entry => {
                        return <ImageItem 
                        {...entry}
                        /> }) 
            }
            </div>
        )
}}