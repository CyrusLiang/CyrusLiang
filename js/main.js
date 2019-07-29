$(document).ready(function() {
    console.log("main.js: success");
    
    $('#header').load('https://www.cyrusliang.com/global/header.html #header-bar');
    var index = window.location.pathname.split('/')[1];
    console.log(index);
    if (!index) {
        $('li.index').addClass('active');
        console.log("active");
    } else {
        $('li.' + index).addClass('active');
        console.log("active");
    }

    $('#footer').load('https://www.cyrusliang.com/global/footer.html #footer-bar');
});