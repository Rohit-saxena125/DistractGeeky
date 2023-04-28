import React from 'react';
import '../css/section.css';
// import Navbar from './Navbar';
const Section = () => {
  return (
    <div className='bg-hero-image w-full h-screen bg-cover bg-center flex items-center px-4'>
        <div className='uppercase text-center text-white font-extrabold'>
          <div className='my'>
            <h1 className='text-5xl'>Welcome to <span className='text-red-500'>DISTRACT FREE</span> Experience</h1>
           
           
            
            </div>
        </div>
        <br />
        <div className='para-div'>
        <p className = 'mt'>Welcome to our brand new video platform - a space where you can finally watch the content you love
               without any pesky ads or irrelevant suggestions!
                We believe that great content should be able to stand on
                 its own and that's why we're committed to providing you
                  with a completely ad-free experience. So, sit back, relax,
                   and get ready to dive into a world of engaging and knowlegeful
                    videos - all curated just for you. We're excited to have you here 
                    and can't wait to see what you discover!




</p>
        </div>

    </div>
    
  );
};

export default Section;
