// Import packages
import "./styles.css";
import {
  init,
  SearchEmbed,
  Action,
  RuntimeFilterOp,
  EmbedEvent,
  AuthType
} from "@thoughtspot/visual-embed-sdk";

// Write Javascript code!
init({
  thoughtSpotHost:
    /*param-start-hosturl*/ "https://10.87.90.166" /*param-end-hosturl*/,
  authType: AuthType.None
});

// Instantiate SearchEmbed class
const embed = new SearchEmbed("#embed", {
    frameParams: {},
    /*param-start-collapseDataSources*//*param-end-collapseDataSources*/
    /*param-start-hideDataSources*//*param-end-hideDataSources*/
    /*param-start-hideResults*//*param-end-hideResults*/
    /*param-start-enableSearchAssist*//*param-end-enableSearchAssist*/
    /*param-start-modifyActions*//*param-end-modifyActions*/
    /*param-start-disabledActions*//*param-end-disabledActions*/
    /*param-start-dataSources*//*param-end-dataSources*/
    /*param-start-searchQuery*//*param-end-searchQuery*/
    /*param-start-answerId*//*param-end-answerId*/
});

embed
  // Register event handlers
  .on(EmbedEvent.Init, showLoader)
  .on(EmbedEvent.Load, hideLoader)
  /*param-start-customActionHandle*//*param-end-customActionHandle*/
  .on("answerPageLoading", payload =>
    console.log("message received from embedded view" + JSON.stringify(payload))
  )
  // Render the embedded search and pass in the data source id
  .render();

// Show/hide a loader while iframe is loading
function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

