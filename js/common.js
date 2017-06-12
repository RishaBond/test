$(function() {

    $("#my-menu").mmenu({
        extensions:['widescreen', 'effect-menu-slide', 'theme-white'],
        offCanvas: {
            position: 'left'
        }
    });
    var api=$('#my-menu').data('mmenu');
    api.bind('opened', function() {
        $('.hamburger').addClass('is-active');
    }).bind('closed', function() {
        $('.hamburger').removeClass('is-active');
    });

});
