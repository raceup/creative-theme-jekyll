window.addEventListener("load", function () {
    var pk = new Piklor(".color-picker", [
            "#1abc9c"
          , "#2ecc71"
          , "#3498db"
          , "#9b59b6"
          , "#34495e"
          , "#16a085"
          , "#27ae60"
          , "#2980b9"
          , "#8e44ad"
          , "#2c3e50"
          , "#f1c40f"
          , "#e67e22"
          , "#e74c3c"
          , "#ecf0f1"
          , "#95a5a6"
          , "#f39c12"
          , "#d35400"
          , "#c0392b"
          , "#bdc3c7"
          , "#7f8c8d"
        ], {
            open: ".picker-wrapper .btn"
        })
      ;

    pk.colorChosen(function (col) {
        console.log(col);
    });
});

function setImageWithColors(frameColor, aeroColor, stickersColor) {
	imageUrl = getPathImageWithColors(frameColor, aeroColor, stickersColor);

	$.ajax({
	    url: imageUrl,
	    error: function()
	    {
	        alert("Ooops! Color not found!");
	    },
	    success: function()
	    {
	        document.getElementById("image-canvas").src = imageUrl;
	    }
	});
}

function getPathImageWithColors(frameColor, aeroColor, stickersColor) {
	fileName = frameColor.charAt(0) + aeroColor.charAt(0) + stickersColor.charAt(0);
	fileName += ".png";
	basePathImages = "img/choices/";
	
	return basePathImages + fileName  // TODO: handle errors
}
