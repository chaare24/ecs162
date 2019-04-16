function myFunction() {
  const mobile = window.innerWidth;
  const tablet = window.innerWidth;

  // Mobile
  let showMob = document.getElementsByClassName("showMobile");
  // Tablet
  let showTab = document.getElementsByClassName("showTab");
  // Web
  // let showWeb = documentgetElementsByClassName("showWeb");
  let block2 = document.getElementById("block2");
  let btn1 = document.getElementById("readMoreBtn");
  let btn2 = document.getElementById("readLessBtn");
  let btn2Web = document.getElementById("readLessBtn2");
  let footer = document.getElementById("footer");

  // Mobile
  if (mobile <= 480) {
    if (block2.style.display === "none") {
      btn1.style.display = "none";
      btn2.style.display = "inline";
      for (let i = 0; i < showMob.length; i++) {
        showMob[i].style.display = "flex";
      }
      block2.style.display = "inline";
    } else {
      btn1.style.display = "inline";
      btn2.style.display = "none";
      for (let i = 0; i < showMob.length; i++) {
        showMob[i].style.display = "none";
      }
      block2.style.display = "none";
    }
    // Tablet
  } else if (tablet > 480 && tablet <= 850) {
    footer.style.display = "flex";
    if (block2.style.display === "none") {
      btn1.style.display = "none";
      btn2.style.display = "inline";
      for (let i = 0; i < showTab.length; i++) {
        showTab[i].style.display = "flex";
      }
      block2.style.display = "inline";
    } else {
      btn1.style.display = "inline";
      btn2.style.display = "none";
      for (let i = 0; i < showTab.length; i++) {
        showTab[i].style.display = "none";
      }
      block2.style.display = "none";
    }
    // Web
  } else {
    if (block2.style.display === "none") {
      btn1.style.display = "none";
      btn2Web.style.display = "inline";
      block2.style.display = "flex";
      footer.style.display = "flex";
    } else {
      btn1.style.display = "inline";
      btn2Web.style.display = "none";
      block2.style.display = "none";
      footer.style.display = "none";
    }
  }

}