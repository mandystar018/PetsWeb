const pet = [
  {
    name: 'Susan',
    type: 'Dog',
    breed: 'Aussie',
    age: 5,
    photo: "img/aussie.jpg"
  },
  {
    name: 'Lexi',
    type: 'Dog',
    breed: 'Dachshund',
    age: 10,
    photo: "img/dachshund.jpg"
  },
  {
    name: 'Rob',
    type: 'Dog',
    breed: 'Golden Retriver',
    age: 4,
    photo: "img/golden.jpg"
  },
  {
    name: 'Cesar',
    type: 'Cat',
    breed: 'persian',
    age: 6,
    photo: "img/persian.jpg"
  },
  {
    name: 'Cris',
    type: 'Dog',
    breed: 'Pug',
    age: 8,
    photo: "img/pug.jpg"
  },
  {
    name: 'Bob',
    type: 'Cat',
    breed: 'tabby',
    age: 5,
    photo: "img/tabby.jpg"
  },
];

let html = '';

for ( let animals in pet) {
  let petsInfo = pet[animals];
  html += `
    <h2>${petsInfo.name}</h2>
    <h3>${petsInfo.type} | ${petsInfo.breed}</h3>
    <p>Age: ${petsInfo.age}</p>
    <img src="${petsInfo.photo}" alt= "${petsInfo.breed}">
  `;
}
document.querySelector('main').insertAdjacentHTML('beforeend', html);

/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/