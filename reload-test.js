
function setUpOverridesToBrowserBehaviour () {
	function disableF5(event) {
		if ((event.which || event.keyCode) === 116 || (event.which || event.keyCode) === 82) {
			event.preventDefault();
			showConfirm();
		}
	};

	if(document.body.addEventListener) {
		document.body.addEventListener("keydown", disableF5);
	} else {
		document.body.attachEvent("keydown", disableF5);
	}
}

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