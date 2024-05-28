import React from 'react';
import '../css/ServiceBox.css';
function ServiceBox(props) {



    return (
        <div className='container'>
            <div className='Box'>
                {(props.index % 2 == 0) ?
                    <div className='content-wrapped'>
                        <img className='ServiceImage' src={props.pic.src}></img>
                        <div className='BoxName'>
                            <p>{props.name}</p>
                        </div>
                    </div>
                    :
                    <div className='content-wrapped-left-float'>
                        <div className='BoxName'>
                            <p>{props.name}</p>
                        </div>
                        <img className='ServiceImage' src={props.pic.src}></img>
                    </div>
                }
            </div>
            <div className='line-break' />
        </div>
    );

}

export default ServiceBox;