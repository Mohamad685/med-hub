import React from 'react';
import './HomePage.css'

function HomePage(){
    return(
        <>
        <div>
        <div className='hero-section'>
        <img src="../../src/assets/pics/hero.png" alt="hero" className='hero-pic'></img>
        </div>        
        <span className='title-start'>What We <span className='title-start title-end'>Do</span></span>
        </div>
        </>
    )
}

export default HomePage;