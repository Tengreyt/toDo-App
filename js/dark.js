document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.dark-mode');
    const whiteModeToggle = document.querySelector('.white-mode');

    // Check if dark mode is enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
        enableDarkMode();
        localStorage.setItem('darkMode', 'enabled');
    });

    whiteModeToggle.addEventListener('click', () => {
        disableDarkMode();
        localStorage.setItem('darkMode', 'disabled');
    });

    function enableDarkMode() {
        document.body.classList.add('dark-theme');
        document.querySelectorAll('.card').forEach(card => card.classList.add('dark-theme'));
        document.querySelectorAll('.btn-primary').forEach(btn => btn.classList.add('dark-theme'));
        document.querySelectorAll('.btn-action').forEach(btn => btn.classList.add('dark-theme'));
        document.querySelectorAll('.empty-list').forEach(el => el.classList.add('dark-theme'));
        document.querySelectorAll('.empty-list__title').forEach(el => el.classList.add('dark-theme'));
        document.getElementById('form').forEach(el => el.classList.add('dark-theme'))
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-theme');
        document.querySelectorAll('.card').forEach(card => card.classList.remove('dark-theme'));
        document.querySelectorAll('.btn-primary').forEach(btn => btn.classList.remove('dark-theme'));
        document.querySelectorAll('.btn-action').forEach(btn => btn.classList.remove('dark-theme'));
        document.querySelectorAll('.empty-list').forEach(el => el.classList.remove('dark-theme'));
        document.querySelectorAll('.empty-list__title').forEach(el => el.classList.remove('dark-theme'));
    }
});
