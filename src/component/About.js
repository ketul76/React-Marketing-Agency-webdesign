import React from 'react';

function About() {
  return (
    <>
      <div className='container-fluid about'>
        <div className='container'>
          <div className='row py-5'>
            <div className='part1 col-lg-6 col-12'>
              <h1 className='my-4'>A Few Words About Us</h1>
              <p className='py-3'>We are team of talented marketrs who happen to love Creating smart ideas for those who will have us.we use our creative potential to provide the   smartest ideas.</p>
              <p>We have a wide range of exeperience ,expertise and tools to create and implement your campaigns,from carefully curating awesome content to optimising it with our great SEO powers as well as outdoor marketing skills.</p>
              <button type="button" class="btn btn-success mt-2">Learn More</button>
            </div>
            <div className='part2 col-lg-6 col-12 gy-3'>
              <img src='./about.jpg' className='img-fluid rounded' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;