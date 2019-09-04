//creates nav element for links to other pages
function MenuAndHeader() {
	var body=document.getElementById("body");
	var main=document.getElementById("main");
	
	//create element that stores navigation bar
	var nav=document.createElement("nav");

	//create div for business name
	nav.innerHTML+="<div class='logo'><h4>GKRecoveryPro</h4></div>";

	//create list that has links
	var ul=document.createElement("ul");
	ul.setAttribute('class','navLinks');
	ul.innerHTML+="<li><a href='index.html'>Home</a></li>";
	ul.innerHTML+="<li><a href='about.html'>About</a></li>";
	ul.innerHTML+="<li><a href='services.html'>Services</a></li>";
	ul.innerHTML+="<li><a href='products.html'>Products</a></li>";
	ul.innerHTML+="<li><a href='contact.html'>Contact</a></li>";
	ul.innerHTML+="<li><a href='news.html'>News</a></li>";
	nav.append(ul);

	//create burger
	var burger=document.createElement("div");
	burger.setAttribute('class','burger');
	burger.innerHTML+="<div class='line1'></div>";
	burger.innerHTML+="<div class='line2'></div>";
	burger.innerHTML+="<div class='line3'></div>";
	nav.append(burger);

	//add nav to body
	body.prepend(nav,main);
	navSlide();
}

//navigaton bar functionality
const navSlide = () => {
	const burger=document.querySelector('.burger');
	const nav=document.querySelector('.navLinks');
	const navLinks=document.querySelectorAll('.navLinks li');
	
	burger.addEventListener('click',() => {
		//toggle nav
		nav.classList.toggle('nav-active');

		//animate links
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation='';
			}
			else{
				link.style.animation='navLinksFade 1s ease forwards';
			}
			console.log(index/7);
		})

		//burger animation
		burger.classList.toggle('toggle');
	});
}

//initial slide
var slideIndex=1;
showSlides(slideIndex);

//prev/next functionality
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//dots working
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//change slide
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";//slideIndex is undefined  
  dots[slideIndex-1].className += " active";
}
