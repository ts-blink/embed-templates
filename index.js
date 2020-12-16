// Import ThoughtSpot SDK
import { init, PinboardEmbed } from "ts-embed-sdk";
import "./styles.css";

// Initialize embed configuration
init({
  thoughtSpotHost:
    /*param-start-hosturl*/ "https://172.18.92.4:8443" /*param-end-hosturl*/,
  authType: "SSO"
});

// Instantiate class for embedding a pinboard
const embed = new PinboardEmbed("#embed", {
  frameParams: {
    width: 1280,
    height: 720
  }
});

embed
  // Register event listeners
  .on("init", showLoader)
  .on("load", hideLoader)
  // Render pinboard with UUID
  .render("0dfc3e9a-f4ac-4a24-a9e1-4e901961173a");

// Functions to show and hide a loader while iframe loads
function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

