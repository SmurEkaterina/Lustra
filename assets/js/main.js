$(document).ready(function() {
    var owl = $("#index-gallery-wrapper");
    owl.owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 3,
        navigation : true,
      //  navContainer: '.index-gallery',
        navigationText : ["",""],
        pagination: false,
        horizontal: true,
        itemsMobile: false,
        itemsTablet: false,
        itemsTabletSmall: false
    });


    $('.js-show-colorbox-img').colorbox();

    shuffleLogos();

    $('#mobile, #mobile-demo').mask("+7 (999) 999-99-99");
});

$(document).on('scroll', function () {
    var scroll = $(window).scrollTop();

    if (scroll > 90) {
        $('.js-show-fixed-navigation').addClass('fixed');
    } else {
        $('.js-show-fixed-navigation').removeClass('fixed');
    }
});

$(document).on('click', '.js-show-timepad-block', function () {
    var name = $(this).data('name'),
        $blockToToggle = $('#' + name),
        iframeHeight = $blockToToggle.find('iframe').height();

    $blockToToggle.animate({height: iframeHeight}, 1500);
    $(this).hide();
});

function shuffleArray(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function shuffleLogos () {
    var logosList = ['1', '2', '3'],
        currentLogo = '',
        logoSrc = 'img/index/lustra-logo-',
        $imgItem = $('#js-index-lustra-logo');
    shuffleArray(logosList);

    $imgItem.attr('src', logoSrc + logosList[0] + '.png').show();
}