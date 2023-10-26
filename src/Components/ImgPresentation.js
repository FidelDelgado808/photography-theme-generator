import React, { useState, useEffect } from 'react';

export const ImgPresentation = () => {
  // state for storing selected image, starts as null
  const [selectedImage, setSelectedImage] = useState(null);
  // state for storing randomly selected index
  const [activeIndex, setActiveIndex] = useState(null);

  // predefined array containing image urls
  const imageArray = [
    'https://lp-cms-production.imgix.net/image_browser/NEMO%20science%20museum%20Amsterdam.jpg?auto=format&q=75',
    'https://lp-cms-production.imgix.net/image_browser/MAS%20Museum%20Antwerp.jpg?auto=format&q=75',
    'https://lp-cms-production.imgix.net/image_browser/The%20Pompidou%20Centre.jpg?auto=format&q=75',
  ];

  // Runs getRandomIndex to get index of image from array. Stores selected image to state.
  function selectRandomImage() {
    let randomIndex = getRandomIndex();
    setSelectedImage(imageArray[randomIndex]);
  }

  // Gets random index of image from array and stores the latest index to to state. If latest index exists in state, 
  // keep getting new indices until the index is not the same as the latest.
  function getRandomIndex() {
    let randomIndex = null;
    if (activeIndex) {
      console.log('Entering with active index', activeIndex);
      randomIndex = activeIndex;
      do {
        randomIndex = Math.floor(Math.random() * imageArray.length);
        console.log('Generated index:', randomIndex);
      } while (randomIndex === activeIndex);
    } else {
      randomIndex = Math.floor(Math.random() * imageArray.length);
    }
    setActiveIndex(randomIndex);
    return randomIndex;
  }

  // It runs on component load, and every time selectedImage changes.
  // In the current state only runs once - it checks if selectedImage state has a value, if not it runs a function to set a value.

  useEffect(() => {
    if (!selectedImage) {
      selectRandomImage();
    }
  }, [selectedImage]);

  return (
    <div className='container flex flex-col items-center mx-auto'>
      <h1 className='text-4xl font-extrabold mb-4'>Photo theme generator</h1>
      {selectedImage && (
        <img
          className='max-h-[50vh]'
          id='image_shower'
          alt='selected randomly from list'
          src={selectedImage}
        />
      )}
      <div>
      <img
          className='max-h-[50vh]'
          id='image_shower'
          alt='selected randomly from list'
          src={selectedImage}
        />

      </div>
      <div className='buttonContainer mt-2'>
        <button
          className='btn bg-slate-700 text-white p-3 rounded active:bg-slate-200'
          type='button'
          onClick={() => {
            selectRandomImage();
          }}
        >
          Randomize
        </button>
      </div>
    </div>
  );
};

export default ImgPresentation;
