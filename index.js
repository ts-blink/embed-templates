// Import ThoughtSpot SDK
import { init, PinboardEmbed } from "ts-embed-sdk";
import "./styles.css";

// Initialize embed configuration
init({
  thoughtSpotHost:
    /*param-start-hosturl*/"https://10.87.90.166"/*param-end-hosturl*/,
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
  .render({
      /*param-start-pinboardId*/pinboardId: "976bb48e-b1e0-4621-a7da-51161cef4b29",/*param-end-pinboardId*/
    /*param-start-answerId*/vizId: "b53ed4b9-7a95-4a16-9f6b-1c7f53d9777f",/*param-end-answerId*/
      runtimeFilters: [],
  });

// Functions to show/hide a loader while the iframe loads
function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

