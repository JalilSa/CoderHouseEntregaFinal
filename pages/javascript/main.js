

window.onload = function() {
  const track = document.getElementById("carousel");
  track.dataset.prevpercentage = 0;
  var nextpercentage = 0;
  Math.min(0, nextpercentage);
 Math.max(-100, nextpercentage);
  window.onmousedown = e => {
    track.dataset.mouseDownat = e.clientX;
  }
  window.onmouseup = () =>{
    track.dataset.mouseDownat="0";

    track.dataset.prevpercentage = track.dataset.percentage;
  }
   window.onmousemove = e =>{
    if(track.dataset.mouseDownat === "0") return;

      const mousedelta = parseFloat(track.dataset.mouseDownat)- e.clientX;
          maxdelta = window.innerWidth/2;

    const percentage = (mousedelta/ maxdelta)*-100;
           nextpercentage = parseFloat(track.dataset.prevpercentage)+percentage;
           track.dataset.percentage=nextpercentage



track.animate({
  transform:
  "translate(" + nextpercentage + "%,-50%)"},{duration:1200, fill:"forwards"}

)    
        } 
    }


