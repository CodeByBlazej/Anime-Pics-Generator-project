const btnEl = document.getElementById('btn');
const animeContainerEl = document.querySelector('.anime-container');
const animeImgEl = document.querySelector('.anime-img');
const animeNameEl = document.querySelector('.anime-name');

const apiUrl = 'https://api.waifu.im/search'
const params = {included_tags: 'maid', height: '>=2000'};
const queryParams = new URLSearchParams(params);
const requestUrl = `${apiUrl}?${queryParams}`;

async function getAnime() {
  try {
    btnEl.disabled = true;
    btnEl.innerText = 'Loading...';
    animeNameEl.innerText = 'Updating...';
    animeImgEl.src = 'spinner.svg';
    const response = await fetch(requestUrl);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = 'Get Anime';
    animeContainerEl.style.display = 'block';
    animeImgEl.src = data.images[0].url;
    if (data.images[0].artist) {
      animeNameEl.innerText = data.images[0].artist.name; 
    } else {
      animeNameEl.innerText = 'Anime name not available...'
    }
  } catch (error) {
    console.log(error);
    btnEl.disabled = true;
    btnEl.innerText = 'Get Anime';
    animeNameEl.innerText = 'An error happened, please try again...';
  }
}

getAnime();

btnEl.addEventListener('click', getAnime);
