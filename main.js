$(document).ready(function(){
    $('.header').height($(window).height());
  })

//   document.addEventListener('DOMContentLoaded', function () {
//     const wrapper = document.querySelector('.scrolling-wrapper');
//     const cards = document.querySelectorAll('.card');
//     let currentIndex = 0;

//     function scrollNext() {
//         currentIndex++;
//         if (currentIndex >= cards.length) {
//             currentIndex = 0;
//         }
//         wrapper.scrollTo({
//             left: cards[currentIndex].offsetLeft,
//             behavior: 'smooth'
//         });
//     }

//     setInterval(scrollNext, 2000); // Scroll every 3 seconds
// });

document.addEventListener('DOMContentLoaded', function() {
    const seeMoreBtn = document.getElementById('see-more');
    const detailsCard = document.getElementById('details-card');
    const closeDetailsBtn = document.getElementById('close-details');

    seeMoreBtn.addEventListener('click', function(event) {
        event.preventDefault();
        detailsCard.style.display = 'block';
    });

    closeDetailsBtn.addEventListener('click', function() {
        detailsCard.style.display = 'none';
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
//     const testimonials = document.querySelector('.testimonials');
//     const speed = 1; // Adjust this value to change the speed of scrolling

//     function animateScroll() {
//         const scrollWidth = testimonials.scrollWidth;
//         const wrapperWidth = testimonialsWrapper.offsetWidth;
//         const scrollDistance = scrollWidth - wrapperWidth;

//         testimonials.style.transition = `transform ${scrollDistance / speed}s linear`;
//         testimonials.style.transform = `translateX(-${scrollDistance}px)`;

//         testimonials.addEventListener('transitionend', () => {
//             testimonials.style.transition = 'none';
//             testimonials.style.transform = 'translateX(0)';
//             requestAnimationFrame(animateScroll);
//         }, { once: true });
//     }

//     requestAnimationFrame(animateScroll);
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
//     const testimonials = document.querySelector('.testimonials');
//     const speed = 0.1; // Adjust this value to change the speed of scrolling

//     function animateScroll() {
//         const scrollWidth = testimonials.scrollWidth;
//         const wrapperWidth = testimonialsWrapper.offsetWidth;
//         const scrollDistance = scrollWidth - wrapperWidth;

//         testimonials.style.transition = `transform ${scrollDistance / speed}s linear`;
//         testimonials.style.transform = `translateX(-${scrollDistance}px)`;

//         testimonials.addEventListener('transitionend', () => {
//             testimonials.style.transition = 'none';
//             testimonials.style.transform = 'translateX(0)';
//             requestAnimationFrame(animateScroll);
//         }, { once: true });
//     }

//     requestAnimationFrame(animateScroll);
// });



// document.addEventListener('DOMContentLoaded', function() {
//     const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
//     const testimonials = document.querySelector('.testimonials');
//     const speed = 0.1; // Adjust this value to change the speed of scrolling

//     function animateScroll() {
//         const scrollWidth = testimonials.scrollWidth;
//         const wrapperWidth = testimonialsWrapper.offsetWidth;
//         const scrollDistance = scrollWidth + wrapperWidth;

//         testimonials.style.transition = `transform ${scrollDistance / speed}s linear`;
//         testimonials.style.transform = `translateX(-${scrollWidth}px)`;

//         testimonials.addEventListener('transitionend', () => {
//             testimonials.style.transition = 'none';
//             testimonials.style.transform = 'translateX(0)';
//             requestAnimationFrame(animateScroll);
//         }, { once: true });
//     }

//     requestAnimationFrame(animateScroll);
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
//     const testimonials = document.querySelector('.testimonials');
//     const speed = 0.1; // Adjust this value to change the speed of scrolling

//     function animateScroll() {
//         const scrollWidth = testimonials.scrollWidth;
//         const wrapperWidth = testimonialsWrapper.offsetWidth;
//         const scrollDistance = scrollWidth / 1;

//         testimonials.style.transition = `transform ${scrollDistance / speed}s linear`;
//         testimonials.style.transform = `translateX(-${scrollDistance}px)`;

//         testimonials.addEventListener('transitionend', () => {
//             testimonials.style.transition = 'none';
//             testimonials.style.transform = 'translateX(0)';
//             requestAnimationFrame(animateScroll);
//         }, { once: true });
//     }

//     requestAnimationFrame(animateScroll);
// });
function scrollLeft() {
    const testimonials = document.querySelector('# movebuttonm');
    testimonials.scrollBy({
        left: -300, // Change 'right' to 'left' and use a negative value for scrolling left
        behavior: 'smooth'
    });
}

function scrollRight() {
    const testimonials = document.querySelector('.testimonials');
    testimonials.scrollBy({
        right: 300, // Keep 'left' and use a positive value for scrolling right
        behavior: 'smooth'
    });
}
function hello(){
    console.log(124);
    const lol = document.getElementById("mover");
    lol.scrollBy({
        left:-600,
        behavior:'smooth'
    })
};
function helloright(){
    console.log(123);
    const heh= document.getElementById("mover");
    heh.scrollBy({
        behavior:"smooth",
        left:300
    })
}






