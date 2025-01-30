const stars = document.querySelectorAll(".fa-star");
const totalRating = document.querySelector(".selected-rating-value");
let selectedStarRating = 0;

stars.forEach((starItem, index) => {
    starItem.addEventListener("mouseover", () => handleMouseover(index + 1));
    starItem.addEventListener("mouseleave", () => handleLeave());
    starItem.addEventListener("click", () => handleMouseClick(index + 1));
});

function handleMouseover(currentRating) {
    for (let i = 0; i < stars.length; i++) {
        if (i < currentRating) {
            stars[i].classList.add("active");
        } else {
            stars[i].classList.remove("active");
        }
    }
}

function handleLeave() {
    for (let i = 0; i < stars.length; i++) {
        if (i < selectedStarRating) {
            stars[i].classList.add("active");
        } else {
            stars[i].classList.remove("active");
        }
    }
}

function handleMouseClick(currentRating) {
    selectedStarRating = currentRating;
    for (let i = 0; i < stars.length; i++) {
        if (i < selectedStarRating) {
            stars[i].classList.add("active");
        } else {
            stars[i].classList.remove("active");
        }
    }
    totalRating.textContent = selectedStarRating;
}