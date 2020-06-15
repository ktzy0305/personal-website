import counterUp from './counter.js'

$(document).ready(function () {
    new WOW().init();
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: false,
                },
                768: {
                    items: 2,
                    nav: false,
                    loop: false,
                },
                1000: {
                    items: 3,
                    nav: false,
                    loop: false,
                }
            }
        }
    );

    var el = document.getElementsByClassName('counter')
    Array.prototype.forEach.call(el, element =>{
        // Start counting, do this on DOM ready or with Waypoints.
        counterUp( element, {
            duration: 1000,
            delay: 16,
        } )
    })
});