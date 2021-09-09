$(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            if ($('#buttonOnTop').is(':hidden')) {
                $('#buttonOnTop').css({opacity : 1}).fadeIn('slow');
            }
        } else { 
            $('#buttonOnTop').stop(true, false).fadeOut('fast'); 
        }
    });
    $('#buttonOnTop').on('click', function() {
        $('html, body').stop().animate({scrollTop : 0}, 300);
    });