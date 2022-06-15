// TODO Nav menu when mobile
// TODO Auto slideshow when inactive
// TODO Make intro page more exciting
// TODO Arrow buttons
// TODO Tap icon on carousel
// TODO Variable font size
var carouselPage = 0;
function carouselChange() {
	for (var i = 0; i < document.getElementById("carouselC").children.length; i++) {
		if (i === carouselPage) {
			console.log(i);
			document.getElementById("carouselC").children[i].classList.add("carouselVisible");
			document.getElementById("carouselC").children[i].classList.remove("carouselHidden");
			document.getElementById("trackers").children[i].classList.add("activeTracker");
			document.getElementById("carouselBG").children[i].style.opacity = 1;
		} else {
			document.getElementById("carouselC").children[i].classList.add("carouselHidden");
			document.getElementById("carouselC").children[i].classList.remove("carouselVisible");
			document.getElementById("trackers").children[i].classList.remove("activeTracker");
			document.getElementById("carouselBG").children[i].style.opacity = 0;
		}
	}
}
function windowBlur() {
	for (var i = 0; i < document.getElementsByTagName("main")[0].children.length; i++) {
		var rect = document.getElementsByTagName("main")[0].children[i].getBoundingClientRect();
		if ((rect.top + rect.bottom)/2 > 52 && (rect.top + rect.bottom)/2 < window.innerHeight) {
			document.getElementsByTagName("main")[0].children[i].classList.add("unblurred");
			document.getElementsByTagName("main")[0].children[i].classList.remove("blurred");
		} else {
			document.getElementsByTagName("main")[0].children[i].classList.add("blurred");
			document.getElementsByTagName("main")[0].children[i].classList.remove("unblurred");
		}
	}
}
window.onload = function() {
	windowBlur();
	document.addEventListener("scroll", windowBlur);
	setTimeout(function() {
	for (var i = 0; i < document.getElementsByClassName("carouselHidden").length; i++) {
		document.getElementsByClassName("carouselHidden")[i].style.animationDuration = "0.5s";
	}
	document.getElementsByClassName("carouselVisible")[0].style.animationDuration = "0.5s";
	}, 500);
}
function moveCarousel(dir) {
	carouselPage += dir + document.getElementById("carouselC").children.length;
	carouselPage %= document.getElementById("carouselC").children.length;
	carouselChange();
}
function jumpCarousel(pos) {
	carouselPage = pos - 1;
	carouselPage += dir + document.getElementById("carouselC").children.length;
	carouselPage %= document.getElementById("carouselC").children.length;
	carouselChange();
}