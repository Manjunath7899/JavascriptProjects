const hexBtn = document.querySelector(".hex-color-btn");
const rgbBtn = document.querySelector(".rgb-color-btn");
const hexCopyClipBoardBtn = document.querySelector(".copy-clip-board");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbColorCopyBtn = rgbColorContainer.querySelector(".copy-clip-board");

const createRandomHexColorGenerator = () => {
  let randomColor = "0123456789ABCDEF";
  let hexColorOutput = "#";
  for (let i = 0; i < 6; i++) {
    hexColorOutput += randomColor.charAt(
      Math.floor(Math.random() * randomColor.length)
    );
  }
  const hexRandomColorContainer = document.querySelector(
    ".hex-color-container"
  );
  const existingHexTextColor = hexRandomColorContainer.querySelector("h2");
  if (existingHexTextColor) {
    existingHexTextColor.remove();
  }
  const randomColorTexth2 = document.createElement("h2");
  randomColorTexth2.textContent = hexColorOutput;
  hexRandomColorContainer.prepend(randomColorTexth2);
  hexRandomColorContainer.style.backgroundColor = hexColorOutput;
  return hexColorOutput;
};

const createRgbColor = () => {
  const getRedInputRange = document.querySelector("#red").value;
  const getGreenInputRange = document.querySelector("#green").value;
  const getBlueInputRange = document.querySelector("#blue").value;

  const rgbColorContainer = document.querySelector(".rgb-color-container");
  const existingRgbColor = document.querySelector(".rgb-color-container h2");
  if (existingRgbColor) {
    existingRgbColor.remove();
  }
  const rgbColorh2 = document.createElement("h2");
  rgbColorh2.textContent = `rgb(${getRedInputRange}, ${getGreenInputRange}, ${getBlueInputRange})`;
  rgbColorContainer.prepend(rgbColorh2);
  rgbColorContainer.style.backgroundColor = `rgb(${getRedInputRange}, ${getGreenInputRange}, ${getBlueInputRange})`;
};

const copyToClipBoard = (containerSelector) => {
  const colorText = document.querySelector(
    `.${containerSelector} h2`
  )?.textContent;
  if (colorText) {
    navigator.clipboard.writeText(colorText);
    alert(`Color copied ${colorText}`);
  }
};

hexBtn.addEventListener("click", createRandomHexColorGenerator);
hexCopyClipBoardBtn.addEventListener("click", () =>
  copyToClipBoard("hex-color-container")
);
rgbBtn.addEventListener("click", createRgbColor);
rgbColorCopyBtn.addEventListener("click", () =>
  copyToClipBoard("rgb-color-container")
);
