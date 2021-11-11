//const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function fetchDogs() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
      .then(response => response.json())
      .then(dogsjson => renderDogPics(json));

      const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
  
        title.innerText = data.title;
        summary.innerText = data.summary;
      });
    }
 
function renderDogPics(dogsjson) {
    document.querySelector('div#json ')
}
        