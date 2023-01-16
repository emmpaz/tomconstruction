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
import image12 from"./images/gallery/318686762_155863150525529_6388330611763156390_n.jpg";

class Gallery extends Component {

    images = [
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
        image12
    ]
    render() { 
        return (
            <div className='GalleryContainer'>
                <HeaderComponent highlight="gallery"/>
                <div className='GalleryBoxContainer'>
                    {this.images.map((value, index) => {
                        return (
                            <div className='GalleryImageContainer'>
                                <img style={{width: '100%', borderRadius: '30px'}}src={value} key={index}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
 
export default Gallery;