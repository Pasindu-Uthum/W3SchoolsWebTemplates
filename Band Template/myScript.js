var myIndex = 0;
slideShow();

function slideShow() {
	var i;
	var x = document.getElementsByClassName("slides");
	for (i=0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1;
	}
	x[myIndex-1].style.display = "block";
	setTimeout(slideShow, 4000);
}

var ticket1 = document.getElementById('buy1');
var ticket2 = document.getElementById('buy2');
var ticket3 = document.getElementById('buy3');
var close = document.getElementById('close');
var cancel = document.getElementById('cancel');
var pay = document.getElementById('pay');
var modal = document.getElementById('modal');

ticket1.onclick = function() {
	modal.style.display = "block";
}
ticket2.onclick = function() {
	modal.style.display = "block";
}
ticket3.onclick = function() {
	modal.style.display = "block";
}

close.onclick = function() {
	modal.style.display = "none";
}

cancel.onclick = function() {
	modal.style.display = "none";
}

pay.onclick = function() {
	modal.style.display = "none";
	var value = document.getElementById("mail").value;
	window.alert("The Payment Information has sent to: " + value);
}

function myFunction() {
	window.alert("Dude, it's not working. Just for the display.")
}

var menu = document.getElementById("menu");
var bar = document.getElementById("menu-item");

function showMenu() {
	menu.style.display = "block";
}

function hideMenu() {
	menu.style.display = "none";
}