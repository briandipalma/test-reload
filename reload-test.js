
function showConfirm () {
	var confirmHolder = document.getElementById("confirm_holder");
	confirmHolder.style.display = "inherit";
}

function logout () {
	document.location.reload();
}

function hideConfirm () {
	var confirmHolder = document.getElementById("confirm_holder");
	confirmHolder.style.display = "";
}