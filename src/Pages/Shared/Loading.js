import React from 'react';
import './Loading.css'
const Loading = () => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div class="jelly-triangle">
                <div class="jelly-triangle__dot"></div>
                <div class="jelly-triangle__traveler"></div>
            </div>
            <svg width="0" height="0" class="jelly-maker">
                <defs>
                    <filter id="uib-jelly-triangle-ooze">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="7.3" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="ooze"></feColorMatrix>
                        <feBlend in="SourceGraphic" in2="ooze"></feBlend>
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default Loading;