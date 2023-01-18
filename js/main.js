let elqunt = document.querySelector('.quantity');
let elFullPrice = document.querySelector('.fullPrice');
let a = 0;
const price = document.querySelector('.price');

{
    price.addEventListener('change', updatePrice)
    function updatePrice(e) {
        let c;
        c = e.target.value;
        elFullPrice.innerHTML = 'Загальна сума: ' + c * a;

    }

}

{
let buttonPlus = document.querySelector('.button-plus');
    buttonPlus.addEventListener('click', () => {
        a = a + 1
        elqunt.innerHTML = a;
    });
}

{
let buttonMinus = document.querySelector('.button-minus');
    buttonMinus.addEventListener('click', () =>{
        a = a - 1;
        elqunt.innerHTML = a;
        if (a < 0){
            elqunt.innerHTML = 0;
            a = 0;
            alert('Не може бути відємна кількість товару')
        }
    }); 

};


console.log(a);
console.log('Кількість', elqunt);

