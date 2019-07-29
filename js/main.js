$(function() {
    console.log('hello!');
    $('#header').load('https://www.cyrusliang.com/global/header.html #header-bar');
    $('#footer').load('https://www.cyrusliang.com/global/footer.html #footer-bar');
    
    var path = window.location.pathname.split('/').pop();
    if (path == '') path = './';
    $('nav a[href="' + path + '"]').css({'color':'#004', 'font-weight':'bold'});
});