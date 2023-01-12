import React, { Component } from 'react';
import './css/HeaderComponent.css';
import tom from './images/tomWithWords.svg';
class HeaderComponent extends Component {
    
    render() { 
        return (
            <div className='HeaderComponentContainer'>
                <a href="/" className="logoWithWordsContainer">
                    <img className='tomWithWords' src={tom}></img>
                </a>
            </div>
        );
    }
}
 
export default HeaderComponent;