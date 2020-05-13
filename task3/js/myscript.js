var slideIndex = 0,auto, i;
var photo = document.getElementsByClassName("client_photo");
var testi = document.getElementsByClassName("testi_text");
var clients = document.getElementsByClassName("client_name");
var dots = document.getElementsByClassName("dot");
$('#clients').ready(function() {
	autoslider();
});

function autoslider() {
	var i;
	for (i = 0; i < photo.length; i++) {
		photo[i].style.display = "none";
		testi[i].style.marginLeft = "-1000em";
		clients[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > photo.length) {
		slideIndex = 1
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	photo[slideIndex - 1].style.display = "block";
	testi[slideIndex - 1].style.marginLeft = "0px";
	clients[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	auto = setTimeout(autoslider, 4000); // Change image every 2 seconds
}

function currentSlide(n) {
	clearTimeout(auto);
	showSlides(slideIndex = n);
}

function showSlides(n) {
	if (n > photo.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = photo.length
	}
	for (i = 0; i < photo.length; i++) {
		photo[i].style.display = "none";
		testi[i].style.marginLeft = "-1000em";
		clients[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	photo[slideIndex - 1].style.display = "block";
	testi[slideIndex - 1].style.marginLeft = "0px";
	clients[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	auto = setTimeout(autoslider, 4000);
}
$(window).scroll(function() {
	var height = $(window).scrollTop();

	if (height >= 50) {
		$('#navbar').addClass('fixed');
	} else {
		$('#navbar').removeClass('fixed');
	}

});