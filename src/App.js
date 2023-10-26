import React from 'react';
import './App.css';
import DailyTheme from './Components/DailyTheme';

function App() {
  return (
    <div className='App'>
      <DailyTheme />
    </div>
  );
}
export default App;


/**
 ### To-Do List for Photography Theme Generator

- [x] **Get daily theme** - DONE - Flickr API gets most popular daily tags
  - Implemented functionality to fetch the most popular daily tags using the Flickr API.

- [ ] **Save daily theme by date**
  - Create functionality to save the daily theme along with its associated date.

- [ ] **If saved theme exists and it is the same as the current date, retrieve daily theme from save**
  - Add functionality to check for and retrieve a previously saved daily theme if it matches the current date.

- [ ] **Get images based on daily theme and persist a list of 100 image URLs**
  - Use the daily theme to fetch images from Flickr and store the URLs of at least 100 images.
    how to build a flickr image url (see DailyTheme.js for reference)
    https://www.flickr.com/services/api/misc.urls.html

- [ ] **Display 3 (or more) of these images at a time**
  - Create a user interface to display a subset of the fetched images, with a minimum of 3 images visible. FIDEL

- [ ] **Add functionality to shuffle through images**
  - Implement image shuffling or cycling functionality for user interaction.

- [ ] **Cache image URLs for better performance**
  - Introduce image URL caching to enhance app performance by locally storing images. FIDEL

- [ ] **Improve image display and add functionality for image viewing like lightbox, zoom, etc.**
  - Enhance the image display in the app, potentially adding features such as a lightbox or zoom. FIDEL

- [ ] **Review Flickr guidelines for displaying images**
  - Thoroughly review Flickr's guidelines for displaying images and user attribution.
     https://www.flickr.com/services/developer/attributions/

- [ ] **Archive of previous themes**
  - Create an archive or history of previous daily themes for reference or exploration by users.
**/

// to-do / goals
// den skal først og fremmest kunne generere et dagligt emne
//det ville vi gøre ud fra en af de to apier
// Den funktionalitet skal automatisk køre en gang om dagen
// Og skal den gemme det emne
// Og bruge det hvis allerede eksisterer for dagen
// Så må den ikke bruge samme emne to gange
// Så evt vise en historik af emner
// Så kan vi bruge dagen emne til at vise populære billeder for det emne som reference
