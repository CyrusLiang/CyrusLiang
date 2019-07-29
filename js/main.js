$(document).ready(function($) {
    console.log("hello!");
    $('#header').load('https://www.cyrusliang.com/global/header.html #header-bar');
    $('#footer').load('https://www.cyrusliang.com/global/footer.html #footer-bar');

    var path = window.location.pathname.split("/").pop();
    if (path == '') path = './';
    console.log(path);
    var target = $('nav a[href="' + path + '"]');
    target.addClass('current');
});