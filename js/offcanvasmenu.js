$('.hamburger-menu, .link').click(function () {
    $('body').hasClass('menu-open') ? ($('body').removeClass('menu-open')) : ($('body').addClass('menu-open'));
});