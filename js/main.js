function loadStuff() {
    console.log('loadStuff');
    $('#header').load('https://www.cyrusliang.com/global/header.html #header-bar');0
    $('#footer').load('https://www.cyrusliang.com/global/footer.html #footer-bar');
}

function doStuff() {
    console.log('doStuff');
    var url = window.location.pathname;
    var urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/,''));
    $('nav a').each(function() {
        if(urlRegExp.test(this.href.replace(/\/$/,''))){
            $(this).addClass('current');
        }
    });
    var index = url.split('/')[1];
    $('nav li.' + index).addClass('current');
}

$(document).ready(function() {
    console.log("hello!");
    loadStuff();
    doStuff();
});