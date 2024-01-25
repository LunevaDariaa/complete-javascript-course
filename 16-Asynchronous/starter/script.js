'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const input = document.querySelector('#input');
const okBtn = document.querySelector('.okBtn');

///////////////////////////////////////
//https://countries-api-836d.onrender.com/countries/

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     //   console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = ` <article class="country">
//   <img class="country__img" src="${data.flags.svg}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} M</p>
//     <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
//     <p class="country__row"><span>💰</span>${
//       Object.values(data.currencies)[0].name
//     }</p>
//   </div>
// </article> `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
/*
// // okBtn.addEventListener('click', function () {
// //   console.log(input.value);
// //   getCountryData(input.value);
// //   input.textContent = '';
// // });

// getCountryData('germany');
// getCountryData('canada');

//////////////////////////////////////////////////
//Create conciquence of a AJAX calls
*/
const renderCountry = function (data, className = '') {
  const html = ` <article class="country ${className}">
  
  <img class= "country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} M</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${
      Object.values(data.currencies)[0].name
    }</p>
  </div>
</article> `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
/*

const getCountryAndNeighbour = function (country) {
  //AJAX call country 1

  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    //   console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render country 1
    renderCountry(data);

    //Get neighbour country
    const [neighbour] = data.borders;
    if (!neighbour) return;

    //Ajax call counrty 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('germany');

////////////////////////////////
//Example of a callback hell(A lot of nested functions, usually AJAX)

// setTimeout(() => {
//   console.log('1 sec passed');
//   setTimeout(() => {
//     console.log('2 sec passed');
//     setTimeout(() => {
//       console.log('3 sec passed');
//       setTimeout(() => {
//         console.log('4 sec passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
//But it gets reaaly messy and hard to debug. To make things work we have promises.

///////////////////////////////////////////
//Promises

//  const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// const getCountryData = function (counrty) {
//   fetch(`https://restcountries.com/v3.1/name/${counrty}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// Chaining Promises

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`Country not fount (${response.status})`);

    return response.json();
  });
};

// const getCountryData = function (counrty) {
//   //Country 1
//   fetch(`https://restcountries.com/v3.1/name/${counrty}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not fount (${response.status})`);

//       return response.json();
//     })
//     .then(([data]) => {
//       console.log(data);
//       renderCountry(data);

//       const neighbour = data.borders?.[0];
//       if (!neighbour) return;

//       //Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not fount (${response.status})`);

//       return response.json();
//     })
//     .then(([data]) => renderCountry(data, 'neighbour'))
//     .catch(err =>
//       renderError(`Something went wrong ${err.message}. Try again!`)
//     )
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (counrty) {
  //Country 1
  getJSON(`https://restcountries.com/v3.1/name/${counrty}`, `Country not fount`)
    .then(([data]) => {
      console.log(data);
      renderCountry(data);

      const neighbour = data.borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!');

      //Country 2

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not fount`
      );
    })

    .then(([data]) => renderCountry(data, 'neighbour'))
    .catch(err =>
      renderError(`Something went wrong ${err.message}. Try again!`)
    )
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
// btn.addEventListener('click', function () {
//   getCountryData('germany');
// });

// Handling Rejected Promises;

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀*/
/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      const country = data.address.country.toLowerCase();
      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not fount (${response.status})`);

      return response.json();
    })
    .then(data => {
      console.log(data);
      return renderCountry(data[0]);
    })
    .catch(err => console.error(err.message))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

whereAmI(52.508, 13.381);
whereAmI(-33.933, 18.474);
whereAmI(19.037, 72.873);

///////////////////////////////////////////////
//Event loop in practice
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('resolve promise 2').then(res => {
  for (let i = 0; i < 1000000; i++) {}
  console.log(res);
});
console.log('test end');

///////////////////////////////////////////////////
// Building a Simple Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying settimeout
const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 1 second');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 second');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 second');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 second');
    return wait(1);
  });

////////////////////////////////////////
//Promisifying the Geolocation API

console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      const country = data.address.country.toLowerCase();
      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not fount (${response.status})`);

      return response.json();
    })
    .then(data => {
      console.log(data);
      return renderCountry(data[0]);
    })
    .catch(err => console.error(err.message))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', whereAmI);
*/
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀

const wait = function () {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
};

const containerImg = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      containerImg.appendChild(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error(`Error loading image`));
    });
  });
};
let currentImg;
createImage('img/img-1.jpg')
  .then(image => {
    currentImg = image;
    console.log('Image loaded:', image);
    return wait();
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(image => {
    currentImg = image;
    console.log('Image loaded:', image);
    return wait();
  })
  .then(() => (currentImg.style.display = 'none'))
  .catch(error => {
    console.error(error);
  });

////////////////////////////////////////////
//Consuming Promises with Async/Await
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  //Geolocation
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    //Reverse Geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    //country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);

    return `You are in ${dataGeo.address.city}, ${dataGeo.address.country}`;
  } catch (err) {
    console.log(err.message);
    renderError(`Something went wrong ${err.message}`);

    //Reject promise return from async function
    throw err;
  }
};

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally('3: Finished getting location');

////////////////////////////////////////
//Error Handling With try...catch
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

////////////////////////////////////////////
//Returning Values from Async Functions

(async function () {
  console.log('1: Will get location');
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.log(`2: ${err.message}`);
  }
  console.log('3: Finished getting location');
})();


//////////////////////////////////////
//Running Promises in Paralle
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`Country not fount (${response.status})`);

    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    //Run all 3 ajax calls in parallel
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital[0]));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('canada', 'germany', 'russia');

//////////////////////////////////////////
// Other Promise Combinators: race, allSettled and any

//Promise.race

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/canada`),
  ]);
  console.log(res[0].capital);
})();

//Timeout for an Operation with Promise.race
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, s * 1000);
  });
};
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/canada`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

//Promise.any
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
const wait = function () {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
};

const containerImg = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      containerImg.appendChild(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error(`Error loading image`));
    });
  });
};

// const loadPause = async function () {
//   try {
//     let img = await createImage('img/img-1.jpg');
//     console.log('Image loaded:', img);
//     await wait();
//     img.style.display = 'none';
//     img = await createImage('img/img-2.jpg');
//     console.log('Image loaded:', img);
//     await wait();
//     img.style.display = 'none';
//   } catch (err) {
//     console.error(err);
//   }
// };
// loadPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const data = await Promise.all(imgs);
    console.log(data);
    data.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
