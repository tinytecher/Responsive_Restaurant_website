const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav_links');
	const navLinks = document.querySelectorAll('.nav_links li');

	burger.addEventListener('click', () => {
	//toggle nav
		nav.classList.toggle('nav-active');

	//Animate Links
	navLinks.forEach((link, index)=>{
		if(link.style.animation){
			link.style.animation = '';
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
		}
	});
		//Burger animation
		burger.classList.toggle('toggle');
	});
	
}

navSlide();

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}