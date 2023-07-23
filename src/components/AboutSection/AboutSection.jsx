import React from 'react'
import './AboutSection.scss';

import logo from '../../assets/images/about.png';


const AboutSection = () => {
  return (
    <div className='about-section'>
        <div className='about-text'>
          <h2>Trupti Treats</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis erat eget nisi mattis gravida. 
            Pellentesque id diam eu orci malesuada sodales. Nullam sed dictum odio. Duis vel justo at orci efficitur 
            posuere. </p>
            
            <p>Nullam posuere nibh eu urna eleifend, in convallis velit euismod. Integer vel metus a augue 
            venenatis convallis in vitae metus. Vestibulum volutpat, neque nec venenatis convallis, 
            lectus odio laoreet orci, vel scelerisque dolor risus vel lacus. Integer congue justo at magna venenatis,
             sit amet bibendum nisl ullamcorper.</p>
            
        </div>
        <div className='about-img'>
         <img className='image' src={logo} />
</div>
    </div>
  )
}

export default AboutSection