const urlMovie = "https://api.themoviedb.org/3/discover/movie?api_key=0c77d89c79d4efd962b73bf5587deff2&sort_by=popularity.desc&page=1";

const cardFilm = document.getElementById("card-container");

getDataFilm(urlMovie);

function getDataFilm (url) {
  fetch(url)
    .then((result) => 
    result.json())
    .then((dataFilm) => {

      console.log(dataFilm.results);
      listMovie(dataFilm.results);

    });
}


function listMovie (dataFilm) {
  cardFilm.innerHTML = "";
  dataFilm.forEach((itemFilm) => {
    const { poster_path, title, vote_average, release_date } = itemFilm;
    const movie = document.createElement("div");

    movie.innerHTML = `
    <div id="cards" class="row row-cols-1 row-cols-md g-4">
      <div class="col">
        <div class="card">
         <img src="https://image.tmdb.org/t/p/w500/${poster_path}" class="img-fluid" alt="poster" />
         <div class="card-body">
            <div class="title">
              <h5 class="text"><b>${title}</b></h5>
              <p id= "rate" class="text"><b>${vote_average}</b></p>
            </div>
            <h6 class= "text"> ${release_date}</h6>
         </div>
       </div
      </div>
    </div> `
          
    ;
        
    cardFilm.appendChild(movie);
  });
}



const searchKey = document.getElementById ("search-bar").value;


const urlSearch = "https://api.themoviedb.org/3/search/movie?api_key=0c77d89c79d4efd962b73bf5587deff2&query=${search_key}&page=1";

      
search.addEventListener ("submit", (event) => {
  event.preventDefault();
  
  if (searchKey) {
    getDataFilm(urlSearch + "&query=" + searchKey);
  } else {getDataFilm(urlMovie);}
});





      
      
      
      
  