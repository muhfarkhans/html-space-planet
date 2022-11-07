// Get the button
let scrollToTopButton = document.getElementById("scroll-to-top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  showScrollToTopButton();
};

function showScrollToTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  window.scroll({ top: 0, behavior: "smooth" });
}
