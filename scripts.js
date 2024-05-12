// Fonction pour le défilement fluide des liens de navigation
$(function() {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 72)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Ferme le menu responsive quand un lien de défilement est cliqué
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Active le bouton de défilement en fonction du défilement
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });
});

// Effet de réduction de la barre de navigation lors du défilement
$(document).scroll(function() {
    var navbarCollapse = $('#navbarResponsive');
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
});
