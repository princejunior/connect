import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Home');
  }

  async getHtml() {
    return `
    <div class='box'>
    <div class='card-a'></div>
    <div class='card-a'></div>
    <div class='card-a'></div>
    <div class='card-a'></div>
    <div class='card-a'></div>
    <div class='card-a'></div>
    <div class='card-a'></div>
  </div>
  <div class='big-features'>
    <div class='big-feature'>
    </div>
    <div class='big-feature'></div>
    <div class='big-feature'></div>
    <div class='big-feature'></div>
    <div class='big-feature'></div>
    <div class='big-feature'></div>
  </div>
  <div class='small-features'>
    <div class='small-feature'></div>
    <div class='small-feature'></div>
    <div class='small-feature'></div>
    <div class='small-feature'></div>
    <div class='small-feature'></div>
    <div class='small-feature'></div>
  </div>
  <!-- Slideshow container -->
  <div class="slideshow-container">
  
    <!-- Full-width images with number and caption text -->
    <div class="mySlides fade">
      <div class="numbertext">1 / 3</div>
      <img src="./static/photos/lwLogo.png" style="width:100%">
  
    </div>
  
    <div class="mySlides fade">
      <div class="numbertext">2 / 3</div>
      <img src="./static/photos/lwLogo.png" style="width:100%">
  
    </div>
  
    <div class="mySlides fade">
      <div class="numbertext">3 / 3</div>
      <img src="./static/photos/lwLogo.png" style="width:100%">
    </div>
  
    <!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
  </div>
  
    `;
  }
}

// <!-- Slideshow container -->
// <div class="slideshow-container">

//   <!-- Full-width images with number and caption text -->
//   <div class="mySlides fade">
//     <div class="numbertext">1 / 3</div>
//     <img src="./static/photos/lwLogo.png" style="width:100%">

//   </div>

//   <div class="mySlides fade">
//     <div class="numbertext">2 / 3</div>
//     <img src="./static/photos/lwLogo.png" style="width:100%">

//   </div>

//   <div class="mySlides fade">
//     <div class="numbertext">3 / 3</div>
//     <img src="./static/photos/lwLogo.png" style="width:100%">
//   </div>

//   <!-- Next and previous buttons -->
//   <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
//   <a class="next" onclick="plusSlides(1)">&#10095;</a>
// </div>
