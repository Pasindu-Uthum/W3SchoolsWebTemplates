function myFunction() {

	var grid = document.getElementById("image-grid");
	if (grid.className === "image-grid") {
		grid.className = "image-grid-padding";
	}

	else {
		grid.className = grid.className.replace("image-grid-padding", "image-grid");
	}

	var column1 = document.getElementById("column1");
	if (column1.className === "column1") {
		column1.className = "image-padding1";
	}
	
	else {
		column1.className = column1.className.replace("image-padding1", "column1");
	}

	var column2 = document.getElementById("column2");
	if (column2.className === "column2") {
		column2.className = "image-padding2";
	}
	
	else {
		column2.className = column2.className.replace("image-padding2", "column2");
	}

	var column3 = document.getElementById("column3");
		if (column3.className === "column3") {
		column3.className = "image-padding3";
	}
	
	else {
		column3.className = column3.className.replace("image-padding3", "column3");
	}
}
var menu = document.getElementById("menu");
var close = document.getElementById("close");
var bars = document.getElementById("bars");

close.onclick = function() {
	menu.style.display = "none";
}

bars.onclick = function() {
	menu.style.display = "block";
}

function hide() {
	menu.style.display = "none";
}