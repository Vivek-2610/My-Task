// // const rotate = (EL) => {
  
// //   let ang = 0; // All angles are expressed in radians
// //   let angStart = 0;
// //   let isStart = false;

// //   const angXY = (ev) => {
// //     const bcr = EL.getBoundingClientRect();
// //     const radius = bcr.width / 2;
// //     const { clientX, clientY } = ev.touches ? ev.touches[0] : ev;
// //     const y = clientY - bcr.top - radius;  // y from center
// //     const x = clientX - bcr.left - radius; // x from center
// //     return Math.atan2(y, x)* 90;
// //   };

// //   const mousedown = (ev) => {
// //     isStart = true;
// //     angStart = angXY(ev) - ang;
// //   };

// //   const mousemove = (ev) => {
// //     if (!isStart) return;
// //     ev.preventDefault();
// //     ang = angXY(ev) - angStart;
// //     EL.style.transform = `rotateX(${ang}deg)`;
// //   };

// //   const mouseup = () => {
// //     isStart = false; 
// //   };

// //   EL.addEventListener("mousedown", mousedown);
// //   document.addEventListener("mousemove", mousemove);
// //   document.addEventListener("mouseup", mouseup);
// // };

// // document.querySelectorAll(".rotate").forEach(rotate);


// /*
// JS used only for camera rotation, key click event's and for appearance animation rerun
// */
// $(document).ready(function() {
  
//   var winW = $(window).width();
//   var winH = $(window).height();
//   var $demo = $(".demo");
//   // var $rerun = $(".rerun");
//   var rotation = {
//     x: 75,
//     z: -50
//   };
//   var prevValues = {
//     x: 0,
//     y: 0
//   };
//   var rotationActive = false;
//   // var startAnimTime = 5400;
//   var timeout = setTimeout(function() {
//     $demo.addClass("ready");
//   }, 4400);
  
//   $(document).on("mousedown", function(e) {
//     var startX = e.pageX;
//     var startY = e.pageY;
    
//     $(document).on("mousemove", function(e) {
//       var deltaX;
//       var deltaY;
//       if (!rotationActive) {
//         deltaX = startX - e.pageX;
//         deltaY = startY - e.pageY;
//         rotationActive = true;
//       } else {
//         deltaX = prevValues.x - e.pageX;
//         deltaY = prevValues.y - e.pageY;
//       }
//       prevValues.x = e.pageX;
//       prevValues.y = e.pageY;
      
//       var degX = deltaX * 100 / 360;
//       var degY = deltaY * 100 / 360;
      
//       rotation.x += degY;
//       rotation.z += degX;
      
//       $demo.css("transform", "rotateX("+rotation.x+"deg) rotateZ("+rotation.z+"deg)");
//     });
    
//     $(document).on("mouseup", function(e) {
//       $(document).off("mousemove");
//       $(document).off("mouseup");
//       rotationActive = false;
//       prevValues.x = 0;
//       prevValues.y = 0;
//     });
//   });
  
//   $(document).on("click", ".demo__panelKeys-key", function() {
//     $(this).removeClass("pressed");
//     $(this).css("top");
//     $(this).addClass("pressed");
//   });
  
//   $(document).on("click", ".rerun", function() {
//     window.clearTimeout(timeout);
//     $(".demo__panelKeys-key").removeClass("pressed");
//     $demo.hide().removeClass("ready");
//     $demo.css("top");
//     $demo.show();
    
//     timeout = setTimeout(function() {
//       $demo.addClass("ready");
//     }, 4400);
//   });
  
//   $(window).on("resize", function() {
//     winW = $(window).width();
//     winH = $(window).height();
//   });
  
// });


function r(from, to) {
  return ~~(Math.random() * (to - from + 1) + from);
}
function pick() {
  return arguments[r(0, arguments.length - 1)];
}
function getChar() {
  return String.fromCharCode(pick(
    r(0x3041, 0x30ff),
    r(0x2000, 0x206f),
    r(0x0020, 0x003f)
  ));
}
function loop(fn, delay) {
  let stamp = Date.now();
  function _loop() {
    if (Date.now() - stamp >= delay) {
      fn(); stamp = Date.now();
    }
    requestAnimationFrame(_loop);
  }
  requestAnimationFrame(_loop);
}
class Char {
  constructor() {
    this.element = document.createElement('span');
    this.mutate();
  }
  mutate() {
    this.element.textContent = getChar();
  }
}
class Trail {
  constructor(list = [], options) {
    this.list = list;
    this.options = Object.assign(
      { size: 10, offset: 0 }, options
    );
    this.body = [];
    this.move();
  }
  traverse(fn) {
    this.body.forEach((n, i) => {
      let last = (i == this.body.length - 1);
      if (n) fn(n, i, last);
    });
  }
  move() {
    this.body = [];
    let { offset, size } = this.options;
    for (let i = 0; i < size; ++i) {
      let item = this.list[offset + i - size + 1];
      this.body.push(item);
    }
    this.options.offset = 
      (offset + 1) % (this.list.length + size - 1);
  }
}
class Rain {
  constructor({ target, row }) {
    this.element = document.createElement('p');
    this.build(row);
    if (target) {
      target.appendChild(this.element);
    }
    this.drop();
  }
  build(row = 20) {
    let root = document.createDocumentFragment();
    let chars = [];
    for (let i = 0; i < row; ++i) {
      let c = new Char();
      root.appendChild(c.element);
      chars.push(c);
      if (Math.random() < .5) {
        loop(() => c.mutate(), r(1e3, 5e3));
      }
    }
    this.trail = new Trail(chars, { 
      size: r(10, 30), offset: r(0, 100) 
    });
    this.element.appendChild(root); 
  }
  drop() {
    let trail = this.trail;
    let len = trail.body.length;
    let delay = r(10, 100);
    loop(() => {
      trail.move();
      trail.traverse((c, i, last) => {
        c.element.style = `
          color: hsl(136, 100%, ${85 / len * (i + 1)}%)
        `;
        if (last) {
          c.mutate();
          c.element.style = `
            color: hsl(136, 100%, 85%);
            text-shadow:
              0 0 .5em #fff,
              0 0 .5em currentColor;
          `;
        }
      });
    }, delay);
  }
}

    const main = document.querySelector('main');
for (let i = 0; i < 50; ++i) {
  new Rain({ target: main, row: 50 });
}