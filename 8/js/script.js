$(function () {
    $('body').addClass('loaded');

    var $video = $('.video')[0],
        playBtn = '.video-play-btn',
        $playBtn = $(playBtn);

    $(document).on('click', playBtn, function () {
        $video.play();
        $playBtn.hide();
    });

    $video.addEventListener('ended', function () {
        $playBtn.show();
    });

    var faq = '.faq',
        faqClose = '.faq__close';

    $(document).on('click', faq, function () {
        $(this).addClass('opened');
    });

    $(document).on('click', faqClose, function (e) {
        e.stopPropagation();

        $(faq).removeClass('opened');
    });
});