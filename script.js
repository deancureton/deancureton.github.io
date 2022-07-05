
/*var carouselPage = 0;
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
var carouselTime = 8;
var timer;
function carouselTimer() {
	if (timer <= 0) {
		moveCarousel(1);
	} else {
		timer--;
	}
	setTimeout(carouselTimer, 1000);
}
function bgImageSize() {
	var ratio = window.innerWidth / window.innerHeight;
	if (ratio < 1000/650) {
		// Width is too small, height needs to shrink
		document.querySelectorAll("#carouselBG img").forEach(function(item) {
			item.style.height = window.innerHeight + "px";
			item.style.width = (window.innerHeight * 1000/650) + "px";
		});
	} else {
		// Height is too small, width needs to shrink
		document.querySelectorAll("#carouselBG img").forEach(function(item) {
			item.style.width = window.innerWidth + "px";
			item.style.height = (window.innerWidth * 650/1000) + "px";
		});
	}
}*/
function handleScroll() {
	/*for (var i = 0; i < document.getElementsByTagName("main")[0].children.length - 1; i++) {
		var rect = document.getElementsByTagName("main")[0].children[i].getBoundingClientRect();
		if (window.innerHeight / 2 > rect.top && window.innerHeight / 2 < rect.bottom) {
			document.getElementById("navList").children[i].children[0].classList.add("currentPage");
		} else {
			document.getElementById("navList").children[i].children[0].classList.remove("currentPage");
		}
	}*/
	for (var i = 0; i < document.getElementById("navList").children.length - 1; i++) {
		var rect = document.getElementById(document.getElementById("navList").children[i].getAttribute("href").slice(1)).getBoundingClientRect();
		if (100 > rect.top) {
			document.getElementById("navList").children[i].children[0].classList.add("currentPage");
			for (var j = 0; j < i; j++) {
				document.getElementById("navList").children[j].children[0].classList.remove("currentPage");
			}
		} else {
			document.getElementById("navList").children[i].children[0].classList.remove("currentPage");
		}
	}
	var rect = document.getElementsByTagName("footer")[0].getBoundingClientRect();
	if (window.scrollY + window.innerHeight + 50 > document.body.scrollHeight || (window.innerHeight / 2 > rect.top && window.innerHeight / 2 < rect.bottom)) {
		/*for (var i = 0; i < document.getElementsByTagName("main")[0].children.length - 1; i++) {
			document.getElementById("navList").children[i].children[0].classList.remove("currentPage");
		}*/
		for (var i = 0; i < document.getElementById("navList").children.length - 1; i++) {
			document.getElementById("navList").children[i].children[0].classList.remove("currentPage");
		}
		document.getElementById("navList").children[document.getElementById("navList").children.length - 1].children[0].classList.add("currentPage");
		//document.getElementById("arrow").classList.add("fa-arrow-up");
		//document.getElementById("arrow").classList.remove("fa-arrow-down");
	} else {
		document.getElementById("navList").children[document.getElementById("navList").children.length - 1].children[0].classList.remove("currentPage");
		//document.getElementById("arrow").classList.add("fa-arrow-down");
		//document.getElementById("arrow").classList.remove("fa-arrow-up");
	}
}
window.addEventListener("DOMContentLoaded", function () {
	handleScroll();
	document.addEventListener("scroll", handleScroll);
	/*document.addEventListener("keydown", function (e) {
		e = e || window.event;
		if (e.key == "ArrowLeft") {
			moveCarousel(-1);
		}
		if (e.key == "ArrowRight") {
			moveCarousel(1);
		}
	});
	timer = carouselTime;
	carouselTimer();
	carouselChange();*/
	for (var i = 0; i < document.getElementById("navList").children.length; i++) {
		document.getElementById("navList").children[i].addEventListener("click", function () {
			if (window.innerWidth <= 700) {
				document.getElementById("hamburgerCheck").checked = false;
				hamburgerMenu(false);
			}
		});
	}
	window.addEventListener("resize", function () {
		if (window.innerWidth > 700) {
			document.getElementsByTagName("header")[0].style.transform = "translateX(0)";
			document.getElementById("background").style.zIndex = "-1000";
		} else {
			document.getElementById("hamburgerCheck").checked = false;
			hamburgerMenu(false);
		}
		handleScroll();
		//bgImageSize();
	});
	window.addEventListener("click", function (event) {
		if (window.innerWidth <= 700 && event.clientX > 300) {
			document.getElementById("hamburgerCheck").checked = false;
			hamburgerMenu(false);
		}
	});
	//bgImageSize();
});
/*var timer = 0;
function moveCarousel(dir) {
	timer = carouselTime;
	carouselPage += dir + document.getElementById("carouselC").children.length;
	carouselPage %= document.getElementById("carouselC").children.length;
	carouselChange();
}
function jumpCarousel(pos) {
	timer = carouselTime;
	carouselPage = pos - 1;
	carouselPage += dir + document.getElementById("carouselC").children.length;
	carouselPage %= document.getElementById("carouselC").children.length;
	carouselChange();
}*/
function hamburgerMenu(checked) {
	if (checked) {
		document.getElementsByTagName("header")[0].style.transform = "translateX(0)";

		document.getElementById("patty2").style.opacity = 0;

		document.getElementById("patty1").style.transform = "rotate(45deg)";
		document.getElementById("patty3").style.transform = "rotate(-45deg)";

		document.getElementById("background").style.background = "rgba(0, 0, 0, 0.7)";
		document.getElementById("background").style.zIndex = "900";

	} else {
		document.getElementsByTagName("header")[0].style.transform = "translateX(-310px)";

		document.getElementById("patty2").style.opacity = 1;

		document.getElementById("patty1").style.transform = "rotate(0deg)";
		document.getElementById("patty3").style.transform = "rotate(0deg)";

		document.getElementById("background").style.background = "rgba(0, 0, 0, 0)";


		setTimeout(function () {
			document.getElementById("background").style.zIndex = "-1000";
		}, 500);
	}
}
function sendEmail() {
	window.open("mailto:deancureton73@gmail.com?subject=" + encodeURIComponent(document.getElementById("emailSubject").value) + "&body=" + encodeURIComponent(document.getElementById("emailMessage").value), "_blank");
}
function arrowButtonClick() {
	var rect = document.getElementsByTagName("footer")[0].getBoundingClientRect();
	if (window.scrollY + window.innerHeight + 50 > document.body.scrollHeight || (window.innerHeight / 2 > rect.top && window.innerHeight / 2 < rect.bottom)) {
		window.location.href = "#about";
	} else {
		for (var i = 0; i < document.getElementsByTagName("main")[0].children.length - 1; i++) {
			var rect = document.getElementsByTagName("main")[0].children[i].getBoundingClientRect();
			if (window.innerHeight / 2 > rect.top && window.innerHeight / 2 < rect.bottom) {
				if (i != document.getElementsByTagName("main")[0].children.length - 2) {
					window.location.href = "#" + document.getElementsByTagName("main")[0].children[i + 1].id;
				} else {
					window.location.href = "#contact";
				}
				break;
			}
		}
	}
}