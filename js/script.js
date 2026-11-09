const apiKey = "OXKVAUP1p9oxUfR5uXxiepYNeEfOCnA4";
const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");
const statusMessage = document.querySelector("#status-message");

fetchButton.addEventListener("click", async function () {
  if (fetchButton.disabled) {
    return;
  }

  if (!apiKey) {
    statusMessage.textContent = "Giphy isn't connected yet.";
    return;
  }

  const searchTerm = searchInput.value.trim() || "dogs";
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}&limit=12`;

  fetchButton.disabled = true;
  statusMessage.textContent = "Loading GIFs...";
  gifContainer.innerHTML = "";

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`Giphy request failed (${response.status}).`);
    }

    const data = await response.json();
    const images = [];

    for (const gif of data.data) {
      images.push(gif.images.original.url);
    }

    console.log(images);

    for (const image of images) {
      gifContainer.innerHTML += `<img src="${image}" class="col-3 mb-3" alt="GIF result">`;
    }

    if (images.length === 0) {
      statusMessage.textContent = "No GIFs found. Try another keyword.";
    } else {
      statusMessage.textContent = `Showing ${images.length} GIFs for "${searchTerm}".`;
    }
  } catch (error) {
    statusMessage.textContent = "Couldn't load GIFs. Please try again.";
    console.error("Error fetching GIFs:", error);
  } finally {
    fetchButton.disabled = false;
  }
});

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    fetchButton.click();
  }
});
