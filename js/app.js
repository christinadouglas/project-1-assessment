const msg = document.querySelector('.display-msg');
const add = document.querySelector('.add');
const sub = document.querySelector('.sub');
const num = document.querySelector('.num');

let number = 0;
msg.innerText = number;

add.addEventListener('click', e => {
    number += Number(num.value);
    console.log(number);
    msg.innerText = number;
    red()
})

sub.addEventListener('click', e => {
    number -= Number(num.value);
    console.log(number);
    msg.innerText = number;
    red()
})

function red() {
    if(number < 0) {
        msg.style.color = 'red'
    } else {
        msg.style.color = 'black' 
    }
};