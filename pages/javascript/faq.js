window.onload = () => {
    const seguridad = document.getElementById("seguridad");
    const pagos = document.getElementById("pagos");
    const delivery = document.getElementById("delivery");
    const general = document.getElementById("general");
  
    seguridad.onmousedown = () => {
      document.getElementById("seguridad-r").classList.remove("displaynone");
      document.getElementById("pagos-r").classList.add("displaynone");
      document.getElementById("delivery-r").classList.add("displaynone");
      document.getElementById("general-r").classList.add("displaynone");
    };
  
    pagos.onmousedown = () => {
      document.getElementById("seguridad-r").classList.add("displaynone");
      document.getElementById("pagos-r").classList.remove("displaynone");
      document.getElementById("delivery-r").classList.add("displaynone");
      document.getElementById("general-r").classList.add("displaynone");
    };
  
    delivery.onmousedown = () => {
      document.getElementById("seguridad-r").classList.add("displaynone");
      document.getElementById("pagos-r").classList.add("displaynone");
      document.getElementById("delivery-r").classList.remove("displaynone");
      document.getElementById("general-r").classList.add("displaynone");
    };
  
    general.onmousedown = () => {
      document.getElementById("seguridad-r").classList.add("displaynone");
      document.getElementById("pagos-r").classList.add("displaynone");
      document.getElementById("delivery-r").classList.add("displaynone");
      document.getElementById("general-r").classList.remove("displaynone");
    };
  };