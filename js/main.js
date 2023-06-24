import { DOM } from "./dom";

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

// Display the Weather on initial page load using user's ip
DOM.updateDisplayFromIp();

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	if (searchInput.value === "") return;
	DOM.updateDisplayFromSearch(searchInput.value);
});