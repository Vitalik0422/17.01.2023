let elqunt = document.querySelector('.quantity');
let elFullPrice = document.querySelector('.fullPrice');
let elFullPriceAlert = document.querySelector('.alert')
let a = 0;
let c = 0;

const price = document.querySelector('.price');


price.addEventListener('change', (e) =>{
        c = e.target.value;
        console.log(c);
        elFullPrice.innerHTML = 'Загальна сума: ' + c * a;
        if ( a < 1){
            elFullPriceAlert.innerHTML = 'Добавте хоча б одну кількість товару';
        }

        else if ( a => 1){
            elFullPriceAlert.innerHTML = '';
        }
});


{
let buttonPlus = document.querySelector('.button-plus');
    buttonPlus.addEventListener('click', () => {
        a = a + 1
        elqunt.innerHTML = a;
        elFullPrice.innerHTML = 'Загальна сума: ' + c * a;
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
        elFullPrice.innerHTML = 'Загальна сума: ' + c * a;
        if (a < 0){
            elqunt.innerHTML = 0;
            a = 0;
            alert('Не може бути відємна кількість товару')
        }

        if ( a < 1){
            elFullPriceAlert.innerHTML = 'Добавте хоча б одну кількість товару';
        }

        else if ( a => 1){
            elFullPriceAlert.innerHTML = '';
        }
    }); 

};
console.log(a);
console.log('Кількість', elqunt);

