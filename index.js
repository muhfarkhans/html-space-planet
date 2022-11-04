// Get the button
let buttonToTop = document.getElementById("buttonToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  //   console.log(" ");
  //   console.log("total height: " + document.documentElement.scrollHeight);
  //   console.log("scroll top 2: " + document.documentElement.scrollTop);
  //   console.log(" ");
  let bot = document.documentElement.scrollHeight - 1200;
  if (document.documentElement.scrollTop > bot) {
    buttonToTop.style.display = "block";
  } else {
    buttonToTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scroll({ top: 0, behavior: "smooth" });
}
