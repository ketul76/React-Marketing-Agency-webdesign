import React from 'react';

function Home() {
  return (
   <>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./slider1.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block mt-5">
              <h1 className=''>DEDICATED TO RESULTS</h1>
            </div>
          </div>
        </div>
      </div>
    </>
      );
}

      export default Home;