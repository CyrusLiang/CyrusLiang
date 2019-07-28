$(document).ready(function() {
    console.log("main.js: success");
    
    $('#header').load('https://www.cyrusliang.com/global/header.html #header-bar');
    $('#footer').load('https://www.cyrusliang.com/global/footer.html #footer-bar');

    var index = window.location.pathname.split('/')[1];
    if (!index) {
        $('li.index').addClass('active');
    } else {
        $('li.' + index).addClass('active');
    }
});