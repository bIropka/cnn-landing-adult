$(document).ready(function () {

    /******************************************************************************************************************
     ******* init scripts
     ******************************************************************************************************************/

    if ($(window).width() < '981'){

        $('header .phone-number').appendTo('nav');
        $('.logo-header').insertBefore('header');
        $('.logo-large').prependTo('.form-consultation');

    } else {

        $('header .phone-number').insertAfter('nav');
        $('.logo-header').prependTo('header .wrapper-inner');
        $('.logo-large').insertBefore('.form-consultation');

    }

    $(window).resize(function(){

        if ($(window).width() < '981'){

            $('header .phone-number').appendTo('nav');
            $('.logo-header').insertBefore('header');
            $('.logo-large').prependTo('.form-consultation');

        } else {

            $('header .phone-number').insertAfter('nav');
            $('.logo-header').prependTo('header .wrapper-inner');
            $('.logo-large').insertBefore('.form-consultation');

        }

    });

    /******************************
     ****** scroll scripts ********
     ******************************/

    $('a[href^="#"]').click(function(){

        if ($(window).width() < '981'){
            $('nav').removeClass('active');
        }

        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 100}, 1000);

        return false;
    });

    if ($(window).scrollTop() < $('#why-china').offset().top - 300) {
        $('nav ul li a').removeClass('active');
    }
    else if ($(window).scrollTop() < $('#about-us').offset().top - 100) {
        $('nav ul li a').removeClass('active');
        $('nav ul li:nth-child(1) a').addClass('active');
    }
    else if ($(window).scrollTop() < $('#all-steps').offset().top - 100) {
        $('nav ul li a').removeClass('active');
        $('nav ul li:nth-child(2) a').addClass('active');
    }
    else if ($(window).scrollTop() < $('#reviews').offset().top - 100) {
        $('nav ul li a').removeClass('active');
        $('nav ul li:nth-child(3) a').addClass('active');
    }
    else if ($(window).scrollTop() < $('#questions').offset().top - 100) {
        $('nav ul li a').removeClass('active');
        $('nav ul li:nth-child(4) a').addClass('active');
    }
    else if ($(window).scrollTop() < $('#contacts').offset().top - 100) {
        $('nav ul li a').removeClass('active');
        $('nav ul li:nth-child(5) a').addClass('active');
    }

    $(window).scroll(function () {

        if ($(window).scrollTop() < $('#why-china').offset().top - 100) {
            $('nav ul li a').removeClass('active');
        }
        else if ($(window).scrollTop() < $('#about-us').offset().top - 200) {
            $('nav ul li a').removeClass('active');
            $('nav ul li:nth-child(1) a').addClass('active');
        }
        else if ($(window).scrollTop() < $('#all-steps').offset().top - 200) {
            $('nav ul li a').removeClass('active');
            $('nav ul li:nth-child(2) a').addClass('active');
        }
        else if ($(window).scrollTop() < $('#reviews').offset().top - 200) {
            $('nav ul li a').removeClass('active');
            $('nav ul li:nth-child(3) a').addClass('active');
        }
        else if ($(window).scrollTop() < $('#questions').offset().top - 200) {
            $('nav ul li a').removeClass('active');
            $('nav ul li:nth-child(4) a').addClass('active');
        }
        else if ($(window).scrollTop() < $('#contacts').offset().top - 200) {
            $('nav ul li a').removeClass('active');
            $('nav ul li:nth-child(5) a').addClass('active');
        } else {
            $('nav ul li a').removeClass('active');
            $('nav ul li:nth-child(6) a').addClass('active');
        }

    });



    /******************************************************************************************************************
     ******* clicks scripts
     ******************************************************************************************************************/

    $(document).click(function(event) {

        if (!$(event.target).closest(".custom-select").length) {
            $('.custom-select').removeClass('active');
        }

        if (!$(event.target).closest(".tab-control div").length) {
            $('.tooltip').removeClass('active');
        }

    });

    $('.custom-select .current-value').click(function() {

        $(this).parent().siblings('.custom-select').removeClass('active');
        $(this).parent().toggleClass('active');

    });

    $('.custom-select ul li').click(function() {

        var value = $(this).html();

        $(this).parents('.custom-select').find('input').attr('value', value);
        $(this).parents('.custom-select').find('.current-value span').html(value);

        $(this).parents('.custom-select').removeClass('active');

    });

    $('.tab-control div').click(function() {

        $('.tab-control div.active').removeClass('active');
        $(this).addClass('active');

        if ($(window).width() > '981'){

            var index = $(this).index();

            $('.tab-items .item.active').removeClass('active');
            $('.tab-items .item').eq(index).addClass('active');

            var target = $('.tab-items');
            $('html, body').animate({scrollTop: $(target).offset().top - 100}, 1000);

        } else {

            if($(window).width() - $(this).offset().left < 280) {
                $(this).find('.tooltip').css({'left' : 'auto', 'right' : 0});
            } else {
                $(this).find('.tooltip').css({'right' : 'auto', 'left' : 0});
            }

            $(this).siblings().find('.tooltip').removeClass('active');
            $(this).find('.tooltip').toggleClass('active');

        }

    });

    $('.accordion-header').click(function() {
        $(this).parent().siblings('li').find('.accordion-item').slideUp();
        $(this).parent().siblings('li').find('.accordion-header').removeClass('active');

        $(this).siblings('.accordion-item').slideToggle();
        $(this).toggleClass('active');

    });

    $('.burger').click(function() {

        $(this).parents('nav').toggleClass('active');

    });

    $('.to-form').click(function() {

        $('.window').fadeIn();

    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-order')).length) $('.window').fadeOut();
        if ($target.hasClass('close-marker')) $('.window').fadeOut();
    });

    $('.form-order button[type="submit"]').click(function() {
        if(!document.getElementById("email-ok").checked) {
            $('.error-message').fadeIn();
            return false;
        } else {
            $('.error-message').fadeOut();
        }
    });


});