/**
 * The functions below will run as soon as DOM is loaded
 */
(function main() {
    // Hide modal card at start
    window.addEventListener('DOMContentLoaded', (event) => {
        document.getElementsByClassName('modal-card')[0].style.display = 'none';
    });

    // Hide title-section and show modal card
    document.getElementById('more').addEventListener('click', () => {
        document.getElementsByClassName('title-section')[0].style.display = 'none';
        document.querySelector('.modal-card').classList.remove('animate__zoomOutUp');
        document.querySelector('.modal-card').classList.add('animate__slideOutUp');
        document.getElementsByClassName('modal-card')[0].style.display = '';
    });

    // Hide modal card and show explore title
    document.getElementById('close').addEventListener('click', () => {
        document.querySelector('.modal-card').classList.remove('animate__slideOutUp');
        document.querySelector('.title-section').classList.remove('animate__fadeInLeftBig');
        document.querySelector('.title-section').classList.add('animate__fadeIn');
        document.querySelector('.modal-card').classList.add('animate__zoomOutUp');
        document.getElementsByClassName('modal-card')[0].style.display = 'none';
        document.getElementsByClassName('title-section')[0].style.display = '';
    });
})();
