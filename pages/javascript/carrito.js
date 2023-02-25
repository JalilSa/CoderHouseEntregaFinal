window.onload = () => {
    const carrito = document.getElementById("carrito");
    const guardados = document.getElementById("guardados");

  
    carrito.onmousedown = () => {
      document.getElementById("carrito-main").classList.remove("displaynone");
      document.getElementById("guardados-main").classList.add("displaynone");

    };
  
    guardados.onmousedown = () => {
      document.getElementById("carrito-main").classList.add("displaynone");
      document.getElementById("guardados-main").classList.remove("displaynone");

   };
    };