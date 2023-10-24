import React, { useState, useEffect } from 'react';
import { flickrService } from '../Services/flickrService';

const DailyTheme = () => {
  const [tagHotList, setTagHotList] = useState(null);

  const [tagImages, setTagImages] = useState(null);

  useEffect(() => {
    async function getTagHotList() {
      const tags = await flickrService.get().getTagHotList();
      setTagHotList(tags);
    }
    getTagHotList();
  }, []);

  useEffect(() => {
    if (tagHotList) {
      async function getImagesByTag() {
        let topTag = '';
        if (tagHotList?.tag && tagHotList?.tag?.length > 0) {
          topTag = tagHotList.tag[0]._content;
        }
        const images = await flickrService.get().getImagesByTag(topTag);
        setTagImages(images);
      }
      getImagesByTag();
    }
  }, [tagHotList]);

  return (
    <div className='container mx-auto'>
      {tagHotList && tagHotList?.tag && tagHotList?.tag?.length > 0 && (
        <div>
          <span className='top-2 text-white pt-4 font-medium text-3xl inline-block me-2'>
            Theme of the day:
          </span>
          <span className='uppercase text-white font-bold text-3xl inline-block'>
            {' '}
            {tagHotList.tag[0]._content}
          </span>
        </div>
      )}
      {tagImages && tagImages?.photo?.length > 0 && (
        <div>
          <div className='mb-2 text-white'>Images from theme of the day</div>
          <div className='flex flex-col max-w-full'>
            {tagImages.photo.map((photo, idx) => (
              <img
                className='object-contain max-h-[45vh] mb-12 w-full'
                key={idx}
                src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyTheme;
