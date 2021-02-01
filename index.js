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
  // Configure theme colours
  theme: {
    backgroundColor: 'rgba(41, 181, 232, 0.46)'
  }
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
      dataSources: [ /*param-start-datasource*//*param-end-datasource*/],
  });

// Show/hide a loader while iframe is loading
function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

