import ZoneCanvasRuler from "./canvas-ruler.mjs";
import ZoneTokenRuler from "./token-ruler.mjs";

let showError = false;

Hooks.once('init', function () {
  if (CONFIG.Token.rulerClass?.name != "TokenRuler" || CONFIG.Token.rulerClass?.prototype.name == "BaseTokenRuler") {
    showError = true;
    return;
  }
  CONFIG.Token.rulerClass = ZoneTokenRuler;
  CONFIG.Canvas.rulerClass = ZoneCanvasRuler;

  game.settings.register("zone-movement", "showLabels", {
    config: true,
    name: "ZONE-MOVEMENT.DistanceLabel.Name",
    hint: "ZONE-MOVEMENT.DistanceLabel.Hint",
    scope: 'world',
    type: Boolean,
    default: true,
  });
});

Hooks.once('ready', function () {
  if (showError) {
    ui.notifications.error("Zone Movement module conflict detected. Please ensure only one Zone Movement module is enabled.");
  }
});