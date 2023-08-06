const APIURL = "https://www.omdbapi.com/?apikey=87d78c25";
const SEARCHAPI = "https://www.omdbapi.com/?apikey=87d78c25";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { Poster, Title, Year } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
         <img src="${Poster}" alt="${Title}"/>
       <div class="movie-info">
           <h3>${Title}</h3>
           <span>${Year}</span>
       </div> 
       `;
    main.appendChild(movieEl);
  });
}
async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  console.log(respData);
  showMovies(respData.Search);
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getMovies(SEARCHAPI+ "&s=" + searchTerm);
    search.value = "";
  }
});
