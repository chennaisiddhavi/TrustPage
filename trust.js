// trust.js

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const showSlides = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });

    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
};

setInterval(showSlides, 3000); // Change image every 3 seconds

    document.addEventListener("DOMContentLoaded", function() {
        const seeMoreButton = document.getElementById('see-more');
        const detailsCard = document.getElementById('details-card');
        const closeDetailsButton = document.getElementById('close-details');
    
        seeMoreButton.addEventListener('click', function() {
            detailsCard.style.display = 'block';
        });
    
        closeDetailsButton.addEventListener('click', function() {
            detailsCard.style.display = 'none';
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const seeMoreButton = document.getElementById('see-more');
        const detailsCard = document.getElementById('details-card');
        const closeDetailsButton = document.getElementById('close-details');
        
        seeMoreButton.addEventListener('click', function() {
            detailsCard.style.display = 'block';
        });
        
        closeDetailsButton.addEventListener('click', function() {
            detailsCard.style.display = 'none';
        });
    });
    
    