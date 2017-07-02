/**
 * TODO: handle errors
*/
function setImageWithColors(frameColor, aeroColor, stickersColor) {
	imageUrl = getPathImageWithColors(frameColor, aeroColor, stickersColor);
	document.getElementById("image-canvas").src = imageUrl;
}

function getPathImageWithColors(frameColor, aeroColor, stickersColor) {
	fileName = frameColor.charAt(0) + aeroColor.charAt(0) + stickersColor.charAt(0);
	fileName += ".png";
	basePathImages = "img/choices/";
	
	return basePathImages + fileName
}
