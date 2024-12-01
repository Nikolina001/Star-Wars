
const images = [
    { src: "Slike/1Home/Gallery/Asoka.jpg", name: "Rosario Dawson" },
    { src: "Slike/1Home/Gallery/Sabine.jpg", name: "Natasha Bordizzo" },
    { src: "Slike/1Home/Gallery/Hera.jpg", name: "Elizabeth Winstead" },
    { src: "Slike/1Home/Gallery/Anakin.jpg", name: "Hayden Christensen" },
    { src: "Slike/1Home/Gallery/Bejlon.jpg", name: "Ray Stevenson" },
];

let currentIndex = 0; 


function loadImages() {
    const container = document.getElementById('image-container');
    container.innerHTML = ''; 
    
    for (let i = -1; i <= 1; i++) {
        const index = (currentIndex + i + images.length) % images.length;
        const imageInfo = images[index];

        const img = document.createElement('img');
        img.src = imageInfo.src;
        img.className = i === 0 ? 'main-image' : 'small-image';

        container.appendChild(img);

     
        if (i === 0) {
            const nameDiv = document.createElement('div');
            nameDiv.className = 'image-name';
            nameDiv.textContent = imageInfo.name;
            container.appendChild(nameDiv);
        }
    }
}


function moveLeft() {
    currentIndex = (currentIndex + 1) % images.length; 
    loadImages();
}


function moveRight() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    loadImages();
}



window.onload = loadImages;
