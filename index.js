// Import packages
import "./styles.css";
import { init, PinboardEmbed } from "ts-embed-sdk";

// Write Javascript code!
init({
  thoughtSpotHost:
    /*param-start-hosturl*/ "https://172.18.92.4:8443" /*param-end-hosturl*/,
  authType: "SSO"
});

const embed = new PinboardEmbed("#embed", {
  frameParams: {
    width: 1280,
    height: 720
  }
});
embed
  .on("init", showLoader)
  .on("load", hideLoader)
  .render("21329019-3cb1-475e-b159-56b875150c61");

function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

