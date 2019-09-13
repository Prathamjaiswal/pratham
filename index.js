//Get the button:
mybutton = document.getElementById("myBtn");
var check = false;
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  //check=true;
}
function topFunction2() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  check=true;
}
function animatemenu(x) {
    if(!check){
    x.classList.toggle("change");
    }else{
      check=false;
    }
}