// Import packages
import "./styles.css";
import { init, SearchEmbed } from "ts-embed-sdk";

// Write Javascript code!
init({
  thoughtSpotHost:
    /*param-start-hosturl*/ "https://172.18.92.4:8443" /*param-end-hosturl*/,
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
  .render([
      /*param-start-datasource*/ "18e9963c-1718-4670-af2c-d507cb82f0f8" /*param-end-datasource*/
  ]);

// On selecting a data source, trigger an event to ThoughtSpot
// to change the search data source
document.getElementById("data-source")
  .addEventListener("change", (e) => {
    const value = e.target.options[e.target.selectedIndex].value;
    tsSearch.trigger('setDataSources', [value]);
  });

// Show/hide a loader while iframe is loading
function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

