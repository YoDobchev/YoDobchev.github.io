/*function changeSlide() {
        window.location.href = "http://";
}*/
window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})
function hoverOverBookmark(id) {
    document.getElementById(id).src = "../media/bookmark-active.png"
}
function unHoverOverBookmark(id) {
    document.getElementById(id).src = "../media/bookmark.png"
}
function changeSlide(slideNum) {
    window.location.href = `./slide${slideNum}.html`
}