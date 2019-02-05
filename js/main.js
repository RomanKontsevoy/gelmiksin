// $(document).ready(function() {
//
//     $('.navi .plus').on('click', function() {
//         var $this = $(this),
//             $navi = $this.closest('.navi'),
//             $opened = $navi.find('.opened');
//
//         if ($this.parent().hasClass('opened')) {
//             $opened.removeClass('opened').children('.plus').text('+');
//             return;
//         } else if ($opened.length > 0) {
//             $opened.removeClass('opened').children('.plus').text('+');
//         }
//
//         $this.text('-').parent().addClass('opened');
//     });
//
//     $('.navi').each(function() {
//         $(this).find('.plus').first().click();
//     });
//
//     $('.year').text(new Date().getFullYear());
//
//     $('.slider .plus').on('click', function() {
//         var $this = $(this),
//             $right = $this.closest('.right'),
//             $item = $right.closest('.item');
//
//         if ($right.hasClass('opened')) {
//             $right.removeClass('opened');
//             $this.text('+');
//         } else {
//             $right.addClass('opened');
//             $this.text('-');
//         }
//
//         $right.prev().height($right.outerHeight());
//
//     });
//
//     if ($(window).width() > 1200) {
//         $('.faze li').on('click', faze);
//     } else {
//         $('.faze li').on('click', function() {
//             var $this = $(this),
//                 $plus = $this.children('.plus');
//
//             $this.toggleClass('active');
//             if ($this.hasClass('active')) {
//                 $plus.text('-');
//             } else {
//                 $plus.text('+');
//             }
//         });
//     }
//
//
//
//     $('.slider').slick({
//         slidesToShow: 1,
//         arrows: false,
//         centerMode: true,
//         variableWidth: true,
//         dots: true,
//         slidesToScroll: 1,
//     });
//
//     function faze() {
//         var $f = $('.faze'),
//             $faze = $('.faze li'),
//             $this = $(this),
//             $clone = $this.clone();
//
//             if ($this.hasClass('active')) {
//                 return ;
//             }
//
//             $f.prepend($clone);
//             $faze.removeClass('active');
//             $this.remove();
//             $('.faze li').first().addClass('active').on('click', faze);
//             console.log($faze.first());
//     }
//
// });


function handleCheckedSymptoms() {
    let checked = document.getElementsByClassName('checked');
    const symptoms = document.querySelectorAll('.symptoms__item');
    const button = document.querySelector('.symptoms__button');
    const close = document.querySelectorAll('.result-text>.close');
    const overlay = document.querySelector('.result-text__wrap');
    const overlayAll = document.querySelector('.result-overlay');
    const resultText = document.querySelector('.result-text');
    const resultTextContainer = document.querySelector('.result-text__container');
    const results = [
        'Вероятность того, что вы сейчас заражены, невысока. Вы можете укрепить иммунитет и проходить плановую дегельминтизацию раз в год.',
        'Комбинация Ваших симптомов говорит о высокой вероятности заражения одним из таких видов паразитов: токсоплазмы, аскариды, острицы, цепень или некоторые другие виды. Заражение могло произойти через опасные в плане заражения предметы (мобильный телефон, деньги, обувь), через воду из водопровода, еду без надлежащей термообработки (суши, малосольная рыба, сало, копчености, салаты из сырых овощей), через домашних животных или почву. Вам следует начать дегельминтизацию в кратчайшие сроки и повторять ее не реже, чем раз в год.',
        'При комбинации Ваших симптомов можно с уверенностью утверждать, что вы заражены паразитами. Скорее всего, с Вами живут одновременно несколько видов гельминтов: токсоплазмы, цепни, лямблии, аскариды, анкилостомы, власоглавы, острицы или другие. Заражение могло произойти через опасные в плане заражения предметы (мобильный телефон, деньги, обувь), через воду из водопровода, еду без надлежащей термообработки (суши, малосольная рыба, сало, копчености, салаты из сырых овощей), через домашних животных или почву. Вам необходимо начать дегельминтизацию уже сейчас, пока проблемы со здоровьем не стали необратимыми. Затем повторяйте дегельминтизацию ежегодно.'
    ];

    function toggleChecked() {
        for (let i = 0; i < symptoms.length; i++) {
            symptoms[i].addEventListener('click', function (e) {
                let target = e.target;
                while (target != this) {
                    if (target.classList.contains('symptoms__item') == true) {
                        return
                    }
                    target = target.parentNode;
                }
                if (target.classList.contains('checked')) {
                    target.classList.remove('checked');
                } else {
                    target.classList.add('checked');
                }
                checked = document.getElementsByClassName('checked');
            });
        }
    }

    toggleChecked();

    button.addEventListener('click', function () {
        let inneredText = '';
        switch (true) {
            case checked.length <= 1:
                inneredText = results[0];
                break;
            case checked.length > 1 && checked.length <= 4:
                inneredText = results[1];
                break;
            case checked.length > 4:
                inneredText = results[2];
                break;
        }
        overlay.style.display = 'flex';
        overlayAll.style.display = 'block';
        resultTextContainer.innerText = inneredText;
    });

    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function () {
            overlay.style.display = 'none';
            overlayAll.style.display = 'none';
            resultTextContainer.innerText = '';
        });
    }

    overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
        overlayAll.style.display = 'none';
        resultTextContainer.innerText = '';
    });
    overlayAll.addEventListener('click', function () {
        overlay.style.display = 'none';
        overlayAll.style.display = 'none';
        resultTextContainer.innerText = '';
    });
    resultText.addEventListener('click', function (e) {
        e.stopPropagation();
    })

}

handleCheckedSymptoms();

/* Interactive block */

const parasiteItem = document.querySelectorAll('.interactive__list__item');
const organs = document.querySelectorAll('.interactive-center__wrap>div');

for (let i = 0; i < parasiteItem.length; i++) {
    parasiteItem[i].addEventListener('mouseenter', function (e) {
        let target = e.target;
        let dataNumber = target.getAttribute('data-number');
        while (target != this) {
            if (target.classList.contains('interactive__list__item') == true) {
                return
            }
            target = target.parentNode;
        }
        for (let i = 0; i < parasiteItem.length; i++) {
            parasiteItem[i].classList.remove('active');
        }
        target.classList.add('active');
        for (let i = 0; i < organs.length; i++) {
            if (organs[i].classList.contains('active') == false) {
                organs[i].classList.add('active');
                organs[i].style.zIndex = '';
            }
        }

        switch (+dataNumber) {
            case 1:
                organs[0].classList.remove('active');
                organs[0].style.zIndex = 9;
                organs[0].children[0].style.filter = '';
                break;
            case 2:
                organs[1].classList.remove('active');
                organs[1].style.zIndex = 9;
                break;
            case 3:
                organs[2].classList.remove('active');
                organs[2].style.zIndex = 9;
                break;
            case 4:
                organs[2].classList.remove('active');
                organs[2].style.zIndex = 9;
                organs[3].classList.remove('active');
                organs[3].style.zIndex = 8;
                organs[4].classList.remove('active');
                organs[4].style.zIndex = 7;
                organs[6].classList.remove('active');
                organs[6].style.zIndex = 9;
                break;
            case 5:
                organs[1].classList.remove('active');
                organs[1].style.zIndex = 10;
                organs[2].classList.remove('active');
                organs[2].style.zIndex = 9;
                organs[3].classList.remove('active');
                organs[3].style.zIndex = 8;
                organs[4].classList.remove('active');
                organs[4].style.zIndex = 7;
                organs[6].classList.remove('active');
                organs[6].style.zIndex = 9;
                break;
        }
    });

}

/* ] Interactive block */

$(document).ready(function () {
    var resizedParagraph;

    //запишим в атрибут 'data-total_height оригинальную высоту каждого елемента
    function setHeight() {
        resizedParagraph = $('.review-text');
        for (var i = 0; i < resizedParagraph.length; i++) {
            var current = $(resizedParagraph[i]);
            current.css('height', '290px');
        }
    };
    setHeight();


    function changeHeigth(button) {

        var block = $(button).parent().siblings('.review-text');
        var height = block[0].scrollHeight + 'px';
        var beforeBlock = $(button).parent('.show-btn__wrap');

        if (!block.hasClass('auto_h')) {
            block.css('height', height);
        } else {
            block.css('height', '290px');
        }
        $(button).toggleClass('button180');
        block.toggleClass('auto_h');
        beforeBlock.toggleClass('before-block');
    }

    $('.show-btn__item').on('click', function () {
        changeHeigth(this);
    })

});

/* Init slider on adaptive */

let slider1 = $('.text-rev__wrap');

function initSlider(slider, options) {
    slider.on('init', function () {
        setTimeout(function () {
            slider.addClass('is-ready');
        }, 100);
    });
    slider.not('.slick-initialized').slick(options);
}

function destroySlider(slider) {
    if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
    }
}

function showSlider() {
    var tablet = ($(window).width()) < 1000;
    if (tablet) {
        initSlider(slider1, {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            infinite: true,
            focusOnSelect: true,
            variableWidth: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: true,
                        centerMode: true
                    }
                }
            ]
        });
    } else {
        destroySlider(slider1);
    }
};
showSlider();
$(window).on('resize', showSlider);

/* Change text on Adaptive */

let diagnosticText = document.querySelector('.symptoms-result__tip');

function adaptive() {
    let tablet = ($(window).width());
    if (tablet <= 1171) {
        diagnosticText.innerHTML = 'Отметьте выше симптомы которые вас беспокоят, затем нажмите кнопку “результат”';
    } else {
        diagnosticText.innerHTML = 'Отметьте слева симптомы которые вас беспокоят, затем нажмите кнопку “результат”';
    }
};
adaptive();

(function () {
    window.addEventListener("resize", resizeThrottler, false);
    var resizeTimeout;
    function resizeThrottler() {
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function () {
                resizeTimeout = null;
                adaptive();
            }, 300);
        }
    }
}());

