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

var stickersColors = {
    "#0000ff": "blue",
    "#00aa00": "green",
    "#00ff00": "marine",
    "#ffaa00": "orange",
    "#ff0000": "red",
    "#aa00ff": "violet",
    "#ffff00": "yellow"
};

var frameColors = {
    "#e1e1e1": "grey",
    "#797279": "carbon",
};

var aeroColors = {
    "#e1e1e1": "white",
    "#797279": "carbon",
};

var stickersColor = "b";
var frameColor = "c";
var aeroColor = "c";

window.addEventListener("load", function () {
  var pkStickers = new Piklor(".stickers-color-picker",
      Object.keys(stickersColors),
      {
        open: ".stickers-wrapper .btn"
      }
  );

  var pkFrame = new Piklor(".frame-color-picker",
      Object.keys(frameColors),
      {
        open: ".frame-wrapper .btn"
      }
  );

  var pkAero = new Piklor(".aero-color-picker",
      Object.keys(aeroColors),
      {
        open: ".aero-wrapper .btn"
      }
  );

  pkFrame.colorChosen(function (col) {
      frameColor = frameColors[col];
      setImageWithColors(stickersColor, frameColor, aeroColor);

      pkFrame.close();
  });

  pkAero.colorChosen(function (col) {
      aeroColor = aeroColors[col];
      setImageWithColors(stickersColor, frameColor, aeroColor);

      pkAero.close();
  });

  pkStickers.colorChosen(function (col) {
      stickersColor = stickersColors[col];
      setImageWithColors(stickersColor, frameColor, aeroColor);

      pkStickers.close();
  });
});
