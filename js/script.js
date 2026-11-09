const apiKey = "YOUR_API_KEY";
const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

fetchButton.addEventListener("click", async function () {
  const searchTerm = searchInput.value.trim() || "dogs";
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}&limit=12`;
  const response = await fetch(endpoint);
  const data = await response.json();
  const images = [];

  for (const gif of data.data) {
    images.push(gif.images.original.url);
  }

  console.log(images);
  gifContainer.innerHTML = "";

  for (const image of images) {
    gifContainer.innerHTML += `<img src="${image}" class="col-3 mb-3" alt="GIF result">`;
  }
});

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    fetchButton.click();
  }
});
