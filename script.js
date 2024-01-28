//parte da pesquisa, porem primeiramente tem que colocar a api no terminal

const searchInput = document.getElementById("search-input");
const resultsArtists = document.getElementById("result-artists");
const resultPlaylist = document.getElementById("result-playlist");

function requestApi(searchTerm){
    const url = "http://localhost:3000/artistsname_like=${searchTerm}"
    fetch(url)//aconselho usar o link 
    .then((response) => response.json())
    .then((result) => displayResults(result))

}

function displayResults(result){
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById("artist-name");
    const artistImage = document.getElementById('artists-name');

    result.forEach(Element => 
        artistName.InnerText = Element.name;
        artistImage.src = Element.urlImg:
     
       
     resultsArtists.classList.remove("hidden")
    )};



document.addEventListener("input", function () {
  const = searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === ''){ 
   resultPlaylist.classList.add("hidden");
   resultsArtists.classList.remove("hidden");
 return;
  }

  requestApi(searchTerm)
    
})

