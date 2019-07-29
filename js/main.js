$(function() {
    console.log('hello!');
    $('#header').load('https://www.cyrusliang.com/global/header.html #header-bar');
    $('#footer').load('https://www.cyrusliang.com/global/footer.html #footer-bar');

    var url = window.location.href;
    // url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    // url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    url = url.substr(url.lastIndexOf("/") + 1);
    
    if (url == '') url = './';
    $('nav li').each(function() {
        var href = $(this).find('a').attr('href');
        if(url == href) $(this).addClass('active');
    });
});