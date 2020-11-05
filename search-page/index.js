// Import stylesheets
import "./styles.css";
import { init, SearchEmbed } from "ts-embed-sdk";

// Write Javascript code!
init({
  thoughtSpotHost: "https://172.18.92.4:8443/v2",
  authType: "SSO"
});
const tsSearch = new SearchEmbed("#embed", {
  frameParams: {
    width: 800,
    height: 500
  }
});
console.log(tsSearch.getId());
tsSearch
  .on("init", showLoader)
  .on("load", hideLoader)
  .render()
  .on("answerPageLoading", (payload) =>
    console.log(
      "message received from embedded view" + JSON.stringify(payload)
    )
  );
document.getElementById("message").addEventListener("click", () => {
  tsSearch.trigger("update", { data: "Hello from parent" });
});


function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

