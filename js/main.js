$(function () {
    console.log('hello!');
    $('#header').load('https://www.cyrusliang.com/global/header.html #header-bar');
    $('#footer').load('https://www.cyrusliang.com/global/footer.html #footer-bar');

    $('nav a').each(function () {
        console.log(window.location.pathname);
        if ($(this).attr("href") == window.location.pathname) {
            $(this).attr("id", "active");
        }
    });
});