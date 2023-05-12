const text = document.querySelector(".text");

const getColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomColor.toString(16);
  document.body.style.backgroundColor = randomCode;
  text.innerText = randomCode;
  navigator.clipboard.writeText(randomCode);
};
document.querySelector("#button").addEventListener("click", function () {
  getColor();
});

// if we want to see already a color on body when page reload so we can do for this>>>>>>>>>>>>>>>>
getColor();
