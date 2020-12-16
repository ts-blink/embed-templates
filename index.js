// Import ThoughtSpot SDK
import { init, PinboardEmbed } from "ts-embed-sdk";
import "./styles.css";

// Initialize embed configuration
init({
  thoughtSpotHost:
    /*param-start-hosturl*/"https://172.18.92.4:8443"/*param-end-hosturl*/,
  authType: "SSO"
});

// Instantiate class to embed a visualization
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
  // Render a viz within a pinboard
  .render(
    "0dfc3e9a-f4ac-4a24-a9e1-4e901961173a",
    "a07cea4d-d3b4-4011-aafe-37602f4c1583"
  );

// Functions to show/hide a loader while the iframe loads
function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

