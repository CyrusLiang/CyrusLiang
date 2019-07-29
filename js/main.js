function loadStuff(_callback) {
    $('#header').load('https://www.cyrusliang.com/global/header.html #header-bar');

    $('#footer').load('https://www.cyrusliang.com/global/footer.html #footer-bar');
    _callback();
}

function doStuff() {
    var index = window.location.pathname.split('/')[1];
    (!index) ? $('nav .index').addClass('active') : $('nav .' + index).addClass('active');
}

$(document).ready(function() {
    console.log("hello!");
    
    loadStuff(function() {
        console.log('I\'m fully loaded!');
    });

    doStuff();
});