const rotate = (EL) => {
  
  let ang = 0; // All angles are expressed in radians
  let angStart = 0;
  let isStart = false;

  const angXY = (ev) => {
    const bcr = EL.getBoundingClientRect();
    const radius = bcr.width / 2;
    const { clientX, clientY } = ev.touches ? ev.touches[0] : ev;
    const y = clientY - bcr.top - radius;  // y from center
    const x = clientX - bcr.left - radius; // x from center
    return Math.atan2(y, x)* 20;
  };

  const mousedown = (ev) => {
    isStart = true;
    angStart = angXY(ev) - ang;
  };

  const mousemove = (ev) => {
    if (!isStart) return;
    ev.preventDefault();
    ang = angXY(ev) - angStart;
    EL.style.transform = `rotateX(${ang}deg)  rotateY(${ang}deg)`;
  };

  const mouseup = () => {
    isStart = false; 
  };

  EL.addEventListener("mousedown", mousedown);
  document.addEventListener("mousemove", mousemove);
  document.addEventListener("mouseup", mouseup);
};

document.querySelectorAll(".rotate").forEach(rotate);