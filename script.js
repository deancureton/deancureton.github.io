// TODO Nav menu when mobile
// TODO Auto slideshow when inactive
// TODO Make intro page more exciting
// TODO Arrow buttons
// TODO Tap icon on carousel
// TODO Add extra content for doubles (right align expertise?)
// TODO Fix clip path
var carouselPage = 0;
function carouselChange() {
	for (var i = 0; i < document.getElementById("carouselC").children.length; i++) {
		if (i === carouselPage) {
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
function handleScroll() {
	for (var i = 0; i < document.getElementsByTagName("main")[0].children.length; i++) {
		var rect = document.getElementsByTagName("main")[0].children[i].getBoundingClientRect();
		if (window.innerHeight/2 > rect.top && window.innerHeight/2 < rect.bottom) {
			document.getElementById("navList").children[i].children[0].classList.add("currentPage");
		} else {
			document.getElementById("navList").children[i].children[0].classList.remove("currentPage");
		}
	}
	var rect = document.getElementsByTagName("footer")[0].getBoundingClientRect();
	if (window.scrollY + window.innerHeight + 50 > document.body.scrollHeight || (window.innerHeight/2 > rect.top && window.innerHeight/2 < rect.bottom)) {
		for (var i = 0; i < document.getElementsByTagName("main")[0].children.length; i++) {
			document.getElementById("navList").children[i].children[0].classList.remove("currentPage");
		}
		document.getElementById("navList").children[document.getElementById("navList").children.length - 1].children[0].classList.add("currentPage");
	} else {
		document.getElementById("navList").children[document.getElementById("navList").children.length - 1].children[0].classList.remove("currentPage");
	}
}
window.addEventListener("DOMContentLoaded", function() {
	handleScroll();
	document.addEventListener("scroll", handleScroll);
});
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