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

  var pkStickers = new Piklor(".stickers-color-picker",
      Object.keys(stickersColors),
      {
        open: ".stickers-wrapper .btn"
      }
  );

  pkFrame.colorChosen(function (col) {
      frameColor = frameColors[col];
      setImageWithColors(stickersColor, frameColor, aeroColor);

      pkFrame.close();  /* close all dialogs */
      pkAero.close();
      pkStickers.close();
  });

  pkAero.colorChosen(function (col) {
      aeroColor = aeroColors[col];
      setImageWithColors(stickersColor, frameColor, aeroColor);

      pkFrame.close();  /* close all dialogs */
      pkAero.close();
      pkStickers.close();
  });

  pkStickers.colorChosen(function (col) {
      stickersColor = stickersColors[col];
      setImageWithColors(stickersColor, frameColor, aeroColor);

      pkFrame.close();  /* close all dialogs */
      pkAero.close();
      pkStickers.close();
  });
});
