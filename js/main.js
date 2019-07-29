$(document).ready(function() {
    console.log("main.js: success");
    
    $('#header').load('https://www.cyrusliang.com/global/header.html #header-bar');
    var index = window.location.pathname.split('/')[1];
    try {
        console.log('try');
        $('li.' + index).addClass('active');
    }
    catch(err) {
        console.log('err');
        $('li.index').addClass('active');
    }

    $('#footer').load('https://www.cyrusliang.com/global/footer.html #footer-bar');
});