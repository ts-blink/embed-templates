// Import ThoughtSpot SDK
import { init, PinboardEmbed } from "ts-embed-sdk";
import "./styles.css";

// Initialize embed configuration
init({
  thoughtSpotHost:
    /*param-start-hosturl*/ "https://10.87.90.166" /*param-end-hosturl*/,
  authType: "SSO"
});

// Instantiate class for embedding a pinboard
const embed = new PinboardEmbed("#embed", {
  frameParams: {
    width: 1280,
    height: 720
  },
  /*param-start-modifyActions*//*param-end-modifyActions*/
});

embed
  // Register event listeners
  .on("init", showLoader)
  .on("load", hideLoader)
  // Render pinboard with UUID
  .render({
      /*param-start-pinboardId*//*param-end-pinboardId*/
      /*param-start-runtimeFilters*//*param-end-runtimeFilters*/
  });

// Functions to show and hide a loader while iframe loads
function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

