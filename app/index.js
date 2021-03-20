// Import ThoughtSpot SDK
import {
  init,
  AppEmbed,
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
const embed = new AppEmbed("#embed", {
    frameParams: {},
    /*param-start-showNavBar*//*param-end-showNavBar*/
    /*param-start-pageId*/pageId: "home",/*param-end-pageId*/
    /*param-start-modifyActions*//*param-end-modifyActions*/
    /*param-start-runtimeFilters*//*param-end-runtimeFilters*/
});

embed
  // Register event listeners
  .on("init", showLoader)
  .on("load", hideLoader)
  .render();

// Functions to show and hide a loader while iframe loads
function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

