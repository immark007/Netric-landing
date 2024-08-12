$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function(){
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.3');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('.home_title',{
        origin: 'left',
        duration: 1000,
        distance: '10%'
    });

    ScrollReveal().reveal('.conteudo h2', {
        origin: 'left',
        duration: 1000,
        distance: '10%'
    });

    ScrollReveal().reveal('.conteudo span', {
        origin: 'right',
        duration: 1000,
        distance: '10%'
    });

    ScrollReveal().reveal('.construct_title',{
        origin: 'left',
        duration: 1000,
        distance: '10%'
    });

    ScrollReveal().reveal('.keep-title',{
        origin: 'right',
        duration: 1000,
        distance: '10%'
    });

    ScrollReveal().reveal('.construct_image',{
        origin: 'right',
        duration: 1000,
        distance: '10%'
    });

    ScrollReveal().reveal('.keep-image',{
        origin: 'left',
        duration: 1000,
        distance: '10%'
    });
});