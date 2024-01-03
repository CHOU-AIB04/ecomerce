function headerpart() {
  let header = document.createElement("header");
  document.body.appendChild(header);
  for (let i = 1; i <= 2; i++) {
    let container = document.createElement("div");
    header.appendChild(container);
    if (i === 1) {
      container.classList.add("up-nav");
      for (let u = 1; u <= 2; u++) {
        let ul = document.createElement("ul");
        container.appendChild(ul);
        if (u === 1) {
          for (let l = 1; l <= 3; l++) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            ul.appendChild(li);
            li.appendChild(a);
            a.href = "#";
            if (l === 1) {
              a.textContent = "Blog";
            } else if (l === 2) {
              a.textContent = "Featured product";
            } else {
              a.textContent = "Whishist";
            }
          }
        } else {
          for (let l = 1; l <= 5; l++) {
            if (l === 1 || l === 2 || l === 3) {
              let li = document.createElement("li");
              let a = document.createElement("a");
              ul.appendChild(li);
              li.appendChild(a);
              a.href = "#";
              if (l === 1) {
                a.textContent = "Sign up";
              } else if (l === 2) {
                a.textContent = "My account";
              } else {
                a.textContent = "Order tracking";
              }
            } else {
              let select = document.createElement("select");
              ul.appendChild(select);
              if (l === 5) {
                select.name = "moniteur";
              } else {
                select.name = "language";
              }
              for (let op = 1; op <= 3; op++) {
                let option = document.createElement("option");
                select.appendChild(option);
                if (l === 4) {
                  if (op === 1) {
                    option.textContent = "USD";
                    option.value = "USD";
                  } else if (op === 2) {
                    option.textContent = "MAD";
                    option.value = "MAD";
                  } else {
                    option.textContent = "EUR";
                    option.value = "EUR";
                  }
                } else {
                  if (op === 1) {
                    option.textContent = "English";
                    option.value = "English";
                  } else if (op === 2) {
                    option.textContent = "Arab";
                    option.value = "Arab";
                  } else {
                    option.textContent = "Français";
                    option.value = "Français";
                  }
                }
              }
            }
          }
        }
      }
    } else {
      container.classList.add("down-nav");
      for (let f = 1; f <= 2; f++) {
        if (f === 1) {
          let nav = document.createElement("nav");
          let h1 = document.createElement("h1");
          h1.textContent = ".Store";
          container.appendChild(nav);
          nav.appendChild(h1);
          let ul = document.createElement("ul");
          nav.appendChild(ul);
          for (let t = 1; t <= 5; t++) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            ul.appendChild(li);
            li.appendChild(a);
            a.href = "#";
            if (t === 1) {
              a.textContent = "Home";
            } else if (t === 2) {
              a.textContent = "Shope";
            } else if (t === 3) {
              a.textContent = "Women";
              a.id = "women-click";
            } else if (t === 4) {
              a.textContent = "Sports";
              li.classList.add("sport");
            }
          }
        } else {
          let user = document.createElement("div");
          user.id = "user";
          container.appendChild(user);
          for (let i = 1; i <= 3; i++) {
            let div = document.createElement("div");
            user.appendChild(div);
            let p = document.createElement("p");
            div.appendChild(p);
            if (i === 1 || i === 2) {
              p.id = "like";
              let i_icon = document.createElement("i");
              div.appendChild(i_icon);
              if (i === 1) {
                p.classList.add("like-heart");
                i_icon.classList.add("far");
                i_icon.classList.add("fa-heart");
                p.textContent = 0;
              } else if (i === 2) {
                i_icon.classList.add("fas");
                i_icon.classList.add("fa-shopping-cart");
                p.textContent = "0";
              }
            } else {
              let p2 = document.createElement("p");
              div.appendChild(p2);
              p2.textContent = "Total";
              p.textContent = "$0.00";
            }
          }
        }
      }
    }
  }
}
