$(function() {
    console.log("document");
    $('#header').load('https://www.cyrusliang.com/global/header.html #header-bar');
    $('#footer').load('https://www.cyrusliang.com/global/footer.html #footer-bar');
});
$(window).on("load", function() {
    console.log("window");
    var path = window.location.pathname.split("/").pop();
    if (path == '') path = './';
    console.log(path);
    $('nav a[href="' + path + '"]').addClass('current');
});