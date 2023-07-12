import { definesLanguage } from './global'; // хук для определения языка
import __CONFIG_GLOBAL from '../../../../site.config.json'; // глобальный файл конфигурации сайта
import __NEWS_JSON from './json/news.json'; // подключение объекта со всеми статичными переводами для новостей
import 'jquery-rss'; // подключение плагина для подгрузки rss новостей

let rssUrl = isbeta();

function isbeta(name) {

    let url = name; // путь к файлу - если у вас другой - то его и указываете
    let pathname = location.pathname.split('/');
    for (let i = 0; i < pathname.length; i++) {
        if (pathname[i] == 'beta') url = '/beta' + name; // если мы на бете, то добавляем подддомен 'beta' к пути
    }
    return url;
}

(function getnewsrss() {
    let langData = definesLanguage(),
        baseDir = langData == __CONFIG_GLOBAL.defaultLanguage ? '' : '../';
    langData = (langData === 'zh') ? 'cn' : langData;
    var html = '';
    $.ajax({
        url: isbeta('/rssrequest.php'),
        method: 'GET',
        data: {
            lang: langData
        },
        type: 'json',
        success: function success(data) {

            var res = JSON.parse(data);
            var img
            for (var i = 0; i < res.length; i++) {
                // var author = res[i].author != '' ? textLang[langData].authors + ': ' + res[i].author : '',
                //     date = res[i].date != '' ? textLang[langData].date + ': ' + res[i].date : '';
                var author = res[i].author != '' ? res[i].author : '',
                    date = res[i].date != '' ? res[i].date : '';
                img = res[i].img_url != '' ? res[i].img_url : isbeta('/assets/images/news.svg');


                html += '\
		<div class="news-item">\
			<a class="news-wrapper-inner" target="_blank" href="' + res[i].link + '" >\
                    <img class="news-item__img" src="' + img + '">\
                    <div class="news-item__content">\
                        <div class="news-text-wrapper">\
                            <div class="news-item__text news-item__author">' + author + '</div>\
                            <div class="news-item__text news-item__date">' + date + '</div>\
                        </div>\
                        <div class="news-item__title h3-title" data-dot>' + res[i].title + '</div>\
                        <div class="read-more"><svg class="arrow-show-more" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <g clip-path="url(#clip0)">\
                            <path d="M1 6.99992C0.447717 6.99992 1.15878e-06 7.44763 0 7.99992C-1.15877e-06 8.5522 0.447713 8.99992 0.999998 8.99992L1 6.99992ZM21.7071 8.70707C22.0976 8.31655 22.0976 7.68338 21.7071 7.29286L15.3432 0.928881C14.9526 0.538356 14.3195 0.538355 13.9289 0.928878C13.5384 1.3194 13.5384 1.95257 13.9289 2.34309L19.5858 7.99996L13.9289 13.6568C13.5384 14.0473 13.5384 14.6805 13.9289 15.071C14.3194 15.4615 14.9526 15.4615 15.3431 15.071L21.7071 8.70707ZM0.999998 8.99992L21 8.99996V6.99996L1 6.99992L0.999998 8.99992Z" fill="#1DB2AD"/>\
                            </g>\
                            <defs>\
                            <clipPath id="clip0">\
                            <rect width="22" height="16" fill="white"/>\
                            </clipPath>\
                            </defs>\
                            </svg></div>\
                    </div>\
			</a>\
		</div>\
		';
            }


            $('.news-slider').html(html);

            $('.news-slider').on('init', onSliderInit);
            $('.news-slider').on('afterChange', onSliderInit);

            $('.news-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                // centerMode: true,
                // variableWidth: true,
                // touchThreshold: 10,
                dots: true,
                arrows: true,
                appendDots: '.dots-wrapper_news-header',
                appendArrows: '.arrow-slider-wrapper_news',
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
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1160,
                        settings: {
                            variableWidth: false,
                        }
                    },
                    {
                        breakpoint: 901,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            variableWidth: false,
                        }
                    },
                    {
                        breakpoint: 761,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            fade: true,
                            variableWidth: false,
                        }
                    }
                ]
            });

            $('[data-dot]').dotdotdot();
            $(window).resize(function() {
                $('[data-dot]').dotdotdot();
            });
            function onSliderInit(event, slick) {
                var countSlide = $(this).siblings('.dots-wrapper').find('.slick-dots li:last-child button').text();
                var activeSlide = $(this).siblings('.dots-wrapper').find('.slick-dots .slick-active button').text();

                $(this).parents('.wrapper').find('.current-slide').text(activeSlide);
                $(this).parents('.wrapper').find('.number-of-slides').text(countSlide);
            };


        },
        error: function error() {
            console.log('error');
        }
    });

})();
