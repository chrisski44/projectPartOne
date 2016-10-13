    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 750);
        }
    });
//Shoutout to this dude not making me include a plugin to do the simple menu scroll
//https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
