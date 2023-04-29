// // $(document).ready(function(){ 
// //     // $("button").click(function(){
// //     //     $("p").hide();
// //     // });

// //     // $("button").click(function(){
// //     //   $("div").animate({
// //     //     left: '250px',
// //     //     height: '+=150px',
// //     //     width: '+=150px'
// //     //   });
// //     // });

// //     // $("button").click(function(){
// //     //     var div = $("div");
// //     //     div.animate({height: '300px', opacity: '0.4'}, "slow");
// //     //     div.animate({width: '300px', opacity: '0.8'}, "slow");
// //     //     div.animate({height: '100px', opacity: '0.4'}, "slow");
// //     //     div.animate({width: '100px', opacity: '0.8'}, "slow");
// //     //   });

// //     // $("button").click(function(){
// //     //     $("p").css("color", "red").slideUp(2000).slideDown(2000);
// //     //   });

// //     // $("#btn1").click(function(){
// //     //     alert("Text: " + $("#test").text());
// //     //   });
// //     //   $("#btn2").click(function(){
// //     //     alert("HTML: " + $("#test").html());
// //     //   });   

// //     // $(document).ready(function(){
// //     //     $("#btn1").click(function(){
// //     //       $("p").append(" <b>Appended text</b>.");
// //     //     });
      
// //     //     $("#btn2").click(function(){
// //     //       $("ol").append("<li>Appended item</li>");
// //     //     });
// //     //   });
// //  });

// ////////////////////// ACCORDION //////////////////////
// ////First slide open 
$(document).ready(function(){
  $(".detail").slideUp();
  $(".detail.show").slideDown();
  $(".heading").click(function(e) {
    e.preventDefault();
    $(".show").slideDown();
    if ($(this).next().hasClass('show')) {
        $(this).next().removeClass('show');
        $(this).next().slideUp(350);
    } else {
        $(this).parent().parent().find('.accordion-item .detail').removeClass('show');
        $(this).parent().parent().find('.accordion-item .detail').slideUp(350);
        $(this).next().toggleClass('show');
        $(this).next().slideToggle(350);
    }
  });
  $(".preview").click(function(){
    setInterval(function() { for(var i=0;i<5;i++){
      $(".slides").animate({left: "-" + i * 220 +"px"});
    }}, 100);
   
  })
})

// ////All slide close
// // $(document).ready(function(){
// //   $(".detail").slideUp();
// //   $(".heading").click(function(e) {
// //     e.preventDefault();
// //     $(".show").slideDown();
// //     if ($(this).next().hasClass('show')) {
// //         $(this).next().removeClass('show');
// //         $(this).next().slideUp(350);
// //     } else {
// //         $(this).parent().parent().find('.accordion-item .detail').removeClass('show');
// //         $(this).parent().parent().find('.accordion-item .detail').slideUp(350);
// //         $(this).next().toggleClass('show');
// //         $(this).next().slideToggle(350);
// //     }
// //   });
// // })

// var seconds = 2; //time beetwen auto slide
// var delay = 8; //time to restart auto slide
// var slider = $('#slider');
// var images = $('#slider .images');
// var controls = $('<div>').addClass('controls');
// slider.after(controls);
// var width = images.width();
// var slideClick = function () {  
//   var b = $(this);
//   $('.controls div').removeClass('current');
//   b.addClass('current');
//   var index = b.index();
//   images.css('left', -1 * index * width);
// };
// $('#slider .images .box').each(function (i) {
//   var box = $(this);
//   box.css('left', i * width);
//   var button = $('<div>');
//   controls.append(button);
//   if (i == 0) { button.addClass('current') }
//   button.click(function(){
//     clearInterval(autoSlideInterval);
//     slideClick.apply(this);
//     setTimeout(function () {
//        setInterval(autoSlide, seconds * 2000);     
//     }, delay * 2000);
//   });
// });
// var autoSlide = function(){
//   var next = $('.controls .current').next();
//   if (next.length) {
//     slideClick.apply(next); 
//   } else {
//     var first = $('.controls div').first();
//     slideClick.apply(first); 
//   }
// };
// var autoSlideInterval = setInterval(autoSlide, seconds * 2000);
