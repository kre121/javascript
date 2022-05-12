const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["cat.webp", "dog.jpeg", "rabbit.webp", "turtle.jpeg"];
myButton.addEventListener('click', changeImage);

function changeImage(){
    let randomIndex = images[Math.floor(Math.random() * images.length)];
    console.log*("Hello from script file!");
    image.src = "images/"+[randomIndex];
}