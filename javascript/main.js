let menue_bar = document.querySelector(".hamburger");
let bar = document.getElementsByClassName("bar");
let isPushed = false;

menue_bar.addEventListener("click", hamburgerTransition);

function hamburgerTransition(e) {
  if (!isPushed) {
    menue_bar.style.animationName = "move_hamburger_left";
    menue_bar.style.position = "fixed";
    menue_bar.style.right = "50px";

    bar[0].style.animationName = "open0";
    bar[1].style.animationName = "open1";
    bar[2].style.animationName = "open2";
    document.querySelector(".nav_container").style.display = "flex";
    document.querySelector(".nav_container").style.animationName = "pop-out";

    document.querySelector(".color-back").style.display = "block";

    isPushed = true;
  } else {
    menue_bar.style.position = "relative";
    menue_bar.style.right = "0";

    e.target.style.animationName = "move_hamburger_back";
    bar[0].style.animationName = "closed0";
    bar[1].style.animationName = "closed1";
    bar[2].style.animationName = "closed2";

    document.querySelector(".nav_container").style.animationName = "pop-in";
    document.querySelector(".color-back").style.display = "none";

    isPushed = false;
  }
}
// trasnparent background for nav menue in small screens
document.querySelector(".color-back").addEventListener(
  "click",
  function (e) {
    menue_bar.style.animationName = "move_hamburger_back";
    bar[0].style.animationName = "closed0";
    bar[1].style.animationName = "closed1";
    bar[2].style.animationName = "closed2";
    document.querySelector(".nav_container").style.animationName = "pop-in";
    e.target.style.display = "none";
  },
  true
);
// back to top scroll animation
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.querySelector(".btt-button").style.animationName = "btt-pop-up";
  } else {
    document.querySelector(".btt-button").style.animationName = "btt-pop-in";
  }
}

// final text in footer
document.querySelector(
  ".final-text span"
).innerHTML = ` ${new Date().getFullYear()} `;
