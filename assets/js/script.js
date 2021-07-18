$(document).ready(function() {
    $('#landing-image').hover(function() {
        $('#landing-image').attr('src', './assets/images/Bitmoji/2.png');
    }, function() {
        $('#landing-image').attr('src', './assets/images/Bitmoji/1.png');
    });
});