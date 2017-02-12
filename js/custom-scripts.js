$(document).ready(function () {

    /******************************************************************************************************************
     ******* init scripts
     ******************************************************************************************************************/

    /******************************
     ****** scroll scripts ********
     ******************************/

    $('a[href^="#"]').click(function(){

        if ($(window).width() < '981'){
            $('.burger').removeClass('active');
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

        var index = $(this).index();

        $('.tab-control div.active').removeClass('active');
        $(this).addClass('active');

        $('.tab-items .item.active').removeClass('active');
        $('.tab-items .item').eq(index).addClass('active');

    });

    $('.accordion-header').click(function() {

       $(this).siblings('.accordion-item').slideToggle();

       $(this).parent().siblings('li').find('.accordion-item').slideUp();

    });



    /******************************************************************************************************************
     ******* slider scripts
     ******************************************************************************************************************/


});