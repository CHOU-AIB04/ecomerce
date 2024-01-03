function departement() {
  let departements = document.getElementById("departements");
  for (let i = 1; i <= 11; i++) {
    let nav = document.createElement("nav");
    departements.appendChild(nav);
    let main_i = document.createElement("i");
    let h2 = document.createElement("h3");
    let div = document.createElement("div");
    div.appendChild(main_i);
    div.appendChild(h2);
    nav.appendChild(div);
    if (i === 1 || i === 2 || i === 3 || i === 8) {
      let i_icon = document.createElement("i");
      nav.appendChild(i_icon);
      i_icon.classList.add("fas");
      i_icon.classList.add("fa-long-arrow-alt-right");
    }
    if (i === 1) {
      h2.textContent = "Beauty";
      main_i.classList.add("fas");
      main_i.classList.add("fa-shopping-cart");
    } else if (i === 2) {
      h2.textContent = "Electronic";
      main_i.classList.add("fas");
      main_i.classList.add("fa-shopping-cart");
    } else if (i === 3) {
      h2.textContent = "Women's fashion";
      main_i.classList.add("fas");
      main_i.classList.add("fa-shopping-cart");
    } else if (i === 4) {
      h2.textContent = "Men's fashion";
      main_i.classList.add("fas");
      main_i.classList.add("fa-shopping-cart");
    } else if (i === 5) {
      h2.textContent = "Girl's fashion";
      main_i.classList.add("fas");
      main_i.classList.add("fa-shopping-cart");
    } else if (i === 6) {
      h2.textContent = "Boy's fashion";
      main_i.classList.add("fas");
      main_i.classList.add("fa-shopping-cart");
    } else if (i === 7) {
      h2.textContent = "Health& Household";
      main_i.classList.add("fas");
      main_i.classList.add("fa-shopping-cart");
    } else if (i === 8) {
      h2.textContent = "Home & Kitchen";
      main_i.classList.add("fas");
      main_i.classList.add("fa-shopping-cart");
    } else if (i === 9) {
      h2.textContent = "Pet supplles";
      main_i.classList.add("fas");
      main_i.classList.add("fa-shopping-cart");
    } else if (i === 10) {
      h2.textContent = "Sports";
      main_i.classList.add("fas");
      main_i.classList.add("fa-shopping-cart");
    } else {
      h2.textContent = "Best seller";
      main_i.classList.add("fas");
      main_i.classList.add("fa-shopping-cart");
    }
    if (i === 1 || i === 2 || i === 3 || i === 8) {
      nav.id = "navs";
      if (i === 1) {
        nav.classList.add("beauty");
      } else if (i === 2) {
        nav.classList.add("electronic");
      } else if (i === 3) {
        nav.classList.add("women");
      } else {
        nav.classList.add("kitchen");
      }
      if (i === 1) {
        nav.setAttribute("name", "beauty-part");
      } else if (i === 2) {
        nav.setAttribute("name", "Electronic-part");
      } else if (i === 3) {
        nav.setAttribute("name", "womens-part");
      } else {
        nav.setAttribute("name", "kitchen-part");
      }
    }
  }
}
// this function it's for side-part for women-beauty-electronic-home_kitcheen
function side_part() {
  let section = document.getElementById("departements-side-part");
  for (let i = 1; i <= 4; i++) {
    let nav = document.createElement("nav");
    section.appendChild(nav);
    nav.classList.add("content");
    let ul = document.createElement("ul");
    nav.appendChild(ul);

    if (i === 1) {
      nav.classList.add("nav1");
      nav.id = "beauty-part";
      for (let x = 1; x <= 8; x++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        ul.appendChild(li);
        li.appendChild(a);
        a.href = "#";
        if (x === 1) {
          a.textContent = "Makeup";
        } else if (x === 2) {
          a.textContent = "Skin car";
        } else if (x === 3) {
          a.textContent = "Skin car";
        } else if (x === 4) {
          a.textContent = "Fragrance";
        } else if (x === 5) {
          a.textContent = "Feet & Brand care";
        } else if (x === 6) {
          a.textContent = "Tools & Acessoires";
        } else if (x === 7) {
          a.textContent = "sheve";
        } else {
          a.textContent = "Personal Care";
        }
      }
    } else if (i === 2) {
      nav.classList.add("nav2");
      nav.id = "Electronic-part";
      for (let x = 1; x <= 8; x++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        ul.appendChild(li);
        li.appendChild(a);
        a.href = "#";
        if (x === 1) {
          a.textContent = "Camera";
        } else if (x === 2) {
          a.textContent = "Cell Phones";
        } else if (x === 3) {
          a.textContent = "Computers";
        } else if (x === 4) {
          a.textContent = "GPS & Navigation";
        } else if (x === 5) {
          a.textContent = "Headphones";
        } else if (x === 6) {
          a.textContent = "Home Audio";
        } else if (x === 7) {
          a.textContent = "Video Projectors";
        } else {
          a.textContent = "Other Technology";
        }
      }
    } else if (i === 3) {
      nav.classList.add("nav3");
      nav.id = "womens-part";
      for (let x = 1; x <= 6; x++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        ul.appendChild(li);
        li.appendChild(a);
        a.href = "#";
        if (x === 1) {
          a.textContent = "Clothing";
        } else if (x === 2) {
          a.textContent = "Shoes";
        } else if (x === 3) {
          a.textContent = "jewely";
        } else if (x === 4) {
          a.textContent = "Watches";
        } else if (x === 5) {
          a.textContent = "Headphones";
        } else {
          a.textContent = "handtags";
        }
      }
    } else {
      nav.classList.add("nav4");
      nav.id = "kitchen-part";
      for (let x = 1; x <= 8; x++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        ul.appendChild(li);
        li.appendChild(a);
        a.href = "#";
        if (x === 1) {
          a.textContent = "Kitchen";
        } else if (x === 2) {
          a.textContent = "Cleaning Home";
        } else if (x === 3) {
          a.textContent = "Pancry";
        } else if (x === 4) {
          a.textContent = "Great home";
        } else if (x === 5) {
          a.textContent = "breakFast";
        } else if (x === 6) {
          a.textContent = "bed";
        } else if (x === 7) {
          a.textContent = "Rooms";
        } else {
          a.textContent = "Others";
        }
      }
    }
  }
}
function product_details() {
  for (let s = 1; s <= 2; s++) {
    // this for statement it's for create two section
    let article = document.getElementById("products");
    let section = document.createElement("section");
    article.appendChild(section);
    if (s === 1) {
      section.id = "product-pics"; // create elements inside the first section
      for (let i = 1; i <= 2; i++) {
        // this for statement it's for create two divs inside the fist section
        let div = document.createElement("div");
        section.appendChild(div);
        if (i === 1) {
          div.id = "main-pic";
          for (let p = 1; p <= 1; p++) {
            // this for statement it's for create three paragraph in the first div in the first section
            let para = document.createElement("p");
            para.textContent = "31%";
            para.id = "sold";
            para.classList.add("sold");
            div.appendChild(para);
          }
        } else {
          div.id = "child-pics";
          for (let d = 1; d <= 3; d++) {
            // this for statement it's for create three divs(inside each div an img) in the second div in the first section
            let div_child = document.createElement("div");
            div.appendChild(div_child);
            if (d === 1) {
              div_child.classList.add("active");
            }
          }
        }
      }
    } else {
      section.id = "product-info";
      for (let n = 1; n <= 7; n++) {
        let nav = document.createElement("nav");
        section.appendChild(nav);
        if (n === 1) {
          nav.id = "first_nav";
          for (let d = 1; d <= 8; d++) {
            if (d === 1) {
              let h1 = document.createElement("h1");
              h1.textContent =
                "Men Slip On Shoes Casual With Arch Support Insoles";
              nav.appendChild(h1);
            } else if (d === 2) {
              let rate_div = document.createElement("div");
              nav.appendChild(rate_div);
              rate_div.id = "rate-container";
              let div_stars = document.createElement("div");

              for (let s = 1; s <= 5; s++) {
                //  this for statement it's for creating 5 stars inside the div_stars
                let i_icon = document.createElement("i");
                i_icon.classList.add("fas");
                i_icon.classList.add("fa-star");
                i_icon.style.color = "gold";
                div_stars.appendChild(i_icon);
              }
              rate_div.appendChild(div_stars);
              let p1 = document.createElement("p");
              let p2 = document.createElement("p");
              rate_div.appendChild(p1);
              rate_div.appendChild(p2);
              p1.textContent = "2,251 reviews";
              p2.textContent = "Add Your Review";
            } else if (d === 3) {
              let stock_div = document.createElement("div");
              nav.appendChild(stock_div);
              stock_div.id = "stock-info";
              let p1 = document.createElement("p");
              let p2 = document.createElement("p");
              stock_div.appendChild(p1);
              stock_div.appendChild(p2);
              p1.textContent = "In Stock";
              p2.textContent = "SKU-801";
            } else if (d === 4) {
              let price_div = document.createElement("div");
              nav.appendChild(price_div);
              price_div.id = "price-info";
              let h2 = document.createElement("h2");
              let p = document.createElement("p");
              h2.textContent = "80.90$";
              p.textContent = "119.90$";
              price_div.appendChild(h2);
              price_div.appendChild(p);
            } else if (d === 5) {
              let h3 = document.createElement("h3");
              nav.appendChild(h3);
              h3.textContent = "Color";
            } else if (d === 6) {
              let color_div = document.createElement("div");
              color_div.id = "color-container";
              nav.appendChild(color_div);
              for (let buttons = 1; buttons <= 3; buttons++) {
                let button = document.createElement("button");
                if (buttons === 1) {
                  button.classList.add("active");
                }
                color_div.appendChild(button);
              }
            } else if (d === 7) {
              let h3 = document.createElement("h3");
              nav.appendChild(h3);
              h3.textContent = "Size";
            } else {
              let size_div = document.createElement("div");
              size_div.id = "size-container";
              nav.appendChild(size_div);
              for (let sizes = 1; sizes <= 4; sizes++) {
                let size = document.createElement("button");
                size_div.appendChild(size);
                if (sizes === 1) {
                  size.classList.add("active");
                }
                if (sizes === 1) {
                  size.textContent = "35";
                } else if (sizes === 2) {
                  size.textContent = "38";
                } else if (sizes === 3) {
                  size.textContent = "39";
                } else {
                  size.textContent = "40";
                }
              }
            }
          }
        } else if (n === 2) {
          // the create the second nav
          nav.id = "quantite";
          let div = document.createElement("div");
          nav.appendChild(div);
          let button = document.createElement("button");
          button.id = "try"
          button.textContent = "Add to cart";
          nav.appendChild(button);
          for (let p = 1; p <= 3; p++) {
            let i_icon = document.createElement("i");
            div.appendChild(i_icon);
            if (p === 1) {
              i_icon.id = "minus";
              i_icon.classList.add("fas");
              i_icon.classList.add("fa-minus");
            } else if (p === 2) {
              i_icon.textContent = 1;
            } else {
              i_icon.id = "plus";
              i_icon.classList.add("fas");
              i_icon.classList.add("fa-plus");
            }
          }
        } else if (n === 3) {
          nav.id = "wish-list";
          for (let d = 1; d <= 2; d++) {
            let div = document.createElement("div");
            let i_icon = document.createElement("i");
            let h3 = document.createElement("h3");
            nav.appendChild(div);
            div.appendChild(i_icon);
            div.appendChild(h3);
            if (d === 1) {
              i_icon.id = "like-icon";
              i_icon.classList.add("far");
              i_icon.classList.add("fa-heart");
              i_icon.id = "heart"
              h3.textContent = "WishList";
            } else {
              i_icon.classList.add("fas");
              i_icon.classList.add("fa-share");
              h3.textContent = "SHARE";
            }
          }
        } else if (n === 4 || n === 5) {
          let div = document.createElement("div");
          let para = document.createElement("p");
          let i_icon = document.createElement("i");
          let h1 = document.createElement("h1");
          i_icon.id = "show";
          i_icon.classList.add("fas");
          i_icon.classList.add("fa-plus");
          div.appendChild(i_icon);
          div.appendChild(h1);
          nav.appendChild(div);
          nav.appendChild(para);
          if (n === 4) {
            nav.id = "information";
            h1.textContent = "INFORMATION";
          } else {
            nav.id = "details";
            h1.textContent = "DETAILS";
          }
        } else if (n === 6) {
          let div = document.createElement("div");
          let i_icon = document.createElement("i");
          let h1 = document.createElement("h1");
          i_icon.classList.add("fas");
          i_icon.classList.add("fa-plus");
          nav.appendChild(div);
          div.appendChild(i_icon);
          div.appendChild(h1);
          h1.textContent = "CUSTOM";
          let table = document.createElement("table");
          nav.appendChild(table);
          for (let t = 1; t <= 6; t++) {
            // this for it's for creating table with one th and 5 tr > inside them 4 td (in each one)
            if (t === 1) {
              let th = document.createElement("th");
              table.appendChild(th);
              for (let d = 1; d <= 4; d++) {
                let td = document.createElement("td");
                th.appendChild(td);
                if (d === 1) {
                  td.textContent = "Size";
                } else if (d === 2) {
                  td.textContent = "Bust (cm)";
                } else if (d === 3) {
                  td.textContent = "Walst (cm)";
                } else {
                  td.textContent = "Hlp (cm)";
                }
              }
            } else {
              let tr = document.createElement("tr");
              table.appendChild(tr);
              for (let d = 1; d <= 4; d++) {
                let td = document.createElement("td");
                tr.appendChild(td);
                if (t === 2) {
                  if (d === 1) {
                    td.textContent = "XS";
                  } else if (d === 2) {
                    td.textContent = "82.5";
                  } else if (d === 3) {
                    td.textContent = "62";
                  } else {
                    td.textContent = "87.5";
                  }
                } else if (t === 3) {
                  if (d === 1) {
                    td.textContent = "S";
                  } else if (d === 2) {
                    td.textContent = "85";
                  } else if (d === 3) {
                    td.textContent = "63.5";
                  } else {
                    td.textContent = "89";
                  }
                } else if (t === 4) {
                  if (d === 1) {
                    td.textContent = "M";
                  } else if (d === 2) {
                    td.textContent = "87.5";
                  } else if (d === 3) {
                    td.textContent = "67.5";
                  } else {
                    td.textContent = "93";
                  }
                } else if (t === 5) {
                  if (d === 1) {
                    td.textContent = "L";
                  } else if (d === 2) {
                    td.textContent = "90";
                  } else if (d === 3) {
                    td.textContent = "72.5";
                  } else {
                    td.textContent = "95";
                  }
                } else {
                  if (d === 1) {
                    td.textContent = "XL";
                  } else if (d === 2) {
                    td.textContent = "93";
                  } else if (d === 3) {
                    td.textContent = "77.5";
                  } else {
                    td.textContent = "103";
                  }
                }
              }
            }
          }
        } else {
          nav.id = "reviews";
          let div = document.createElement("div");
          let i_icon = document.createElement("i");
          let h1 = document.createElement("h1");
          i_icon.classList.add("fas");
          i_icon.classList.add("fa-plus");
          i_icon.id = "show-reviews";
          h1.textContent = "REVIEWS";
          nav.appendChild(div);
          div.appendChild(i_icon);
          div.appendChild(h1);
          let section = document.createElement("section");
          section.id = "customers-reviews";
          nav.appendChild(section);
          for (let na = 1; na <= 4; na++) {
            let nav = document.createElement("nav");
            section.appendChild(nav);
            if (na === 1) {
              nav.id = "rates";
              let h1 = document.createElement("h1");
              let div = document.createElement("div");
              let h2 = document.createElement("h2");
              let p = document.createElement("p");
              let button = document.createElement("button");
              nav.appendChild(h1);
              nav.appendChild(div);
              div.appendChild(h2);
              div.appendChild(p);
              h1.textContent = "Customer Reviews";
              h2.textContent = "4.9";
              p.textContent = "Reviews";
              button.textContent = "Write reviews";
            } else if (na === 2 || na === 3) {
              for (let di = 1; di <= 2; di++) {
                let div = document.createElement("div");
                nav.appendChild(div);
                if (di === 1) {
                  let h3 = document.createElement("h3");
                  let p = document.createElement("p");
                  p.textContent = "On 7/7/22";
                  div.appendChild(h3);
                  div.appendChild(p);
                  if (na === 2) {
                    nav.id = "review1";
                    h3.textContent = "Review by sarah";
                  } else {
                    nav.id = "review2";
                    h3.textContent = "Review by hassan";
                  }
                } else {
                  for (let s = 1; s <= 5; s++) {
                    let i_icon = document.createElement("i");
                    i_icon.classList.add("fas");
                    i_icon.classList.add("fa-heart");
                    i_icon.style.color = "gold";
                    div.appendChild(i_icon);
                  }
                }
              }
              let h1 = document.createElement("h1");
              let p = document.createElement("p");
              p.textContent = "lorem";
              nav.appendChild(h1);
              nav.appendChild(p);
              if (na === 2) {
                h1.textContent = "WORKS LIKE CHARM";
              } else {
                h1.textContent = "AWESOME PRODUCT!";
                let div = document.createElement("div");
                let pa = document.createElement("p");
                let icon = document.createElement("i");
                div.appendChild(pa);
                div.appendChild(icon);
                nav.appendChild(div);
                p.textContent = "View all reviews";
                icon.classList.add("fas");
                icon.classList.add("fa-long-arrow-alt-right");
              }
            } else {
              nav.id = "write-review";
              let h1 = document.createElement("h1");
              h1.textContent = "Write a review";
              let div_rate = document.createElement("div");
              let p = document.createElement("p");
              let div_stars = document.createElement("div");
              nav.appendChild(h1);
              nav.appendChild(div_rate);
              div_rate.appendChild(p);
              div_rate.appendChild(div_stars);
              for (let s = 1; s <= 5; s++) {
                let i_icon = document.createElement("i");
                i_icon.classList.add("fas");
                i_icon.classList.add("fa-heart");
                i_icon.style.color = "gold";
                i_icon.id = "star";
                div_stars.appendChild(i_icon);
              }
              let form = document.createElement("form");
              nav.appendChild(form);
              for (let di = 1; di <= 3; di++) {
                let div = document.createElement("div");
                let h1 = document.createElement("h1");
                form.appendChild(div);
                div.appendChild(h1);
                if (di === 1 || di === 2) {
                  let input = document.createElement("input");
                  input.type = "text";
                  div.appendChild(input);
                  if (di === 1) {
                    h1.textContent = "NAME";
                  } else {
                    h1.textContent = "SUMMARY";
                  }
                } else {
                  let textarea = document.createElement("textarea");
                  div.appendChild(textarea);
                  h1.textContent = "REVIEW";
                }
              }
              let button = document.createElement("button");
              button.textContent = "Submit Review";
              nav.appendChild(button);
            }
          }
        }
      }
    }
  }
}
