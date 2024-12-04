const mainContainer = document.querySelector('.main-container');
const thankState = document.querySelector('.thank');
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const ratingBtn = document.querySelectorAll(".btn");


submitButton.addEventListener('click', () => {
  thankState.classList.remove("hidden")
  mainContainer.style.display = "none";
})

ratingBtn.forEach((rates) => {
  rates.addEventListener("click", () => {
    rating.innerHTML = rates.innerHTML;
  })
})