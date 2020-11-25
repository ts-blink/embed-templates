// Import packages
import "./styles.css";
import { init, SearchEmbed } from "ts-embed-sdk";

// Write Javascript code!
init({
  thoughtSpotHost:
    /*param-start-hosturl*/ "https://172.18.92.4:8443/v2" /*param-end-hosturl*/,
  authType: "SSO"
});
const tsSearch = new SearchEmbed("#embed", {
  frameParams: {}
});
console.log(tsSearch.getId());
tsSearch
  .on("init", showLoader)
  .on("load", hideLoader)
  .on("answerPageLoading", payload =>
    console.log("message received from embedded view" + JSON.stringify(payload))
  )
  .render(["8dada323-5956-4e2d-ae12-81bfc78b2ea5"]); // data source;
document.getElementById("message").addEventListener("click", () => {
  tsSearch.trigger("update", { data: "Hello from parent" });
});

function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

