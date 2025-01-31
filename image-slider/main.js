const sliderContainer = document.querySelector(".slider-container");


const fetchImageSliderUsingXHR = (limit, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://picsum.photos/v2/list?page=1&limit=${limit}`);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            callback(null, xhr.response);
        } else {
            callback("Error while fetching the data!", null);
        }
    }
}

fetchImageSliderUsingXHR(5, (error, response) => {
    if (Array.isArray(response)) {
        displayImageSlider(response);
    } else {
        console.log(error);
    }
});

function displayImageSlider(getAllImages) {
    const imageSliderContainer = document.querySelector(".image-slider-container");
    const mainContainer = document.querySelector(".conatiner");
    const DivDotBtnConatiner = document.createElement("div");
    DivDotBtnConatiner.className = "dot-btn"
    mainContainer.appendChild(DivDotBtnConatiner);
    getAllImages.forEach((item, index) => {
        const imageElement = document.createElement("img");
        const spanDotElement = document.createElement("span");
        imageElement.setAttribute("src", item.download_url);
        imageElement.setAttribute("alt", item.id);
        imageSliderContainer.appendChild(imageElement);
        DivDotBtnConatiner.appendChild(spanDotElement);
    });

    let currentIndex = 0;
    const imageList = imageSliderContainer.querySelectorAll("img");
    const dotList = DivDotBtnConatiner.querySelectorAll("span");
    const btnNext = document.querySelector(".next");
    const btnPrev = document.querySelector(".prev");

    function updateSlider() {
        imageList.forEach((item, index) => {
            item.style.display = index === currentIndex ? "block" : " none";
        });
        dotList.forEach((dot, index) => {
            dot.style.backgroundColor = index === currentIndex ? "#953636" : "#ccc";
        });
    }

    updateSlider();

    btnNext.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= imageList.length) {
            currentIndex = 0;
        }
        updateSlider();
    });

    btnPrev.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex <= 0) {
            currentIndex = imageList.length - 1;
        }
        updateSlider();
    });

    dotList.forEach((item, index) => {
        item.addEventListener("click", () => {
            currentIndex = index;
            updateSlider();
        })
    });

    let autoSlide = setInterval(() => {
        btnNext.click();
    }, 3000);

    [btnNext, btnPrev, ...dotList].forEach((btn) => {
        btn.addEventListener("mouseenter", () => clearInterval(autoSlide));
        btn.addEventListener("mouseleave", () => {
            autoSlide = setInterval(() => btnNext.click(), 3000);
        });
    });
}