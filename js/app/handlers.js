function goToDownloadPage() {
	window.setTimeout(function(){
        // Move to a new location or you can do something else
        window.location.href = "https://raceup.github.io";
    }, 3000);
}


function goodCode() {
	document.getElementById("popupHeader").style.backgroundColor = "#5cb85c";
	document.getElementById("popupFooter").style.backgroundColor = "#5cb85c";
	document.getElementById("popupTitle").innerText = "Success! You'll be redirected to the download page ...";
	$(".modal-content").effect("shake");
	goToDownloadPage();
}

function badCode() {
	document.getElementById("popupHeader").style.backgroundColor = "#FF0000";
	document.getElementById("popupFooter").style.backgroundColor = "#FF0000";
	document.getElementById("popupTitle").innerText = "Wrong purchase code!";
	$("#myModal").effect("shake");
}

function validate() {
	var GOOD_CODE = "RUP17";
	purchaseCodeInput = document.getElementById("purchCodeIn").value;
	
	if (GOOD_CODE == purchaseCodeInput) {
		goodCode();
	} else {
		badCode();
	}
}

window.onload = function(){
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
}
