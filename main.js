// retrieve items
let bgOverlay = document.querySelector("#bg-overlay");
let openBtn = document.querySelector("#open-btn");
let modalBox = document.querySelector("#modal-box");
let closeBtn = document.querySelector("#close-btn");

// event listeners
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// functions
function openModal() {
    modalBox.toggleAttribute("hidden", false);
    bgOverlay.style.visibility = "visible";
}

function closeModal() {
    modalBox.toggleAttribute("hidden", true);
    bgOverlay.style.visibility = "hidden";
}

