import React, { Component } from 'react';
import './css/ServiceBox.css';
class ServiceBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Box'>
                <img className='ServiceImage' src={this.props.pic}></img>
                <div className='BoxName'>
                    <p>{this.props.name}</p>
                </div>
            </div>
        );
    }
}

export default ServiceBox;