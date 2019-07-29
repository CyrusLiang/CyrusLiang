$(document).ready(function() {
    console.log("main.js: success");
    
    $('#header').load('https://www.cyrusliang.com/global/header.html #header-bar');
    var index = window.location.pathname.split('/')[1];
    try {
        $('li.' + index).addClass('active');
    }
    catch(err) {
        $('li.index').addClass('active');
    }

    $('#footer').load('https://www.cyrusliang.com/global/footer.html #footer-bar');
});