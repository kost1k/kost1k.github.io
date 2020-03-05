$(function () {
    var PageScroll = {
        init: function () {
            this._currentPosition = 0;
            this._$scrollable = $(document.scrollingElement || document.documentElement);
            this._disabledScrollCn = 'scroll-disabled';
        },
        disable: function () {
            this._currentPosition = window.pageYOffset || document.documentElement.scrollTop;
            this._$scrollable.addClass(this._disabledScrollCn);
            this._$scrollable.css('margin-top', -this._currentPosition);
        },
        enable: function () {
            this._$scrollable
                .removeClass(this._disabledScrollCn)
                .css('margin-top', '')
                .scrollTop(this._currentPosition);
        }
    };

    PageScroll.init();

    $('body').addClass('loaded');

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

        PageScroll.disable();

        $(this).addClass('opened');
        $faq.addClass('opened');
        $faqTitle.css({
            top: faqTitleTop,
            right: faqTitleRight
        });
    });

    $(document).on('click', faqClose, function () {
        PageScroll.enable();

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
        rulesPopupClose = '.rules-popup__close, .rules__end',
        rulesRead = localStorage.getItem('rulesRead');

    if ($rulesPopup.length && !rulesRead) {
        PageScroll.disable();
        $rulesPopup.addClass('showed');
    }

    $(document).on('click', rulesPopupClose, function () {
        localStorage.setItem('rulesRead', true);

        PageScroll.enable();
        $rulesPopup.removeClass('showed');
    });
});