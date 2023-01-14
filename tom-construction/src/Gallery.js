import React, { Component } from 'react';
import './css/Gallery.css';
import HeaderComponent from './HeaderComponent';

class Gallery extends Component {

    render() { 
        return (
            <div className='GalleryContainer'>
                <HeaderComponent highlight="gallery"/>
                <h2>GALLERY</h2>
            </div>
        );
    }
}
 
export default Gallery;