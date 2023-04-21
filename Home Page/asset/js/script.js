'use strict';

document.querySelector('.toggle')
        .addEventListener('click', function() {
  this.classList.toggle('activate');
});


$(function(){ 
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse('hide');
      document.querySelectorAll(".toggle").classList.remove("activate");
  });
});

$('.nav-item a').click(function(){
  // $('.toggle').removeClass('activate');
  $('.toggle').removeClass('activate');
});


// variables
const sections = document.querySelectorAll('section');
const navElements = document.querySelectorAll('ul li');
let activeSectionIndicator = '';

// intersection observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(`ul li.active`).classList.remove('active');
        activeSectionIndicator = entry.target.classList[0];
        document
          .querySelector(`ul li[data-section="${activeSectionIndicator}"]`)
          .classList.add('active');
      }
    });
  },
  { 
    root: document, /* <-- This is necessary for an iframe to properly target itself as the root document instead of the parent window. https://github.com/w3c/IntersectionObserver/issues/372 */
    rootMargin: '-10% 0px -90% 0px' 
  }
  
  
);

sections.forEach((section) => {
  observer.observe(section);
});

// ACCORDIAN
$(document).ready(function () {
    $('.accordian-title').click(function () {
      $(this).parents('.accordian-slide').children('.accordian-item').removeClass('active');
      $(this).parents('.accordian-slide').children('.accordian-item').children('.accordian-title').removeClass('hide');
      $(this).parent('.accordian-item').addClass('active');
      $(this).addClass('hide');
    });
  });

// TABBING
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");
tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});
function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;
   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });
   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });
   document.querySelector("#" + country).classList.add("active");
   btnTarget.classList.add("active");
}

//ISOTOPE
var $grid = $('.grid').imagesLoaded( function() {
  $grid.isotope({
    itemSelector: '.grid-item',
	  percentPosition: true,
    gutter: 0,
    masonry: {
        columnWidth: '.grid-sizer'
    }
  });
});
$('.iso-nav a').click(function(){
	$('.iso-nav a').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.grid').isotope({
		filter: selector
	});
	return false;
});

//COUNTER
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 10000;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});



$('.slick-carousel').slick({
  infinite: true,
  slidesToShow: 1, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  arrows: false, // Adds arrows to sides of slider
  dots: true // Adds the dots on the bottom
});
//  BACK TO TOP BUTTON
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


/*
Note: 
- this is my first canvas piece and first interaction with es6.
- if there are ways of improving this i would love you to reach out and let me know. 
*/


// create funMouse function
function funMouse() {
  // get canvas
  const canvas = document.querySelector(".js--canvas");
  const canvasContext = canvas.getContext("2d");

  // set canvas size
  let canvasWidth = (canvas.width = window.innerWidth);
  let canvasHeight = (canvas.height = window.innerHeight);

  // get mouse position
  let mouseX = canvasWidth / 2;
  let mouseY = canvasHeight / 2;

  // create circles
  let circle = {
      radius: 12,
      lastX: mouseX,
      lastY: mouseY,
  };

  let miniCircle = {
      radius: 3,
      lastX: mouseX,
      lastY: mouseY,
  };

  // get all data-hover elements
  // obvi this is better one a web page with more than one anchor tag
  const elements = [...document.querySelectorAll("a")];

  // resize canvas function
  var resizeCanvas = function resizeCanvas() {
      canvasWidth = canvas.width = window.innerWidth;
      canvasHeight = canvas.height = window.innerHeight;
  };

  // create var holding mouseRender function
  var mouseRender = function mouseRender() {
      // clear canvas so no colours or styles overlap
      canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);

      // get circles x-coordinate and y-coordinate based on mouse coordinates
      // the small circle has a slight delay due to the last parms passed
      circle.lastX = lerp(circle.lastX, mouseX, 0.5);
      circle.lastY = lerp(circle.lastY, mouseY, 0.5);

      miniCircle.lastX = lerp(miniCircle.lastX, mouseX, 0.1);
      miniCircle.lastY = lerp(miniCircle.lastY, mouseY, 0.1);

      // create first circle
      canvasContext.beginPath();
      canvasContext.arc(circle.lastX, circle.lastY, circle.radius, 0, Math.PI * 2, false);
      canvasContext.lineWidth = 2;
      canvasContext.strokeStyle = "white";
      canvasContext.stroke();
      canvasContext.closePath();

      // create small/second circle
      canvasContext.beginPath();
      canvasContext.arc(miniCircle.lastX, miniCircle.lastY, miniCircle.radius, 0, Math.PI * 2, false);
      canvasContext.fillStyle = "white";
      canvasContext.fill();
      canvasContext.closePath();

      // render/draw mouse by calling requestAnimationFrame() and passing itself through
      requestAnimationFrame(mouseRender);
  };

  // mouseInit function
  var mouseInit = function mouseInit() {
      // render/draw mouse by calling requestAnimationFrame() and passing mouseRender
      requestAnimationFrame(mouseRender);

      // on mouse move update coordinates
      window.addEventListener("mousemove", function (e) {
          mouseX = e.clientX;
          mouseY = e.clientY;
      });

      // update canvas size on window resize
      window.addEventListener("resize", resizeCanvas, false);

      // style mouse on hover function
      function on() {
          canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
          canvasContext.beginPath();
          canvasContext.arc(circle.lastX, circle.lastY, circle.radius, 0, Math.PI * 2, false);
          canvasContext.lineWidth = 3;
          canvasContext.strokeStyle = "#7BE524";
          canvasContext.stroke();
          canvasContext.closePath();

          requestAnimationFrame(on);
      }

      // style mouse off hover
      // should be the same are prior to any hover
      // i noticed if i don't do this then the on styles will stay even after hover
      function off() {
          canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
          canvasContext.beginPath();
          canvasContext.arc(circle.lastX, circle.lastY, circle.radius, 0, Math.PI * 2, false);
          canvasContext.lineWidth = 2;
          canvasContext.strokeStyle = "white";
          canvasContext.stroke();
          canvasContext.closePath();

          canvasContext.beginPath();
          canvasContext.arc(miniCircle.lastX, miniCircle.lastY, miniCircle.radius, 0, Math.PI * 2, false);
          canvasContext.fillStyle = "white";
          canvasContext.fill();
          canvasContext.closePath();

          requestAnimationFrame(off);
      }

      // using TweenMax.min.js by GSAP addin easing for radius for circle
      // https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js
      let tween = TweenMax.to(circle, 0.25, {
          radius: circle.radius * 2.5,
          ease: Power1.easeInOut,
          paused: true,
      });

      // for each hover element add mouseenter and mouseleave actions
      elements.forEach((el) => {
          el.addEventListener(
              "mouseenter",
              () => {
                  on();
              },
              false
          );
          el.addEventListener(
              "mouseleave",
              () => {
                  off();
              },
              false
          );
          el.addEventListener(
              "mouseenter",
              () => {
                  tween.play();
              },
              false
          );
          el.addEventListener(
              "mouseleave",
              () => {
                  tween.reverse();
              },
              false
          );
      });
  };

  // tbh this is from ReGGae's pen that is added in the html comment at the top
  // from my understanding it does a bunch of math to figure out a smooth position update, including the delay on the mini circle
  // my [very poor] translation of this math:
  // shape.lastX = lerp(shape.lastX, mouseX, delay);
  // above === below
  // return (1 - delay) * shape.lastX + delay * mouseX;
  var lerp = function lerp(a, b, n) {
      return (1 - n) * a + n * b;
  };

  //init the mouse function
  mouseInit();
}
// run fun mouse to have this cursor
funMouse();




