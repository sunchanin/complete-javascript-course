'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// const renderCountry = (data, className = '') => {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name"><${data.name.common}/h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         Number(data.population) / 1000000
//       ).toFixed(1)}</p>
//       <p class="country__row"><span>🗣️ </span>${
//         Object.values(data.languages)[0]
//       }</p>
//       <p class="country__row"><span>💰</span>${
//         Object.keys(data.currencies)[0]
//       }</p>
//     </div>
//   </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = country => {
//   const req = new XMLHttpRequest();

//   // GET country by name
//   req.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   req.send();

//   req.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     renderCountry(data);

//     const neighbour = data.borders[0]

//     // GET neighbouring country
//     const reqN = new XMLHttpRequest();

//     reqN.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     reqN.send();

//     reqN.addEventListener('load', function () {
//       const [dataN] = JSON.parse(this.responseText);
//       console.log('dataN: ', dataN);
//       renderCountry(dataN, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbor('thailand');

const apiUrl = 'https://restcountries.com/v3.1';

// const getCountryData = country => {
//   // GET country by name
//   fetch(`${apiUrl}/name/${country}`)
//     .then(res => {
//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       // Get neighbor of country
//       const neighbor = data[0].borders[0];
//       return fetch(`${apiUrl}/alpha/${neighbor}`);
//     })
//     .then(res => {
//       return res.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(err);
//     });
// };

// btn.addEventListener('click', () => {
//   getCountryData('south korea');
// })

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer', 0));

// Promise.resolve('Promise resolve 1').then(res => console.log(res));

// console.log('end');

// const testPromise = new Promise((resolve, reject) => {
//   const randomNumber = Math.random();
//   console.log('Please wait...');

//   setTimeout(() => {
//     if (randomNumber >= 0.5) {
//       resolve('Pass');
//     } else {
//       reject('Fail');
//     }
//   }, 2000);
// });

// testPromise
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// const wait = seconds => {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log(`waiting for 2 seconds...`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`waiting for another 1 second...`);
//   });

// navigator.geolocation.getCurrentPosition(pos => console.log(pos));

// const getPosition = () => {
//   return new Promise((resolve, reject) => {

//     // navigator.geolocation.getCurrentPosition(
//     //   pos => resolve(pos),
//     //   err => {
//     //     reject(err);
//     //   }
//     // );

//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = async country => {
//   const res = await fetch(`${apiUrl}/name/${country}`);
//   console.log(await res.json());
// };

// whereAmI("thailand")

(async () => {
  const res = await Promise.race([
    fetch(`${apiUrl}/name/thailand`),
    fetch(`${apiUrl}/name/japan`),
    fetch(`${apiUrl}/name/south korea`),
  ]);
  console.log(await res.json());
})();
