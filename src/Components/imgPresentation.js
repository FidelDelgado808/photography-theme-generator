import React from 'react';
import App from '../App';
import { useState } from 'react';

function App() {

const [imageSelector, setimageSelector] = useState({
		img1: 'https://lp-cms-production.imgix.net/image_browser/NEMO%20science%20museum%20Amsterdam.jpg?auto=format&q=75',
		img2: 'https://lp-cms-production.imgix.net/image_browser/MAS%20Museum%20Antwerp.jpg?auto=format&q=75',
		img3: 'https://lp-cms-production.imgix.net/image_browser/The%20Pompidou%20Centre.jpg?auto=format&q=75',
		img4: 'https://www.thewowstyle.com/wp-content/uploads/2015/02/1.Landscape-Photography.jpg',
		img5: 'https://www.thewowstyle.com/wp-content/uploads/2015/02/Heybridge-735702.jpg',
    img6: 'https://inspgr.id/app/uploads/2019/12/photography-pavel-sablya-18-1536x1186.jpg',
	});

return(
  <>
  <div className="text-4xl">Test
  
  </div>
  
  <div class="container">
  
  <div class="mySlides">
    <div class="numbertext">1 / 6</div>
      <img src={imageSelector.img1}  style="width:100%"/>
      </div>

  
  <div class="mySlides">
    <div class="numbertext">2 / 6</div>
      <img src={imageSelector.img2}  style="width:100%"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 6</div>
      <img src={imageSelector.img3}  style="width:100%"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">4 / 6</div>
      <img src={imageSelector.img4}  style="width:100%"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 6</div>
      <img src={imageSelector.img5}  style="width:100%"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">6 / 6</div>
      <img src={imageSelector.img1}  style="width:100%"/>
  </div>

  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>

  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <div class="row">
    <div class="column">
      <img class="demo cursor" src={imageSelector.img1} style="width:100%" onclick="currentSlide(1)" alt="The Woods"/>
    </div>
    <div class="column">
      <img class="demo cursor" src={imageSelector.img2} style="width:100%" onclick="currentSlide(2)" alt="Cinque Terre"/>
    </div>
    <div class="column">
      <img class="demo cursor" src={imageSelector.img3} style="width:100%" onclick="currentSlide(3)" alt="Mountains and fjords"/>
    </div>
    <div class="column">
      <img class="demo cursor" src={imageSelector.img4} style="width:100%" onclick="currentSlide(4)" alt="Northern Lights"/>
    </div>
    <div class="column">
      <img class="demo cursor" src={imageSelector.img5}  style="width:100%" onclick="currentSlide(5)" alt="Nature and sunrise"/>
    </div>
    <div class="column">
      <img class="demo cursor" src={imageSelector.img6}  style="width:100%" onclick="currentSlide(6)" alt="Snowy Mountains"/>
    </div>
  </div>
</div>

</>);
  }

  export default App;