const track = document.getElementById("carousel");


window.onmousedown = e =>{
    track.dataset.mouseDownat = e.clientX;
    console.log("Funciona");
}

