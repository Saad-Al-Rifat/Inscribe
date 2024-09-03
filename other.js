document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    let darkMode = localStorage.getItem('darkmode');
    console.log("Current dark mode setting:", darkMode);

    const btn = document.getElementById('btn');
    console.log("Dark mode toggle button found:", btn);

    const enableDarkmode = () => {
        console.log("Enabling dark mode");
        document.body.classList.add('Dark-color-pallate');
        const footer = document.querySelector('footer');
        footer.style.backgroundColor = 'rgb(43, 38, 38)'; // Set background color directly
        localStorage.setItem('darkmode', 'active');
    }

    const disableDarkmode = () => {
        console.log("Disabling dark mode");
        document.body.classList.remove('Dark-color-pallate');
        const footer = document.querySelector('footer');
        footer.style.backgroundColor = ''; // Remove background color
        localStorage.setItem('darkmode', 'inactive');
    }

    if (darkMode === 'active') {
        enableDarkmode();
    }

    btn.addEventListener('click', () => {
        darkMode = localStorage.getItem('darkmode');
        console.log("Toggling dark mode, current setting:", darkMode);
        if (darkMode === 'active') {
            disableDarkmode();
        } else {
            enableDarkmode();
        }
    });
});
