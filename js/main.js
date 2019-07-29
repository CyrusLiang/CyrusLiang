function loadStuff() {
    console.log('loadStuff');

    $('#header').load('https://www.cyrusliang.com/global/header.html #header-bar');

    $('#footer').load('https://www.cyrusliang.com/global/footer.html #footer-bar');
    _callback();
}

function doStuff() {
    console.log('doStuff');
    var index = window.location.pathname.split('/')[1];
    if (!index) {
        $('nav .index').addClass('active');
    } else {
        $('nav .' + index).addClass('active');
    }
}

$(document).ready(function() {
    console.log("hello!");
    
    loadStuff();

    doStuff();
});