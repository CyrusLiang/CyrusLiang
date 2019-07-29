function loadStuff() {
    console.log('loadStuff');
    $('#header').load('https://www.cyrusliang.com/global/header.html #header-bar');0
    $('#footer').load('https://www.cyrusliang.com/global/footer.html #footer-bar');
}

function doStuff() {
    console.log('doStuff');
    var path = window.location.pathname.split("/").pop();
    if (path == '') {
        path = './';
    }
    var target = $('nav a[href="' + path + '"]');

    target.addClass('current');
}

$(document).ready(function() {
    console.log("hello!");
    loadStuff();
    doStuff();
});