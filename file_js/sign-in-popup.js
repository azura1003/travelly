var popup = document.querySelector(".pop-up2");
var showSigninButton = document.querySelector("#show-signin");
var closeButton = document.querySelector(".close-btn2");

showSigninButton.addEventListener("click", function(){
  popup.classList.toggle("active");
});

closeButton.addEventListener("click", function(){
  popup.classList.toggle("active");
});
