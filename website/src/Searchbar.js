function SearchBar () {
    const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", debounce(searchRepositories, 300));

function searchRepositories() {
  const query = searchInput.value.trim();
  if (query === "") {
    searchResults.innerHTML = "";
    return;
  }

  const url = `https://api.github.com/search/repositories?q=${query}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayResults(data.items);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function displayResults(results) {
  searchResults.innerHTML = "";
  if (results.length === 0) {
    searchResults.innerHTML = "No results found.";
  } else {
    results.forEach((result) => {
      const resultElement = document.createElement("div");
      resultElement.classList.add("result");
      resultElement.innerHTML = `
        <h3>${result.full_name}</h3>
        <p>${result.description}</p>
        <a href="${result.html_url}" target="_blank">View on GitHub</a>
      `;
      searchResults.appendChild(resultElement);
    });
  }
}

// Debounce function to limit API requests
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

    return(
        <div> Search Bar</div>
    )
}


export default SearchBar;
