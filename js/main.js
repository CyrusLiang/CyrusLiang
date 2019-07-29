$(document).ready(function() {
    console.log("hello!");
    
    $('#header').load('https://www.cyrusliang.com/global/header.html #header-bar');
    var index = window.location.pathname.split('/')[1];
    (!index) ? $('nav .index').addClass('active') : $('nav .' + index).addClass('active');

    $('#footer').load('https://www.cyrusliang.com/global/footer.html #footer-bar');
});