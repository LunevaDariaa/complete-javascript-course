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

// // okBtn.addEventListener('click', function () {
// //   console.log(input.value);
// //   getCountryData(input.value);
// //   input.textContent = '';
// // });

// getCountryData('germany');
// getCountryData('canada');

//////////////////////////////////////////////////
//Create conciquence of a AJAX calls

const renderCountry = function (data, className = '') {
  const html = ` <article class="country ${className}`;
  const renderCountry = function (data) {
    const html = ` <article class="country">
  <img class="country__img" src="${data.flags.svg}" />
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

  const getCountryData = function (counrty) {
    //Country 1
    fetch(`https://restcountries.com/v3.1/name/${counrty}`)
      .then(response => response.json())
      .then(([data]) => {
        renderCountry(data);

        const neighbour = data.borders?.[0];
        if (!neighbour) return;

        //Country 2
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
      })
      .then(response => response.json())
      .then(([data]) => renderCountry(data, 'neighbour'));
  };
  btn.addEventListener('click', function () {
    getCountryData('germany');
  });

  getCountryAndNeighbour('germany');
};
