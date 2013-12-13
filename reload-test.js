
function setUpOverridesToBrowserBehaviour () {
	function disableF5(event) {
		if ((event.which || event.keyCode) === 116 || (event.which || event.keyCode) === 82) {
			event.preventDefault();
			showConfirm();
		}
	};
	
	function disableUnload(event) {
		var message = "call disableUnload";
		event.returnValue = message;
	};
	
	function disableBeforeUnload(event) {
		var message = "call disableBeforeUnload";
//		event.returnValue = message; //This seems to be the standard way of setting a message, Webkit browsers ignore it though.

		event.preventDefault(); //This shows a browser confirm dialog. Except for Webkit browsers which do nothing!
		
		return message; //You must return a message for Webkit browsers or they do nothing.
	}

	if(document.body.addEventListener) {
		document.body.addEventListener("keydown", disableF5);
//		window.addEventListener("unload", disableUnload);
		window.addEventListener("beforeunload", disableBeforeUnload);
	} else {
		document.body.attachEvent("onkeydown", disableF5);
//		window.attachEvent("onunload", disableUnload);
		window.attachEvent("onbeforeunload", disableBeforeUnload);
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