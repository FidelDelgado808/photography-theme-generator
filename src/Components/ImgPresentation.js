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

  // Get all Images

  image_array = [
    'https://lp-cms-production.imgix.net/image_browser/NEMO%20science%20museum%20Amsterdam.jpg?auto=format&q=75',
    'https://lp-cms-production.imgix.net/image_browser/MAS%20Museum%20Antwerp.jpg?auto=format&q=75',
    'https://lp-cms-production.imgix.net/image_browser/The%20Pompidou%20Centre.jpg?auto=format&q=75',
  ];
  function get_random_image() {
    random_index = Math.floor(Math.random() * image_array.lenght);

    // get random image from index

    selected_image = image_array[random_index];

    // Display img
    document.getElementById('image_shower').src = `${image_array}`;
  }
  return (
    <>
      <div className='container'>
        <div className='innerContainer'>
          <img id='image_shower' />
        </div>
        <div className='buttonContainer'>
          <button onClick={get_random_image()}>
            <i></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default ImgPresentation;
