var displayMenuNum = 1;

function displayMenu() {
	var menu = document.getElementById("menu-buttons");
	console.log(menu.style.display)
	if (displayMenuNum = 1) {menu.style.display = "none"; displayMenuNum--;}
	else if (displayMenuNum = 0) {menu.style.display = "flex"; displayMenuNum++;}
}

function xMenu(){
}