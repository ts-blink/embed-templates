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
    "2f64357c-d750-43a7-8a14-8d6f9c885efe",
    "3454ebf1-a5f2-437d-87d0-07c47eaef5b3"
  );

// Functions to show/hide a loader while the iframe loads
function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

