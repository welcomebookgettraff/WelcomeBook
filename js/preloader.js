document.addEventListener('DOMContentLoaded', function () {
    let preloader = document.querySelector('.preloader');
    
    preloader.addEventListener('animationend', function () {
        preloader.style.display = 'none';
    });
    
    setTimeout(function () {
        preloader.style.display = 'none';
    }, 1000); 
});
