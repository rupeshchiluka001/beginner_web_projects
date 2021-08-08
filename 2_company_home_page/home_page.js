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
    if (Math.abs(reviewRight-userRight) <= 50) {
        rightArrow.style.visibility = "hidden";
    }
    else if (Math.abs(userLeft-reviewLeft) <= 50) {
        leftArrow.style.visibility = "hidden";
    }
    else {
        leftArrow.style.visibility = "visible";
        rightArrow.style.visibility = "visible";
    }
})