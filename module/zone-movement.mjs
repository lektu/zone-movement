import ZoneCanvasRuler from "./canvas-ruler.mjs";
import { registerSettings } from "./settings.mjs";
import ZoneTokenRuler from "./token-ruler.mjs";

let showError = false;

Hooks.once('init', function () {
  if (CONFIG.Token.rulerClass?.name != "TokenRuler" || CONFIG.Token.rulerClass?.prototype.name == "BaseTokenRuler") {
    showError = true;
    return;
  }
  CONFIG.Token.rulerClass = ZoneTokenRuler;
  CONFIG.Canvas.rulerClass = ZoneCanvasRuler;

  registerSettings();
});

Hooks.once('ready', function () {
  if (showError) {
    ui.notifications.error("Zone Movement module conflict detected. Please ensure only one Zone Movement module is enabled.");
  }
});