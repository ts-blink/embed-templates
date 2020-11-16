// Import packages
import "./styles.css";
import { init, SearchEmbed } from "ts-embed-sdk";

// Write Javascript code!
init({
  thoughtSpotHost: /*param-start-hosturl*/"https://172.18.92.4:8443"/*param-end-hosturl*/,
  authType: "SSO"
});

document.getElementById("openSearch").addEventListener("click", () => {
  let tsSearch = new SearchEmbed(".popover .popover-body", {
    frameParams: {}
  });
  tsSearch.on("init", showLoader).on("load", hideLoader).render();
  document.querySelector(".popover").classList.add("open");
});

document
  .querySelector(".popover .popover-header .close-btn")
  .addEventListener("click", () => {
    document.querySelector(".popover").classList.remove("open");
    document.querySelector(".popover .popover-body iframe").remove();
  });

function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}
