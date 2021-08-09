let users = document.getElementsByClassName('user');
let len = users.length;

let firstUser = users[0];
let lastUser = users[len-1];

let userWidth = firstUser.offsetWidth;

let reviews = document.getElementById('reviews');


let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');

reviews.addEventListener("scroll", function() {
    let reviewRight = reviews.getBoundingClientRect().right
    let reviewLeft = reviews.getBoundingClientRect().left
    let userRight = lastUser.getBoundingClientRect().right
    let userLeft = firstUser.getBoundingClientRect().left
    if (reviewRight >= userRight) {
        rightArrow.style.visibility = "hidden";
    }
    else if (userLeft >= reviewLeft) {
        leftArrow.style.visibility = "hidden";
    }
    else {
        leftArrow.style.visibility = "visible";
        rightArrow.style.visibility = "visible";
    }
});

let userReviews = document.getElementsByClassName('user-review');
for (let i = 0; i < len; i++) {
    userReviews[i].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "+
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
}

leftArrow.addEventListener("click", function() {
    reviews.scrollLeft -= userWidth;
});

rightArrow.addEventListener("click", function() {
    reviews.scrollLeft += userWidth;
});

let mobileHide = document.getElementById('mobile-hide');
let menuIcon = document.getElementById('menu-icon');
let closeButton = document.getElementById('close');

closeButton.addEventListener("click", function() {
    mobileHide.style.visibility = "hidden";
});

menuIcon.addEventListener("click", function() {
    mobileHide.style.visibility = "visible";
});