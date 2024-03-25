/* eslint-disable no-unused-vars */
function addMovie() {
  const movie = {
    title: document.forms["movieform"]["movie"].value,
    rating: document.forms["movieform"]["rating"].value,
  };
  movies.push(movie);
}

function finishMovies() {
  // prevent the default form submission
  event.preventDefault();
  movies.sort((a, b) => b.rating - a.rating);
  const table = document.createElement("table");
  for (const movie of movies) {
    const row = table.insertRow();
    const titleCell = row.insertCell(0);
    const ratingCell = row.insertCell(1);
    titleCell.textContent = movie.title;
    ratingCell.textContent = movie.rating;
  }
  document.getElementById("outputDiv").appendChild(table);
}

const movies = [];
document.getElementById("addmovie").addEventListener("click", addMovie);
