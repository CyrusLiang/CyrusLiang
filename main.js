$(document).ready(function() {
    console.log("main.js: success");
    var index = window.location.pathname.split('/')[1];
    if (!index) {
        $('li.index').addClass('active');
    } else {
        $('li.' + index).addClass('active');
    }
});