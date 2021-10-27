// баннер анимация

let text = ' Нью-Йорк, США';
let a = 0;
let speed = 100;

function type () {
    if (a < text.length) {
        document.querySelector('h1').textContent += text.charAt(a);
        a ++;
        setTimeout(type, speed);
    }
}

type();

// to do list


const items = document.querySelectorAll('.toDoAdded');
const btn = document.querySelector('.btn')


items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('toDoCompleted')
    })

    item.addEventListener('dblclick', function(){
        item.classList.remove('toDoCompleted')
    })


});


// калькулятор

const btnСalculate = document.querySelector('#btnСalculate');

btnСalculate.addEventListener('click', calculateAmount);

const buttonSouvenir = document.querySelector("#addSouvenir");
buttonSouvenir.addEventListener("click", showSouvenir);

const buttonExpenses = document.querySelector("#addExpenses");
buttonExpenses.addEventListener("click", showExpenses);

function showSouvenir(e) {
    e.preventDefault(); 
    souvenir.style.display = "block";
}

function showExpenses(e) {
    e.preventDefault();
    expenses.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault();
    const flight = Number(document.querySelector('#flight').value);
    const hotel = Number (document.querySelector('#hotel').value);
    const people = document.querySelector('#people').value;
    const limit = Number(document.querySelector('#limit').value);
    const day = document.querySelector('#day').value;


    if (people==='') {
        Swal.fire('заполните "количество человек"')
    }

    if (day==='') {
        Swal.fire('заполните "количество дней"')
    }

    const souvenir = Number(document.querySelector('#souvenir').value);
    const expenses = Number (document.querySelector('#expenses').value);
    const visa = document.querySelector('#visa').checked;

    const activities1 = document.querySelector('#activities1').checked;
    const activities2 = document.querySelector('#activities2').checked;
    const activities3 = document.querySelector('#activities3').checked;
    const activities4 = document.querySelector('#activities4').checked;
    const activities5 = document.querySelector('#activities5').checked;

    let totalflight = flight;
    let hotelPerPeson = hotel / people;
    let food = limit * day;
    let souvenirValue = souvenir;
    let vizaNeed = visa * 12000;
    let expensesValue = (flight + hotel/people + limit*day + souvenir) * expenses;
    let totalSum =  totalflight + hotelPerPeson + food + souvenirValue + expensesValue + vizaNeed;

    let activitiesSum = activities1*40 + activities2*25 + activities3*25 + activities4*25 + activities5*25;

    totalSum = totalSum.toFixed(2);

    document.querySelector("#showTotalrub").textContent = totalSum;
    document.querySelector("#showTotaldol").textContent = activitiesSum;


}