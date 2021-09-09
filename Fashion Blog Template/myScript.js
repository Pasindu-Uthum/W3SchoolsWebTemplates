var reply_button1 = document.getElementById("reply-btn-1");
var reply_button2 = document.getElementById("reply-btn-2");

var reply_post1 = document.getElementById("reply-post-1");
var reply_post2 = document.getElementById("reply-post-2");

reply_button1.onclick = function() {
	reply_post1.style.display = "block";
}

reply_button2.onclick = function() {
	reply_post2.style.display = "block";
}

function hideReply1() {
	reply_post1.style.display = "none";
}

function hideReply2() {
	reply_post2.style.display = "none";
}

function likePost1() {
	document.getElementById("like1").innerHTML = '<i class="fas fa-check"></i> Liked';
	document.getElementById("like1").style.backgroundColor = "#333333";
	document.getElementById("like1").style.color = "white";
}

function likePost2() {
	document.getElementById("like2").innerHTML = '<i class="fas fa-check"></i> Liked';
	document.getElementById("like2").style.backgroundColor = "#333333";
	document.getElementById("like2").style.color = "white";
}

function likePost3() {
	document.getElementById("like3").innerHTML = '<i class="fas fa-check"></i> Liked';
	document.getElementById("like3").style.backgroundColor = "#333333";
	document.getElementById("like3").style.color = "white";
}

var subscribe = document.getElementById("subscribe-pop-up");
var first_sub = document.getElementById("top-subscribe-btn");

first_sub.onclick = function() {
	subscribe.style.display = "flex";
}

function welcomeFunction() {
	var input = document.getElementById("name");
	if (input.value === "") {
		window.alert("Please enter your name for the subscription or click the close button");
	}
	else {
		window.alert("Hello " + input.value + ". Welcome to the Blog");
		subscribe.style.display = "none";
	}
	
}

var close = document.getElementById("close");


close.onclick = function() {
	subscribe.style.display = "none";
}

var bottom_sub = document.getElementById("bottom-subscribe-btn");
var bottom_input = document.getElementById("bottom-input");

bottom_sub.onclick = function() {
	if (bottom_input.value === "") {
		subscribe.style.display = "block";
	}
	else {
		window.alert("Hello " + bottom_input.value + ". Welcome to the Blog");
	}
}
