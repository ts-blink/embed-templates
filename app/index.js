// Import ThoughtSpot SDK
import { init, AppEmbed } from "@thoughtspot/embed-sdk";
import "./styles.css";

// Initialize embed configuration
init({
  thoughtSpotHost:
    /*param-start-hosturl*/ "https://10.87.90.166" /*param-end-hosturl*/,
  authType: "SSO"
});

// Instantiate class for embedding a pinboard
const embed = new AppEmbed("#embed", {
  frameParams: {
    width: 1280,
    height: 720
  },
  /*param-start-hideNavBar*//*param-end-hideNavBar*/
});

embed
  // Register event listeners
  .on("init", showLoader)
  .on("load", hideLoader)
  .render({
      /*param-start-pageId*/pageId: "home",/*param-end-pageId*/
      /*param-start-runtimeFilters*//*param-end-runtimeFilters*/
  });

// Functions to show and hide a loader while iframe loads
function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

