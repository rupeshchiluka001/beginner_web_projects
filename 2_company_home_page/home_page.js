searchBox = document.getElementById("search-box")
search = document.getElementById("search");
searchIcon = document.getElementById("search-icon");

searchBox.addEventListener("focus", function() {
    search.style.color = "#0062ff";
    searchIcon.style.borderBottom = "2px solid #0062ff"
})

searchBox.addEventListener("focusout", function() {
    search.style.color = "#000000";
    searchIcon.style.borderBottom = "0"
})