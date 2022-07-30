let menue_bar = document.querySelector(".hamburger");
let bar = document.getElementsByClassName("bar");
let isPushed = false;

menue_bar.addEventListener("click", hamburgerTransition);


function hamburgerTransition(e) {

    if (!isPushed) {
        // menue_bar.style.backgroundColor = "black";
        menue_bar.style.animationName = "move_hamburger_left";
        menue_bar.style.position = "fixed";
        menue_bar.style.right = "50px";

        bar[0].style.animationName = "open0";
        bar[1].style.animationName = "open1";
        bar[2].style.animationName = "open2";
        document.querySelector(".nav_container").style.display = "flex";
        document.querySelector(".nav_container").style.animationName = "pop-out";

        console.log("what's up");
        // menue_bar.addEventListener("click", myFunc2);
        isPushed = true;

    } else {
        // e.target.style.backgroundColor = "black";
        menue_bar.style.position = "relative";
        menue_bar.style.right = "0";

        e.target.style.animationName = "move_hamburger_back";
        bar[0].style.animationName = "closed0";
        bar[1].style.animationName = "closed1";
        bar[2].style.animationName = "closed2";
        // document.querySelector(".nav_container").style.display = "none";
        document.querySelector(".nav_container").style.animationName = "pop-in";
        console.log("hello");


        isPushed = false;
    }
}
// back to top scroll animation
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.querySelector(".btt-button").style.animationName = "btt-pop-up";
        // document.querySelector(".btt-button").style.display = "block";

    } else {
        document.querySelector(".btt-button").style.animationName = "btt-pop-in";
        // document.querySelector(".btt-button").style.display = "none";

    }
}
// image link text animation
// for image link caption 1
document.querySelector(`.image-link-cont-1 a img`).addEventListener("mouseover", function() {

    document.querySelectorAll(".image-link-text-container")[0].style.animationName = "link-image-text-slide-up";

}, true);
document.querySelector(".image-link-cont-1 a img").addEventListener("mouseout", function() {
    document.querySelector(".image-link-cont-1 .image-link-text-container").style.animationName = "link-image-text-slide-down";
});
// for image link caption 2
document.querySelector(`.image-link-cont-2 a img `).addEventListener("mouseover", function() {

    document.querySelectorAll(".image-link-text-container")[1].style.animationName = "link-image-text-slide-up";

});
document.querySelector(".image-link-cont-2 a img").addEventListener("mouseout", function() {
    document.querySelector(".image-link-cont-2 .image-link-text-container").style.animationName = "link-image-text-slide-down";
});
// final text in footer
document.querySelector(".final-text span").innerHTML = ` ${new Date().getFullYear()} `;

// men collection page 
document.querySelector(".men-image-link-cont-1").addEventListener("mousein", function() {
    document.querySelector(".image-link-button").style.animationName = "button-slide-up";
})