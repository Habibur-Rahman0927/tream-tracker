import React from 'react';
import backgroundImage from '../../image/background.jpeg'
import './Background.css'

const Background = (props) => {
    const { heading, image } = props

    return (
        <div className="background">
            <div className="back">
                {heading}
                <div className="imgDiv">
                    {image}
                </div>
            </div>
        </div>
    );
};

export default Background;