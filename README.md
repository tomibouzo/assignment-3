# Assignment #3 - Giphy API

Search for GIFs using Giphy's Search endpoint. Click **Fetch a GIF** or press Enter to display up to 12 results. Leave the search field blank to get dog GIFs.

## Setup

1. Open `js/script.js` and replace `YOUR_API_KEY` with your Giphy API key.
2. Open `index.html` with Live Server in VS Code.
3. Enter a keyword and click **Fetch a GIF**.

This assignment uses a key directly in the browser JavaScript, as described in the assignment instructions. If you keep a reference copy in `.env`, that file is ignored by Git; the page does not read `.env`.

## Features

- Fetches GIFs with `fetch()` and `async`/`await`.
- Stores the original image URLs in an `images` array and logs them to the console.
- Displays results in a Bootstrap grid and replaces the previous results on each search.
- Includes the extra-credit keyword search, with spaces and special characters encoded in the request.
- Shows loading, no-results, and request-error messages.

## Course resources

- Application Programming Interfaces
- The Call Stack and Asynchronous JavaScript
- Sending API Requests with JavaScript
