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
    backgroundColor: '#C6E3CF'
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
  .render(["8dada323-5956-4e2d-ae12-81bfc78b2ea5"]);

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

