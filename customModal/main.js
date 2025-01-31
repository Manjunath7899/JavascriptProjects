const openModalBtn = document.querySelector(".open-modal");
const modalBackground = document.querySelector(".modal-background");
const closeIconBtn = document.querySelector(".close-btn");
const closeBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", () => {
    modalBackground.style.display = "block";
});

closeIconBtn.addEventListener("click", () => {
    modalBackground.style.display = "none";
});

closeBtn.addEventListener("click", () => {
    modalBackground.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modalBackground) {
        modalBackground.style.display = "none";
    }
});

document.addEventListener("keydown", (event) => {
    modalBackground.style.display = "none";
});