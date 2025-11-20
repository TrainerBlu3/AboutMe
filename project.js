$(document).ready(() => {

    $('.project1').mouseenter(() => {
        $('#proj-img1').fadeIn(200);
    });

    $('.project1').mouseleave(() => {
        $('#proj-img1').fadeOut(200);
    });


    $('.project2').mouseenter(() => {
        $('#proj-img2').fadeIn(200);
    });

    $('.project2').mouseleave(() => {
        $('#proj-img2').fadeOut(200);
    });

    $('.project3').mouseenter(() => {
        $('#proj-img3').fadeIn(200);
    });

    $('.project3').mouseleave(() => {
        $('#proj-img3').fadeOut(200);
    });

    $('#proj-img1').mouseenter(() => {
        $('#proj-img1').css('width', '35vw');
    });

    $('#proj-img1').mouseleave(() => {
        $('#proj-img1').css('width', '25vw');
    });

    let typed = new Typed('.project1 .project-content h2 span', {
        strings: ['Minesweeper'], //put data thing for json
        typeSpeed: 50,
        backSpeed: 0,
        loop: false,
        showCursor: false,
    });

    let typed2 = new Typed('.project2 .project-content h2 span', {
        strings: ['Here'],
        typeSpeed: 50,
        backSpeed: 0,
        loop: false,
        showCursor: false,
    });
});




