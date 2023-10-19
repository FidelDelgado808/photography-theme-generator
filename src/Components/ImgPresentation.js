import React, { useState } from 'react';

function ImgPresentation() {
  const [imageSelector, setimageSelector] = useState({
    img1: 'https://lp-cms-production.imgix.net/image_browser/NEMO%20science%20museum%20Amsterdam.jpg?auto=format&q=75',
    img2: 'https://lp-cms-production.imgix.net/image_browser/MAS%20Museum%20Antwerp.jpg?auto=format&q=75',
    img3: 'https://lp-cms-production.imgix.net/image_browser/The%20Pompidou%20Centre.jpg?auto=format&q=75',
    img4: 'https://www.thewowstyle.com/wp-content/uploads/2015/02/1.Landscape-Photography.jpg',
    img5: 'https://www.thewowstyle.com/wp-content/uploads/2015/02/Heybridge-735702.jpg',
    img6: 'https://inspgr.id/app/uploads/2019/12/photography-pavel-sablya-18-1536x1186.jpg',
  });

  return (
    <>
      <div className='text-4xl'>Test</div>

      <div className='container'>
        <div className='mySlides'>
          <div className='numbertext'>1 / 6</div>
          <img className='w-full' alt='' src={imageSelector.img1} />
        </div>

        <div className='mySlides'>
          <div className='numbertext'>2 / 6</div>
          <img className='w-full' alt='' src={imageSelector.img2} />
        </div>

        <div className='mySlides'>
          <div className='numbertext'>3 / 6</div>
          <img className='w-full' alt='' src={imageSelector.img3} />
        </div>

        <div className='mySlides'>
          <div className='numbertext'>4 / 6</div>
          <img className='w-full' alt='' src={imageSelector.img4} />
        </div>

        <div className='mySlides'>
          <div className='numbertext'>5 / 6</div>
          <img className='w-full' alt='' src={imageSelector.img5} />
        </div>

        <div className='mySlides'>
          <div className='numbertext'>6 / 6</div>
          <img className='w-full' alt='' src={imageSelector.img1} />
        </div>

        <a className='prev' onClick='plusSlides(-1)'>
          &#10094;
        </a>
        <a className='next' onClick='plusSlides(1)'>
          &#10095;
        </a>

        <div className='caption-container'>
          <p id='caption' />
        </div>

        <div className='row'>
          <div className='column'>
            <img
              className='w-full'
              src={imageSelector.img1}
              onClick='currentSlide(1)'
              alt='The Woods'
            />
          </div>
          <div className='column'>
            <img
              className='w-full'
              src={imageSelector.img2}
              onClick='currentSlide(2)'
              alt='Cinque Terre'
            />
          </div>
          <div className='column'>
            <img
              className='w-full'
              src={imageSelector.img3}
              onClick='currentSlide(3)'
              alt='Mountains and fjords'
            />
          </div>
          <div className='column'>
            <img
              className='w-full'
              src={imageSelector.img4}
              onClick='currentSlide(4)'
              alt='Northern Lights'
            />
          </div>
          <div className='column'>
            <img
              className='w-full'
              src={imageSelector.img5}
              onClick='currentSlide(5)'
              alt='Nature and sunrise'
            />
          </div>
          <div className='column'>
            <img
              className='w-full'
              src={imageSelector.img6}
              onClick='currentSlide(6)'
              alt='Snowy Mountains'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ImgPresentation;
