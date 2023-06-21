import React, { Component } from 'react';
import './css/ServiceBox.css';
class ServiceBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
            <div className='Box'>
                {(this.props.index % 2 == 0) ?
                    <div className='content-wrapped'>
                        <img className='ServiceImage' src={this.props.pic}></img>
                        <div className='BoxName'>
                            <p>{this.props.name}</p>
                        </div>
                    </div>
                    :
                    <div className='content-wrapped-left-float'>
                        <div className='BoxName'>
                            <p>{this.props.name}</p>
                        </div>
                        <img className='ServiceImage' src={this.props.pic}></img>
                    </div>
                }
            </div>
            <div className='line-break'/>
            </div>
        );
    }
}

export default ServiceBox;