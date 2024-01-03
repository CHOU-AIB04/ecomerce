
document.addEventListener("DOMContentLoaded", function () {
// this part it's for women li after clicking this will be exicute
let nav_women = document.getElementById("women-click");


  let womenClickElement = document.getElementById("women-click");
  if (womenClickElement) {
    let women_part = document.getElementById("women-part");
    nav_women.addEventListener("click", function (e) {
      e.preventDefault();
      if (
        women_part.style.display === "none" ||
        women_part.style.display === ""
      ) {
        women_part.style.display = "block";
      } else {
        women_part.style.display = "none";
      }
    });
  }
  // Other relevant code...
});

document.addEventListener("DOMContentLoaded", function() {
  let beauty = document.querySelector(".beauty");
  let electronic = document.querySelector(".electronic");
  let women = document.querySelector(".women");
  let kitchen = document.querySelector(".kitchen");
  let departement = document.getElementById("departements-side-part");
  let content = document.querySelectorAll(".content");
  
  beauty.addEventListener("click", function () {
    show("beauty-part");
  });
  
  electronic.addEventListener("click", function () {
    show("Electronic-part");
  });
  
  women.addEventListener("click", function () {
    show("womens-part");
  });
  
  kitchen.addEventListener("click", function () {
    show("kitchen-part");
  });
  
  function show(ele) {
    let specific_part = document.getElementById(ele);
    content.forEach((el) => {
      el.style.display = "none";
    });
  
    if (
      departement.style.display === "none" ||
      departement.style.display === ""
    ) {
      departement.style.display = "block";
  
      if (
        specific_part.style.display === "none" ||
        specific_part.style.display === ""
      ) {
        specific_part.style.display = "block";
      } else {
        specific_part.style.display = "none";
      }
    } else {
      departement.style.display = "none";
    }
  }
  });

