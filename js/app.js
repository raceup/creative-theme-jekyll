$("#modal_trigger").leanModal({
		top: 100,
		overlay: 0.6,
		closeButton: ".modal_close"
});

function validate() {
	var GOOD_CODE = "RUP17";
	passw = document.getElementById("validationCode").value;
	
	if (GOOD_CODE == passw) {
		$(".header_title").text("Success!");
	} else {
		$(".header_title").text("Wrong purchase code");
	}
}
