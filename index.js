const img = document.querySelector(".slider-image");

    const imageSources = ["pexels-alexandra-maria-318236.jpg", "city-3577655_1920.jpg", "close-up-of-clothes.webp"];
    let currentImageIndex = 0;

    function changeImage() {
        currentImageIndex++;
        if (currentImageIndex >= imageSources.length) {
            currentImageIndex = 0;
        }
        img.src = imageSources[currentImageIndex];
    }
    const imageInterval = setInterval(changeImage, 1000);