users = document.getElementsByClassName('user');
len = users.length;
firstUser = users[0];
lastUser = users[len-1];
reviews = document.getElementById('reviews');
leftArrow = document.getElementById('left-arrow');
rightArrow = document.getElementById('right-arrow');
reviews.addEventListener("scroll", function() {
    reviewRight = reviews.getBoundingClientRect().right
    reviewLeft = reviews.getBoundingClientRect().left
    userRight = lastUser.getBoundingClientRect().right
    userLeft = firstUser.getBoundingClientRect().left
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
})