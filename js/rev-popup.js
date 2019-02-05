
const reviewPopupBtn = document.querySelector(".review-popup-btn");
const thanksPopupBtn = document.querySelectorAll(".thanks-popup-btn");
const closeReviewPopup = document.querySelectorAll(".review-popup-close");
const closeThanksPopup = document.querySelectorAll(".thanks-popup-close");
const revPop = document.querySelector(".review-popup");
const thPop = document.querySelector(".thanks-popup");
let naviInput = document.querySelector('.navi__input');

for (let i = 0; i < closeReviewPopup.length; i++) {
    closeReviewPopup[i].addEventListener("click", function () {
        revPop.classList.remove("show");
    });
}

for (let i = 0; i < closeThanksPopup.length; i++) {
    closeThanksPopup[i].addEventListener("click", function () {
        thPop.classList.remove("show");
    });
}

// reviewPopupBtn.addEventListener("click", function () {
//     revPop.classList.add("show");
// });

for (let i = 0; i < naviInput.length; i++) {
    naviInput[i].addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            if (!this.value) {
                this.style.boxShadow = 'inset 0 0 7px red';
                this.placeholder = 'Введите отзыв!';
                console.dir(naviInput);
            } else {
                thPop.classList.add("show");
                this.style.boxShadow = '';
                this.placeholder = 'Добавить отзыв';
                this.value = '';
            }
        }
    });
}

for(let j_ = 0; j_ < thanksPopupBtn.length; j_++) {
    (function(){
        let j = j_;
        thanksPopupBtn[j].addEventListener("click", function () {
            let naviInput = document.querySelectorAll('.navi__input');

            if (!naviInput[j].value) {
                naviInput[j].style.boxShadow = 'inset 0 0 7px red';
                naviInput[j].placeholder = 'Введите отзыв!';
                console.dir(naviInput[j]);
            } else {
                thPop.classList.add("show");
                naviInput[j].style.boxShadow = '';
                naviInput[j].placeholder = 'Добавить отзыв';
                naviInput[j].value = '';
            }
            console.log(j);
        });
    })();
}
