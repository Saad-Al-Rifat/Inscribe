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


// language 
// document.addEventListener('DOMContentLoaded', function() {
//     const translations = {
//         en: {
//             cardTitle1: '2024 Bangladesh quota reform movement',
//             cardDescription1: 'The protest began in June 2024, in response to the Supreme Court of Bangladesh reinstating a 30% quota for descendants of freedom fighters, reversing the government decision made in response to the 2018 Bangladesh quota reform movement. Students began to feel like they have a limited opportunity based on merit.',
//             cardTitle2: 'An Introduction to the Stock Market: Basics and Beyond',
//             cardDescription2: 'The stock market is a platform where investors buy and sell shares of publicly traded companies. It enables companies to raise capital and offers investors the opportunity to earn returns through stock price increases and dividends. Trading occurs on various exchanges, reflecting market trends and economic conditions.',
//             cardTitle3: 'Paris 2024: A Celebration of Sport and Culture',
//             cardDescription3: 'The 2024 Summer Olympics will take place in Paris from July 26 to August 11. This marks Paris\'s third time hosting the Games, offering a vibrant fusion of sports and culture across the city’s iconic landmarks. Athletes from around the world will compete in a range of events, celebrating athletic prowess and global unity in a historic setting.',
//             cardTitle4: 'Labor Day: Honoring Workers and Their Contributions',
//             cardDescription4: 'Labor Day, observed on the first Monday in September, honors the contributions and achievements of American workers. It marks the unofficial end of summer with parades, picnics, and festivities. The day recognizes the vital role workers play in driving the nation’s progress and celebrates their efforts and dedication.',
//         },
//         bn: {
//             cardTitle1: '২০২৪ বাংলাদেশ কোটা সংস্কার আন্দোলন',
//             cardDescription1: '২০২৪ সালের জুনে শুরু হওয়া প্রতিবাদ, বাংলাদেশের সুপ্রিম কোর্টের ৩০% কোটা পুনর্বহালের বিরুদ্ধে প্রতিক্রিয়া হিসাবে, ২০১৮ সালের বাংলাদেশ কোটা সংস্কার আন্দোলনের পরিপ্রেক্ষিতে সরকারের সিদ্ধান্তকে উল্টানো হয়েছে। ছাত্রদের মেধার ভিত্তিতে সীমিত সুযোগ অনুভূত হতে শুরু করেছে।',
//             cardTitle2: 'স্টক মার্কেটের একটি পরিচিতি: মৌলিক এবং তার বাইরেও',
//             cardDescription2: 'স্টক মার্কেট একটি প্ল্যাটফর্ম যেখানে বিনিয়োগকারীরা পাবলিকলি ট্রেড করা কোম্পানির শেয়ার কেনাবেচা করে। এটি কোম্পানিগুলিকে পুঁজি সংগ্রহ করতে সহায়তা করে এবং বিনিয়োগকারীদের শেয়ার মূল্য বৃদ্ধি এবং ডিভিডেন্ডের মাধ্যমে ফিরতি লাভের সুযোগ প্রদান করে। বিভিন্ন এক্সচেঞ্জে ট্রেডিং ঘটে, যা বাজারের প্রবণতা এবং অর্থনৈতিক পরিস্থিতি প্রতিফলিত করে।',
//             cardTitle3: 'প্যারিস ২০২৪: খেলাধুলা এবং সংস্কৃতির উদযাপন',
//             cardDescription3: '২০২৪ সালের গ্রীষ্মকালীন অলিম্পিক প্যারিসে ২৬ জুলাই থেকে ১১ আগস্ট অনুষ্ঠিত হবে। এটি প্যারিসের তৃতীয়বারের মতো গেমস হোস্ট করা, শহরের আইকনিক ল্যান্ডমার্কগুলির মধ্যে খেলাধুলা এবং সংস্কৃতির একটি জীবন্ত সংমিশ্রণ প্রদান করছে। বিশ্বব্যাপী অ্যাথলেটরা বিভিন্ন ইভেন্টে প্রতিযোগিতা করবে, একটি ঐতিহাসিক সেটিংয়ে অ্যাথলেটিক দক্ষতা এবং বৈশ্বিক ঐক্য উদযাপন করবে।',
//             cardTitle4: 'লেবার ডে: শ্রমিকদের সম্মান এবং তাদের অবদান',
//             cardDescription4: 'লেবার ডে, সেপ্টেম্বর মাসের প্রথম সোমবার উদযাপন করা হয়, আমেরিকান শ্রমিকদের অবদান এবং অর্জনগুলিকে সম্মানিত করে। এটি প্যারেড, পিকনিক এবং উৎসবের সাথে গ্রীষ্মের অপ্রতিরোধ্য শেষ চিহ্নিত করে। এই দিনটি শ্রমিকদের জাতির অগ্রগতিতে গুরুত্বপূর্ণ ভূমিকা পালন করে এবং তাদের প্রচেষ্টা এবং নিষ্ঠা উদযাপন করে।',
//             cardTitle5: '২০২৪ বাংলাদেশ কোটা সংস্কার আন্দোলন',
//             cardDescription5: '২০২৪ সালের জুনে শুরু হওয়া প্রতিবাদ, বাংলাদেশের সুপ্রিম কোর্টের ৩০% কোটা পুনর্বহালের বিরুদ্ধে প্রতিক্রিয়া হিসাবে, ২০১৮ সালের বাংলাদেশ কোটা সংস্কার আন্দোলনের পরিপ্রেক্ষিতে সরকারের সিদ্ধান্তকে উল্টানো হয়েছে। ছাত্রদের মেধার ভিত্তিতে সীমিত সুযোগ অনুভূত হতে শুরু করেছে।',
//             cardTitle6: 'স্টক মার্কেটের একটি পরিচিতি: মৌলিক এবং তার বাইরেও',
//             cardDescription6: 'স্টক মার্কেট একটি প্ল্যাটফর্ম যেখানে বিনিয়োগকারীরা পাবলিকলি ট্রেড করা কোম্পানির শেয়ার কেনাবেচা করে। এটি কোম্পানিগুলিকে পুঁজি সংগ্রহ করতে সহায়তা করে এবং বিনিয়োগকারীদের শেয়ার মূল্য বৃদ্ধি এবং ডিভিডেন্ডের মাধ্যমে ফিরতি লাভের সুযোগ প্রদান করে। বিভিন্ন এক্সচেঞ্জে ট্রেডিং ঘটে, যা বাজারের প্রবণতা এবং অর্থনৈতিক পরিস্থিতি প্রতিফলিত করে।',
//             cardTitle7: 'প্যারিস ২০২৪: খেলাধুলা এবং সংস্কৃতির উদযাপন',
//             cardDescription7: '২০২৪ সালের গ্রীষ্মকালীন অলিম্পিক প্যারিসে ২৬ জুলাই থেকে ১১ আগস্ট অনুষ্ঠিত হবে। এটি প্যারিসের তৃতীয়বারের মতো গেমস হোস্ট করা, শহরের আইকনিক ল্যান্ডমার্কগুলির মধ্যে খেলাধুলা এবং সংস্কৃতির একটি জীবন্ত সংমিশ্রণ প্রদান করছে। বিশ্বব্যাপী অ্যাথলেটরা বিভিন্ন ইভেন্টে প্রতিযোগিতা করবে, একটি ঐতিহাসিক সেটিংয়ে অ্যাথলেটিক দক্ষতা এবং বৈশ্বিক ঐক্য উদযাপন করবে।',
//             cardTitle8: 'লেবার ডে: শ্রমিকদের সম্মান এবং তাদের অবদান',
//             cardDescription8: 'লেবার ডে, সেপ্টেম্বর মাসের প্রথম সোমবার উদযাপন করা হয়, আমেরিকান শ্রমিকদের অবদান এবং অর্জনগুলিকে সম্মানিত করে। এটি প্যারেড, পিকনিক এবং উৎসবের সাথে গ্রীষ্মের অপ্রতিরোধ্য শেষ চিহ্নিত করে। এই দিনটি শ্রমিকদের জাতির অগ্রগতিতে গুরুত্বপূর্ণ ভূমিকা পালন করে এবং তাদের প্রচেষ্টা এবং নিষ্ঠা উদযাপন করে।',
//         }
//     };



//     // Language detection and loading
//     function detectCountry() {
//         fetch('https://ipinfo.io/json?token=YOUR_API_TOKEN')
//             .then(response => response.json())
//             .then(data => {
//                 const countryCode = data.country;
//                 handleCountryDetection(countryCode);
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 loadLanguage('en');
//             });
//     }

//     function handleCountryDetection(countryCode) {
//         const language = (countryCode === 'IN' || countryCode === 'BD') ? 'bn' : 'en';
//         loadLanguage(language);
//     }

//     function loadLanguage(language) {
//         fetch('path/to/your/config.json')
//             .then(response => response.json())
//             .then(config => {
//                 const translations = config.translations;
//                 const contentElements = document.querySelectorAll('[data-key]');
//                 contentElements.forEach(element => {
//                     const key = element.getAttribute('data-key');
//                     element.textContent = translations[language][key] || translations['en'][key];
//                 });
//             })
//             .catch(error => {
//                 console.error('Error loading language:', error);
//             });
//     }

//     detectCountry();
// });