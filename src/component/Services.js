import React from 'react';

function Services() {
  return (
    <>
      <div className='container-fluid services text-dark'>
        <div className='container py-5'>
          <div className='title text-center'>
            <h1>Our Services</h1>
            <p>We provide a Variety of marketing and promotion services <br /> to enable you and your buisness with innovative tools and strategies and attract more customers.</p>
          </div>
          <div className='row py-5 gy-2'>
            <div className='col-lg-3 col-sm-6'>
              <img src='branding.png' />
              <h3 className='my-2'>Branding</h3>
              <p>Whether you are looking to launch a brand or you just need help clarifying your message,we can help you</p>
            </div>
            <div className='col-lg-3 col-sm-6 '>
              <img src='copywriting.png' />
              <h3 className='my-2'>CopyWriting</h3>
              <p>Our exeperienced copywriters will gladly provide you with high-quality texts for your websites or advertisements.</p>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <img src='graphics design.png' />
              <h3 className='my-2'>Graphics Design</h3>
              <p>Our Graphics design services include printing brouchers,banners and logos for your advertising campaign.</p>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <img src='marketing.png' />
              <h3 className='my-2'>Marketing</h3>
              <p>This service include a Variety of promotional techniques and methods that can boost your company's products.</p>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <img src='outdoor.png' />
              <h3 className='my-2'>Outdoor Advertising</h3>
              <p>if you need to create your next out-of-home campaign or lease your space.we can satisfy your advertising needs</p>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <img src='strategy.png' />
              <h3 className='my-2'>Strategies</h3>
              <p>Our experts can help you devlop your marketing strategy and integrate it into your advertising campaign.</p>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <img src='smm.png' />
              <h3 className='my-2'>SMM</h3>
              <p>We can devlop a simple social media marketing plan designed specifically for your buisness and your needs.</p>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <img src='vidio-production.png' />
              <h3 className='my-2'>Vidio Production</h3>
              <p>Need a Professional advertising vidio for your campaign? we can offer anything you need.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;