// Dropdown menu functionality
const li = document.getElementById("dropdown-parent");
const ul = document.getElementById("dropdown-children");
const arrow = document.getElementById('arrow');

li.addEventListener('click', () => {
    if (ul.classList.contains('dropdown-children')) {
        ul.classList.add("dropdown-children2");
        ul.classList.remove("dropdown-children");
        arrow.style.transform = 'rotate(90deg)';
    } else {
        ul.classList.add("dropdown-children");
        ul.classList.remove("dropdown-children2");
        arrow.style.transform = 'rotate(360deg)';
    }
});

li.addEventListener('mouseover', () => {
    ul.classList.add("dropdown-children2");
    ul.classList.remove("dropdown-children");
    arrow.style.transform = 'rotate(90deg)';
});

li.addEventListener('mouseout', () => {
    ul.classList.add("dropdown-children");
    ul.classList.remove("dropdown-children2");
    arrow.style.transform = 'rotate(360deg)';
});

// Carousel functionality
const imgContainer = document.getElementById('crousel');
const allImg = imgContainer.querySelectorAll('div');
const indicators = document.querySelectorAll('.container span');

let moveAmount = 0;

// Function to update carousel and indicators
function updateCarousel() {
    imgContainer.style.transform = `translateX(${-moveAmount * 800}px)`;
    indicators.forEach((indicator, index) => {
        indicator.style.backgroundColor = index === moveAmount ? 'white' : 'rgba(255, 255, 255, 0.5)';
    });
}

// Function to move carousel right
function scrollRight() {
    moveAmount = (moveAmount + 1) % allImg.length;
    updateCarousel();
}

// Function to move carousel left
function scrollLeft() {
    moveAmount = (moveAmount - 1 + allImg.length) % allImg.length;
    updateCarousel();
}

// Function to go to a specific image
function goToImage(index) {
    moveAmount = index;
    updateCarousel();
}

// Event listeners for indicators
document.getElementById('img1').addEventListener('click', () => goToImage(0));
document.getElementById('img2').addEventListener('click', () => goToImage(1));
document.getElementById('img3').addEventListener('click', () => goToImage(2));
document.getElementById('img4').addEventListener('click', () => goToImage(3));

// Set interval for automatic scrolling
setInterval(scrollRight, 2500);

// Attach event listeners to arrows
document.querySelector('.container i:nth-of-type(1)').addEventListener('click', scrollLeft); // Left arrow
document.querySelector('.container i:nth-of-type(2)').addEventListener('click', scrollRight); // Right arrow

// Dark toggle mode
let darkMode = localStorage.getItem('darkmode');
const btn = document.getElementById('btn');

const enableDarkmode = () => {
    document.body.classList.add('Dark-color-pallate');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('Dark-color-pallate');
    localStorage.setItem('darkmode', 'inactive'); // Changed to 'inactive'
}

// Apply dark mode if it was previously set to 'active'
if (darkMode === 'active') {
    enableDarkmode();
}

// Toggle dark mode on button click
btn.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkmode');
    if (darkMode === 'active') {
        disableDarkmode();
    } else {
        enableDarkmode();
    }
});
