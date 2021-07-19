$(document).ready(function() {
    $('#landing-image').hover(function() {
        $('#landing-image').attr('src', './assets/images/Bitmoji/2.png');
    }, function() {
        $('#landing-image').attr('src', './assets/images/Bitmoji/1.png');
    });



    let navList = [];
    $('#nav a').each(function(i) {
        let thisLink = $(this);
        let thisId = thisLink.attr('href');
        let thisTarget = $(thisId);

        navList.push({
            'anchor': thisLink,
            'id': thisId,
            'target': thisTarget
        });

        thisLink.on('click', function(e) {
            $('#nav .active').each(function(i) {
                $(this).removeClass('active');
            })
            $(thisLink).addClass('active');
            e.preventDefault();
            $('html, body').animate({
                scrollTop: thisTarget.offset().top
            }, 0);
        })

    })

    $(document).on('scroll', function(e) {
        $.each(navList, function(e, elem) {
            let place = elem.target[0].getBoundingClientRect();
            let anchor = elem.anchor[0];
            if (place.top < window.innerHeight && place.bottom > 0) {
                history.pushState({}, '', elem.id);

                $('#nav .active').each(function(i) {
                    $(this).removeClass('active');
                })
                $(anchor).addClass('active');

                return false;
            }
        })
    })


    $(document).scroll(function() {
        if ($(document).scrollTop() > 430) {
            $('#navigation-reactive').removeClass('navigation-reactive');
            $('#navigation-reactive').addClass('sticky-nav');
        } else {
            $('#navigation-reactive').addClass('navigation-reactive');
            $('#navigation-reactive').removeClass('sticky-nav');
        }
    })
});