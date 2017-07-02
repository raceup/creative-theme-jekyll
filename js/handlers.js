var frameColors = {
    "#0000ff": "blue",
    "#00aa00": "green",
    "#00ff00": "marine",
    "#ffaa00": "orange",
    "#ff0000": "red",
    "#aa00ff": "violet",
    "#ffff00": "yellow"
};

var aeroColors = {
    "#e1e1e1": "grey",
    "#797279": "carbon",
};

var stickersColors = {
    "#e1e1e1": "white",
    "#797279": "carbon",
};

var frameColor = "b";
var aeroColor = "c";
var stickersColor = "c";

window.addEventListener("load", function () {
    var pkFrame = new Piklor(".frame-color-picker",
      Object.keys(frameColors),
      {
        open: ".frame-wrapper .btn"
      }
    );

    pkFrame.colorChosen(function (col) {
        frameColor = frameColors[col];
        setImageWithColors(frameColor, aeroColor, stickersColor);
    });

  var pkAero = new Piklor(".aero-color-picker",
      Object.keys(aeroColors),
      {
        open: ".aero-wrapper .btn"
      }
    );

    pkAero.colorChosen(function (col) {
        aeroColor = aeroColors[col];
        setImageWithColors(frameColor, aeroColor, stickersColor);
    });

  var pkStickers = new Piklor(".stickers-color-picker",
      Object.keys(stickersColors),
      {
        open: ".stickers-wrapper .btn"
      }
    );

    pkStickers.colorChosen(function (col) {
        stickersColor = stickersColors[col];
        setImageWithColors(frameColor, aeroColor, stickersColor);
    });
});
