let h2 = document.querySelector(".departement h2");
let p = document.querySelector(".departement p");
let i_icon = document.getElementById("icon");
let departements = document.getElementById("departements");
let content = document.querySelectorAll(".content");

// some modification departement element style
i_icon.style.cssText =
  "position : absolute; right : 20px; top : 50%; transform : translateY(-50%); cursor : pointer; transition : 1s;";
h2.style.fontSize = "18px";
p.style.fontSize = "12px";
departements.style.cssText = "display : none; transition : 0.5s;";

//  this to do an event for the i element

i_icon.addEventListener("click", function () {
  if (i_icon.classList.contains("fa-bars")) {
    i_icon.classList.remove("fa-bars");
    i_icon.classList.add("fa-times");
    departements.style.display = "block";
  } else {
    i_icon.classList.remove("fa-times");
    i_icon.classList.add("fa-bars");
    departements.style.display = "none";

    content.forEach((el) => {
      el.style.display = "none";
    });
  }
});

// let's handle the product picture part

let main_pic = document.getElementById("main-pic");
let child_div = document.querySelectorAll("#child-pics div");

child_div.forEach((el) => {
  el.addEventListener("click", function () {
    el.classList.add("active");
    let container_styles = window.getComputedStyle(el); //get all the el styles
    let background = container_styles.getPropertyValue("background-image"); // get the value of backgroung-image
    let url = background.substring(26).slice(0, -2);
    main_pic.style.backgroundImage = `url(..${url})`;
    child_div.forEach((ele) => {
      if (ele !== el) {
        ele.classList.remove("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let trr = document.querySelector("#try");
  // Assuming 'products' is the ID of a static parent element that contains the dynamic button
  trr.addEventListener("click", function () {
    location.href = "https://www.youtube.com/";
  });
});
