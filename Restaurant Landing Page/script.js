
let mainImage = document.getElementById('food');
let food1 = document.getElementById('food1');
let food2 = document.getElementById('food2');
let food3 = document.getElementById('food3');
let food4 = document.getElementById('food4');

food1.addEventListener('click', () => {
    mainImage.src = 'images/food1.png';
})

food2.addEventListener('click', () => {
    mainImage.src = 'images/food2.png';
})

food3.addEventListener('click', () => {
    mainImage.src = 'images/food3.png';
})

food4.addEventListener('click', () => {
    mainImage.src = 'images/food4.png';
})