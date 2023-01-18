let elqunt = document.querySelector('.quantity');
let elFullPrice = document.querySelector('.fullPrice');
let elFullPriceAlert = document.querySelector('.alert')
let fullPrice = Number(0);
console.log(typeof fullPrice)
let a = 0;
let c = 0;
let currency;
const price = document.querySelector('.price');


{
let buttonPlus = document.querySelector('.button-plus');
    buttonPlus.addEventListener('click', () => {
        a = a + 1
        elqunt.innerHTML = a;
        fullPrice = c * a / priceCurrenc;
        elFullPrice.innerHTML = 'Загальна сума: ' + fullPrice.toFixed(2);
        console.log('plus',fullPrice);
        if ( a < 1){
            elFullPriceAlert.innerHTML = 'Добавте хоча б одну кількість товару';
        }

        else if ( a => 1){
            elFullPriceAlert.innerHTML = '';
        }
    });
}

{
let buttonMinus = document.querySelector('.button-minus');
    buttonMinus.addEventListener('click', () =>{
        a = a - 1;
        elqunt.innerHTML = a;
        fullPrice = c * a / priceCurrenc;
        elFullPrice.innerHTML = 'Загальна сума: ' + fullPrice.toFixed(2);
        if (a < 0){
            elqunt.innerHTML = 0;
            a = 0;
            alert('Не може бути відємна кількість товару')
        }

        if ( a < 1 && c > 0){
            elFullPriceAlert.innerHTML = 'Добавте хоча б одну кількість товару';
        }

        else if ( a => 1 && c == 0){
            elFullPriceAlert.innerHTML = '';
        }
    }); 

};

price.addEventListener('change', (e) =>{
    c = e.target.value;
    console.log(c);
    fullPrice = c * a / priceCurrenc;
    elFullPrice.innerHTML = 'Загальна сума: ' + fullPrice.toFixed(2);
    if ( a < 1){
        elFullPriceAlert.innerHTML = 'Добавте хоча б одну кількість товару';
    }

    else if ( a => 1){
        elFullPriceAlert.innerHTML = '';
    }
});

let priceCurrenc = 1;


let buttonUah = document.querySelector('.uah');
    buttonUah.addEventListener('click', () => {
        priceCurrenc = 1;
        fullPrice = c * a / priceCurrenc;
        elFullPrice.innerHTML = 'Загальна сума: ' + fullPrice.toFixed(2);
        console.log('click uah',priceCurrenc);
    });

let buttonUsd = document.querySelector('.usd');
    buttonUsd.addEventListener('click', () => {
        priceCurrenc = 41;
        fullPrice = c * a / priceCurrenc;
        elFullPrice.innerHTML = 'Загальна сума: ' + fullPrice.toFixed(2);
        console.log('click usd',priceCurrenc);
    });

let buttonEur = document.querySelector('.eur');
    buttonEur.addEventListener('click', () => {
        priceCurrenc = 39.64
        fullPrice = c * a / priceCurrenc;
        elFullPrice.innerHTML = 'Загальна сума: ' + fullPrice.toFixed(2);
        console.log(priceCurrenc);
    });

let buttonPln = document.querySelector('.pln');
    buttonPln.addEventListener('click', () => {
        priceCurrenc = 8.40;
        fullPrice = c * a / priceCurrenc;
        elFullPrice.innerHTML = 'Загальна сума: ' + fullPrice.toFixed(2);
        console.log(priceCurrenc);
    });

console.log(priceCurrenc);
console.log(a);
console.log('Кількість', elqunt);

