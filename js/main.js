let elqunt = document.querySelector('.quantity');
let elFullPrice = document.querySelector('.fullPrice');
let elFullPriceAlert = document.querySelector('.alert');
let fullPrice = Number(0);
let a = 0;
let c = 0;
let currency;
let price = document.querySelector('.price');


let inAdminMenu = document.querySelector('.inAdminMenu');
    inAdminMenu.addEventListener('click', () => {
        document.querySelector('.adminMenu').style.display = 'block';
    });

let enterPassword = document.querySelector('.enterPassword');
    enterPassword.addEventListener('change', (ev) => {
        if ( ev.target.value == 1111)
        {
            enterPassword.style.display = 'none';
            enterPrice.style.display = 'block';
        }

        if ( ev.target.value != 1111){
            elFullPriceAlert.innerHTML = 'Не вірний пароль';
        }
    });

let enterPrice = document.querySelector('.enterPrice');
let enterPriceOutAdmin = 0;
    enterPrice.addEventListener('change', (ev) => {
        enterPriceOutAdmin = ev.target.value;
        if (enterPriceOutAdmin > 0){
            c = ev.target.value
            price.innerHTML = c;
            document.querySelector('.adminMenu').style.display = 'none';
        }

        else if (enterPriceOutAdmin <= 0){
            elFullPriceAlert.innerHTML = 'Ведіть суму більше нуля';
        }

    })
    

{
let buttonPlus = document.querySelector('.button-plus');
    buttonPlus.addEventListener('click', () => {
        a = a + 1;
        elqunt.innerHTML = a;
        calcTotalAmount();
        FullPriceAlert()
        console.log('plus',fullPrice);
    });
};

{
let buttonMinus = document.querySelector('.button-minus');
    buttonMinus.addEventListener('click', () =>{
        a = a - 1;
        elqunt.innerHTML = a;
        calcTotalAmount();
        FullPriceAlert()
    }); 

};

// price.addEventListener('change', (e) =>{
//     c = e.target.value;
//     console.log(c);
//     calcTotalAmount();
//     FullPriceAlert()
// });

function FullPriceAlert() {
    if ( a < 1 && c > 0){
        elFullPriceAlert.innerHTML = 'Добавте хоча б одну кількість товару';
    }

    if (a < 0){
        elqunt.innerHTML = 0;
        a = 0;
        fullPrice = 0;
        elFullPriceAlert.innerHTML = 'Не може бути відємна кількість товару';
    }

    if (a > 0 && c > 1){
        elFullPriceAlert.innerHTML = '';
    }
};

//-----------вибір валюти ---------

let priceCurrenc = 1;
let buttonUah = document.querySelector('.uah');
    buttonUah.addEventListener('click', () => {
        priceCurrenc = 1;
        calcTotalAmount();
        console.log('click uah',priceCurrenc);
    });

let buttonUsd = document.querySelector('.usd');
    buttonUsd.addEventListener('click', () => {
        priceCurrenc = 41;
        calcTotalAmount();
        console.log('click usd',priceCurrenc);
    });

let buttonEur = document.querySelector('.eur');
    buttonEur.addEventListener('click', () => {
        priceCurrenc = 39.64
        calcTotalAmount();
        console.log(priceCurrenc);
    });

let buttonPln = document.querySelector('.pln');
    buttonPln.addEventListener('click', () => {
        priceCurrenc = 8.40;
        calcTotalAmount();
        console.log(priceCurrenc);
    });

function calcTotalAmount() {
    fullPrice = c * a / priceCurrenc;
    elFullPrice.innerHTML = 'Загальна сума: ' + fullPrice.toFixed(2);
}

console.log(priceCurrenc);
console.log(a);
console.log('Кількість', elqunt);

