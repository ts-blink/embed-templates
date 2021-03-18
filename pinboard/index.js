// Import ThoughtSpot SDK
import {
  init,
  PinboardEmbed,
  Action,
  EmbedEvent,
  AuthType
} from "@thoughtspot/visual-embed-sdk";
import "./styles.css";

// Initialize embed configuration
init({
  thoughtSpotHost:
    /*param-start-hosturl*/ "https://10.87.90.166" /*param-end-hosturl*/,
  authType: AuthType.None
});

// Instantiate class for embedding a pinboard
const embed = new PinboardEmbed("#embed", {
    frameParams: {},
    /*param-start-modifyActions*//*param-end-modifyActions*/
    /*param-start-pinboardId*//*param-end-pinboardId*/
    /*param-start-runtimeFilters*//*param-end-runtimeFilters*/
});

try {
  hideNoDataImage();
  embed
    // Register event listeners
    .on("init", showLoader)
    .on("load", hideLoader)
    // Render pinboard with UUID
    .render();
} catch(error) {
  showNoDataImage();
  hideLoader();
}

// Functions to show and hide a loader while iframe loads
function showLoader() {
  document.getElementById("loader").style.display = "block";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

// Functions to show or hide No data images

function showNoDataImage() {
  document.getElementById("no-data").style.display = "block";
}
function hideNoDataImage() {
  document.getElementById("no-data").style.display = "none";
}
