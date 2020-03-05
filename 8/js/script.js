$(function () {
    $('body').addClass('loaded');

    var $video = $('.video'),
        playBtn = '.video-play-btn',
        $playBtn = $(playBtn);

    $(document).on('click', playBtn, function () {
        $video[0].play();
        $playBtn.hide();
    });

    $video.on('ended', function () {
        $playBtn.show();
    });

    var $faq = $('.faq'),
        faqShow = '.faq-show',
        faqClose = '.faq__close',
        $faqTitle = $('.faq__title'),
        $faqList = $('.faq__list'),
        $faqItemNum = $('.faq__item-num');

    $(document).on('click', faqShow, function () {
        var screenWidth = $(window).width(),
            faqItemNumWidth = $faqItemNum.width(),
            faqListOffset = $faqList[0].getBoundingClientRect(),
            faqListOffsetTop = faqListOffset.top,
            faqListOffsetLeft = faqListOffset.left,
            faqTitleHeight = $faqTitle.height(),
            faqTitleTop = faqListOffsetTop - faqTitleHeight - 65,
            faqTitleRight = screenWidth - (faqListOffsetLeft - screenWidth) - (faqItemNumWidth + 20) - 100;

        console.log(faqListOffsetTop)

        $(this).addClass('opened');
        $faq.addClass('opened');
        $faqTitle.css({
            top: faqTitleTop,
            right: faqTitleRight
        });
    });

    $(document).on('click', faqClose, function () {
        $faq.removeClass('opened');
        $(faqShow).removeClass('opened');
        $faqTitle.css({
            top: '',
            right: ''
        });
    });

    $(document).on('click', '.jury-application-btn', function () {
        $(this).hide();
        $('.jury-thx-text').show();
    });

    $(document).on('click', '.player-card__info-show', function () {
        $('.ability-popup').show();
    });

    $(document).on('click', '.ability-popup__close', function () {
        $('.ability-popup').hide();
    });

    var $rulesPopup = $('.rules-popup')
        rulesPopupClose = '.rules-popup__close, .rules__end';

    if ($rulesPopup.length) {
        $rulesPopup.addClass('showed');
    }

    $(document).on('click', rulesPopupClose, function () {
        $rulesPopup.removeClass('showed');
    });
});