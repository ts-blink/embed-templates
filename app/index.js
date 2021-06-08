// Import ThoughtSpot SDK
import {
  init,
  AppEmbed,
  Action,
  RuntimeFilterOp,
  EmbedEvent,
  AuthType,
  Page
} from "@thoughtspot/visual-embed-sdk";
import "./styles.css";

// Initialize embed configuration
init({
  thoughtSpotHost:
    /*param-start-hosturl*/ "https://10.87.90.166" /*param-end-hosturl*/,
  authType: AuthType.None
});

// Instantiate class for embedding the full application
const embed = new AppEmbed("#embed", {
    frameParams: {},
    /*param-start-showNavBar*//*param-end-showNavBar*/
    /*param-start-disableProfileAndHelp*//*param-end-disableProfileAndHelp*/
    /*param-start-navigateToUrl*//*param-end-navigateToUrl*/
    /*param-start-pageId*/pageId: Page.Home,/*param-end-pageId*/
    /*param-start-modifyActions*//*param-end-modifyActions*/
    /*param-start-runtimeFilters*//*param-end-runtimeFilters*/
});

embed
  // Register event listeners
  .on(EmbedEvent.Init, showLoader)
  .on(EmbedEvent.Load, hideLoader)
  /*param-start-customActionHandle*//*param-end-customActionHandle*/
  .render();

// Functions to show and hide a loader while iframe loads
function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

