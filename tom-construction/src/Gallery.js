import React, { Component } from 'react';
import './css/Gallery.css';
import HeaderComponent from './HeaderComponent';

import image1 from "./images/gallery/315482533_149708454474332_5228458572363134570_n.jpg";
import image2 from"./images/gallery/315909122_150536641058180_1657149351998392199_n.jpg";
import image3 from"./images/gallery/315941268_150536541058190_5082847350233299756_n.jpg";
import image4 from"./images/gallery/317523739_154034974041680_6829884514714297713_n.jpg";
import image5 from"./images/gallery/317599549_154034987375012_724314854688627110_n.jpg";
import image6 from"./images/gallery/317649097_154034830708361_1140633765179558808_n.jpg";
import image7 from"./images/gallery/317661606_154034824041695_2694008379154247323_n.jpg";
import image8 from"./images/gallery/317714054_154035130708331_5061153713449658030_n.jpg";
import image9 from"./images/gallery/318450111_155863113858866_8286196380806409621_n.jpg";
import image10 from"./images/gallery/318474527_155863120525532_4027911322075882813_n.jpg";
import image11 from"./images/gallery/318503433_155863127192198_1055556408786303841_n.jpg";
import i1 from './images/gallery/1.jpg';
import i2 from './images/gallery/2.jpg';
import i3 from './images/gallery/3.jpg';
import i4 from './images/gallery/4.jpg';
import i5 from './images/gallery/5.jpg';
import i6 from './images/gallery/6.jpg';
import i7 from './images/gallery/7.jpg';
import i8 from './images/gallery/8.jpg';
import i9 from './images/gallery/9.jpg';
import i10 from './images/gallery/10.jpg';
import i11 from './images/gallery/11.jpg';
import i12 from './images/gallery/12.jpg';
import i13 from './images/gallery/13.jpg';
import i14 from './images/gallery/14.jpg';
import i15 from './images/gallery/15.jpg';
import i16 from './images/gallery/16.jpg';
import i17 from './images/gallery/17.JPG';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
    i16,
    i17
]

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 6
        }
    }

    increaseIndexHandler = () => {

        this.setState((prevState) => ({
            index : (images.length < prevState.index + 6) ? images.length : prevState.index + 6
        }))
    }
    render() { 
        return (
            <div className='GalleryContainer'>
                <HeaderComponent highlight="gallery" />
                <div className='GalleryBoxContainer'>
                    {images.slice(0,this.state.index).map((value) => {
                        return (
                            <div className='GalleryImageContainer'>
                                <img style={{width: '100%', borderRadius: '10px'}} alt="gallery" src={value} key={value.toString()}/>
                            </div>
                        )
                    })}
                </div> 
                <div className={(this.state.index === images.length) ? 'load-more-container-gone' : 'load-more-container'}>
                    <p className='load-more' onClick={this.increaseIndexHandler}>LOAD MORE</p>
                </div>
            </div>
        );
    }
}
 
export default Gallery;