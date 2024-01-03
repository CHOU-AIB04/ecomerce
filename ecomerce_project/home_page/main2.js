// it's for the home page (departements part) when i click on one of four element a specific part in my website will be displayed
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


// this part it's for picture-slider
let slide_list = document.getElementById("slide-list");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let li = document.querySelectorAll("#bots li");
let navs = document.querySelectorAll("#slide-list nav");

let active = 0;
let length_items = navs.length - 1;
// the next code it's for the next button
next.addEventListener("click", function () {
  if (active + 1 > length_items) {
    active = 0;
  } else {
    active += 1;
  }
  active_picture();
});

// the next code it's for the prev button

prev.addEventListener("click", function () {
  if (active - 1 < 0) {
    active = length_items;
  } else {
    active -= 1;
  }
  active_picture();
});

// this function it takes the active value and go the navs index throught the active value and using the (offsetLeft) to take how the nav element is far for his container
// and also the function do : remove the class active from the previous bot and add it in current one
function active_picture() {
  let checkleft = navs[active].offsetLeft;
  slide_list.style.left = -checkleft + "px";

  let active_li = document.querySelector("#bots li.active");
  active_li.classList.remove("active");
  let checkbots = li[active];
  checkbots.classList.add("active");
}

// this code it's adding class active in bot that cliked and go the specific nav and finaly remove the active class from all li expect the clicked one
li.forEach((el, index) => {
  el.addEventListener("click", function () {
    el.classList.add("active");

    active = index;
    checkleft = navs[active].offsetLeft;
    slide_list.style.left = -checkleft + "px";
    li.forEach((e) => {
      if (e !== el) {
        e.classList.remove("active");
      }
    });
  });
});
// this part it's for heart icon : if i click on it the color will be changed and change the number in heart like
 
let heart = document.querySelectorAll("#heart");
let like = document.getElementById("like");

let like_num = 0;
heart.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.style.color === "black" || el.style.color === "") {
      el.classList.add("fas");
      el.classList.add("fa-heart");
      el.style.color = "red";
      like_num += 1;
      like.textContent = "";
      like.textContent = like_num;
    } else {
      el.classList.remove("fas");
      el.classList.remove("fa-heart");
      el.classList.add("far");
      el.classList.add("fa-heart");
      el.style.color = "black";
      like_num -= 1;
      like.textContent = "";
      like.textContent = like_num;
    }
  });
});

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