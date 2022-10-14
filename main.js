function openSlideMenu() {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "300px";
    document.getElementById("header,main,footer").style.filter = "blur";


  }
  function closeSlideMenu() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


