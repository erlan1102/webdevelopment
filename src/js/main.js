
$(document).ready(function () {
    $('ul.works__menu').on('click', 'li:not(works__list_active)', function() {
        $(this).addClass('works__list_active').siblings().removeClass('works__list_active')
            .closest('div.works__tabs').find('div.works__content').removeClass('works__content_active').eq($(this).index()).addClass('works__content_active');
    });
    //karusel na saite

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        dotsContainer: '#carousel-custom-dots',
        loop:true,
        margin:30,
        autoplay:true,
        responsive:{
            1200:{

            },
            576:{
                items:2
            }
        }
    });

// Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

    $('.owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });


    ///maps
    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [42.878982, 74.595075],
            zoom: 17
        });
        var myIcon = DG.icon({
            iconUrl: 'https://icon-library.com/images/local-map-icon/local-map-icon-2.jpg',
            iconRetinaUrl: 'my-icon@2x.png',
            iconSize: [38, 95],
        });
        DG.marker([42.878982, 74.595075],{icon: myIcon}).addTo(map).bindPopup('IT-Run Academy');
    });
    $('.pricing__btn').on('click', function() {
        $('.overlay').fadeIn('slow');
        $('.overlay__form').addClass('overlay__form_active')
    });

    $('.overlay__close').on('click', function() {
        $('.overlay').fadeOut('slow')
        $('.overlay__form').removeClass('overlay__form_active');
        $('.overlay__thanks').removeClass('overlay__thanks_active')
        } );

    $('.overlay__btn').on('click', function (event) {
        event.preventDefault();
        $('.overlay__form').removeClass('overlay__form_active');
        $('.overlay__thanks').addClass('overlay__thanks_active')
    });
    $('#tel').inputmask("+\\9\\96 (999) 99-99-99")
});
