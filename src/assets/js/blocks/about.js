import __CONFIG_GLOBAL from '../../../../site.config.json'; // глобальный файл конфигурации сайта

/**
 * Запуск перебора чисел
 */
(function animateNumber() {
    if ($('.counter-list').length) {
        $('.counter-list').viewportChecker({
            callbackFunction() {
                setTimeout(() => {
                    let comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
                    $('.indicator-number_1').animateNumber({
                        number: $('.indicator-number_1').data('indicator-number'),
                        numberStep: comma_separator_number_step,
                    }, {
                        easing: 'swing',
                        duration: __CONFIG_GLOBAL.javascript.about.duration,
                    });
                    $('.indicator-number_2').animateNumber({
                        number: $('.indicator-number_2').data('indicator-number'),
                        numberStep: comma_separator_number_step,
                    }, {
                        easing: 'swing',
                        duration: __CONFIG_GLOBAL.javascript.about.duration,
                    });
                    $('.indicator-number_3').animateNumber({
                        number: $('.indicator-number_3').data('indicator-number'),
                        numberStep: comma_separator_number_step,
                    }, {
                        easing: 'swing',
                        duration: __CONFIG_GLOBAL.javascript.about.duration,
                    });
                    $('.indicator-number_4').animateNumber({
                        number: $('.indicator-number_4').data('indicator-number'),
                        numberStep: comma_separator_number_step,
                    }, {
                        easing: 'swing',
                        duration: __CONFIG_GLOBAL.javascript.about.duration,
                    });
                    $('.indicator-number_5').animateNumber({
                        number: $('.indicator-number_5').data('indicator-number'),
                        numberStep: comma_separator_number_step,
                    }, {
                        easing: 'swing',
                        duration: __CONFIG_GLOBAL.javascript.about.duration,
                    });
                }, 700);
            },
        });
    }
})();
(function addedHistorySlider() {
    if( $('div').is('.history-wrapper') ) {
        $('.history-wrapper').on('init', onSliderInit);
        $('.history-wrapper').on('afterChange', onSliderInit);
        $('.history-wrapper').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            appendArrows: '.arrow-slider-wrapper_history',
            appendDots: '.dots-wrapper_history-header',
            infinite: false,
            prevArrow: '<button type="button" class="slick-prev slick-main-arrow slick-prev-main">' +
                '<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M22.75 10.1251C23.3713 10.1251 23.875 9.62139 23.875 9.00006C23.875 8.37875 23.3713 7.87506 22.75 7.87506V10.1251ZM0.454505 8.20453C0.0151662 8.64386 0.0151641 9.35617 0.454504 9.79552L7.61395 16.9549C8.05328 17.3944 8.7656 17.3944 9.20493 16.9549C9.64428 16.5156 9.64428 15.8034 9.20494 15.364L2.84099 9.00003L9.20497 2.63607C9.6443 2.19674 9.6443 1.48442 9.20497 1.04508C8.76563 0.605742 8.05332 0.60574 7.61398 1.04508L0.454505 8.20453ZM22.75 7.87506L1.25 7.87502L1.25 10.125L22.75 10.1251V7.87506Z" fill="#ABB3BD"/>\n' +
                '<path d="M22.75 10.1251C23.3713 10.1251 23.875 9.62139 23.875 9.00006C23.875 8.37875 23.3713 7.87506 22.75 7.87506V10.1251ZM0.454505 8.20453C0.0151662 8.64386 0.0151641 9.35617 0.454504 9.79552L7.61395 16.9549C8.05328 17.3944 8.7656 17.3944 9.20493 16.9549C9.64428 16.5156 9.64428 15.8034 9.20494 15.364L2.84099 9.00003L9.20497 2.63607C9.6443 2.19674 9.6443 1.48442 9.20497 1.04508C8.76563 0.605742 8.05332 0.60574 7.61398 1.04508L0.454505 8.20453ZM22.75 7.87506L1.25 7.87502L1.25 10.125L22.75 10.1251V7.87506Z" fill="white" fill-opacity="0.2"/>\n' +
                '</svg>' +
                '</button>',
            nextArrow: '<button type="button" class="slick-next slick-main-arrow slick-next-main">' +
                '<svg width="48" height="18" viewBox="0 0 48 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M1.11905 7.88085C0.501014 7.88085 2.53405e-08 8.38187 0 8.9999C-2.53406e-08 9.61793 0.501014 10.1189 1.11905 10.1189V7.88085ZM47.6722 9.79119C48.1092 9.35417 48.1092 8.64563 47.6722 8.20861L40.5506 1.08704C40.1136 0.650024 39.4052 0.650024 38.9681 1.08704C38.5311 1.52406 38.5311 2.23259 38.9681 2.66962L45.2984 8.9999L38.9681 15.3302C38.5311 15.7672 38.5311 16.4757 38.9681 16.9128C39.4052 17.3498 40.1136 17.3498 40.5506 16.9128L47.6722 9.79119ZM1.11905 10.1189H46.881V7.88085H1.11905V10.1189Z" fill="#ABB3BD"/>\n' +
                '<path d="M1.11905 7.88085C0.501014 7.88085 2.53405e-08 8.38187 0 8.9999C-2.53406e-08 9.61793 0.501014 10.1189 1.11905 10.1189V7.88085ZM47.6722 9.79119C48.1092 9.35417 48.1092 8.64563 47.6722 8.20861L40.5506 1.08704C40.1136 0.650024 39.4052 0.650024 38.9681 1.08704C38.5311 1.52406 38.5311 2.23259 38.9681 2.66962L45.2984 8.9999L38.9681 15.3302C38.5311 15.7672 38.5311 16.4757 38.9681 16.9128C39.4052 17.3498 40.1136 17.3498 40.5506 16.9128L47.6722 9.79119ZM1.11905 10.1189H46.881V7.88085H1.11905V10.1189Z" fill="white" fill-opacity="0.2"/>\n' +
                '</svg>' +
                '</button>',
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 761,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
        function onSliderInit(event, slick) {
            var countSlide = $(this).siblings('.dots-wrapper').find('.slick-dots li:last-child button').text();
            var activeSlide = $(this).siblings('.dots-wrapper').find('.slick-dots .slick-active button').text();

            $(this).parents('.wrapper').find('.current-slide').text(activeSlide);
            $(this).parents('.wrapper').find('.number-of-slides').text(countSlide);
        };
    }
})();
