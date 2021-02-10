// Import packages
import "./styles.css";
import { init, SearchEmbed } from "ts-embed-sdk";

// Write Javascript code!
init({
  thoughtSpotHost:
    /*param-start-hosturl*/ "https://10.87.90.166" /*param-end-hosturl*/,
  authType: "SSO"
});

// Instantiate SearchEmbed class
const tsSearch = new SearchEmbed("#embed", {
    frameParams: {},
    /*param-start-collapseDataSources*//*param-end-collapseDataSources*/
    /*param-start-hideDataSources*//*param-end-hideDataSources*/
    /*param-start-hideResults*//*param-end-hideResults*/
    /*param-start-enableSearchAssist*//*param-end-enableSearchAssist*/
    /*param-start-modifyActions*//*param-end-modifyActions*/
    /*param-start-disabledActions*//*param-end-disabledActions*/
});

tsSearch
  // Register event handlers
  .on("init", showLoader)
  .on("load", hideLoader)
  .on("answerPageLoading", payload =>
    console.log("message received from embedded view" + JSON.stringify(payload))
  )
  // Render the embedded search and pass in the data source id
  .render({
      /*param-start-dataSources*//*param-end-dataSources*/
      /*param-start-searchQuery*//*param-end-searchQuery*/
      /*param-start-answerId*//*param-end-answerId*/
  });

// Show/hide a loader while iframe is loading
function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}
