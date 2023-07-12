(function addedSliderLicenses() {
    if( $('div').is('.licenses-list') ) {
        $('.licenses-list').on('init', onSliderInit);
        $('.licenses-list').on('afterChange', onSliderInit);
        $('.licenses-list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            appendDots: '.dots-wrapper_licenses-header',
            appendArrows: '.arrow-slider-wrapper_licenses',
            prevArrow: '<button type="button" class="slick-prev slick-main-arrow slick-prev-main">' +
                '<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M22.75 10.1253C23.3714 10.1253 23.875 9.62163 23.875 9.0003C23.875 8.37899 23.3714 7.8753 22.75 7.8753V10.1253ZM0.45452 8.20477C0.0151815 8.64411 0.0151794 9.35641 0.454519 9.79576L7.61396 16.9552C8.0533 17.3946 8.76561 17.3946 9.20495 16.9552C9.64429 16.5159 9.64429 15.8036 9.20496 15.3642L2.841 9.00027L9.20498 2.63631C9.64432 2.19698 9.64432 1.48466 9.20498 1.04533C8.76565 0.605986 8.05333 0.605985 7.614 1.04532L0.45452 8.20477ZM22.75 7.8753L1.25002 7.87526L1.25001 10.1253L22.75 10.1253V7.8753Z" fill="#EAEBF5"/>\n' +
                '</svg>' +
                '</button>',
            nextArrow: '<button type="button" class="slick-next slick-main-arrow slick-next-main">' +
                '<svg width="48" height="18" viewBox="0 0 48 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M1.11906 7.88116C0.50103 7.88116 1.52841e-05 8.38218 1.52588e-05 9.00021C1.52334e-05 9.61823 0.50103 10.1193 1.11906 10.1193V7.88116ZM47.6722 9.7915C48.1092 9.35448 48.1092 8.64594 47.6722 8.20892L40.5506 1.08734C40.1136 0.650329 39.4052 0.650329 38.9681 1.08734C38.5311 1.52436 38.5311 2.2329 38.9681 2.66992L45.2984 9.00021L38.9681 15.3305C38.5311 15.7675 38.5311 16.476 38.9681 16.9131C39.4052 17.3501 40.1136 17.3501 40.5506 16.9131L47.6722 9.7915ZM1.11906 10.1193H46.881V7.88116H1.11906V10.1193Z" fill="#EAEBF5"/>\n' +
                '</svg>' +
                '</button>',
            infinite: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 851,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
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
})()
