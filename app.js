const btnEl = document.getElementById('btn');
const animeContainerEl = document.querySelector('.anime-container');
const animeImgEl = document.querySelector('.anime-img');
const animeNameEl = document.querySelector('.anime-name');

// const apiUrl = 'https://api.waifu.im/search'
// const params = {included_tags: 'maid', height: '>=2000'};
// const queryParams = new URLSearchParams(params);
// const requestUrl = `${apiUrl}?${queryParams}`;

// btnEl.addEventListener('click', async function() {
//   try {
//     const response = await fetch(requestUrl);
//     const data = await response.json();
//     animeImgEl.src = data.imageURL;
//     animeContainerEl.style.display = 'block';
//   } catch (error) {
    
//   }
// })


const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
const params = {
  included_tags: 'maid',
  height: '>=2000'
};

const queryParams = new URLSearchParams(params);
const requestUrl = `${apiUrl}?${queryParams}`;

fetch(requestUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed with status code: ' + response.status);
    }
  })
  .then(data => {
    // Process the response data as needed
    // console.log(data);
    animeContainerEl.style.display = 'block';
    animeImgEl.src = data[1];
  })
  .catch(error => {
    console.error('An error occurred:', error.message);
  });
