let btnBack = document.querySelector('.btn__gallery-left');
let btnNext = document.querySelector('.btn__gallery-right');
let firstNum = document.getElementById('first__slide-number');
let secondNum = document.getElementById('second__slide-number');

btnBack.addEventListener('click', function(){
    firstNum.innerText = '01';
});

btnNext.addEventListener('click', function(){
    firstNum.innerText = '02';
});

