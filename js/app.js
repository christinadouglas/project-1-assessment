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

//Feedback
//Great idea to break out the code that colors the text into a separate function!
//The only way to improve this code that I see would be to use event delegation.  Put the plus and minus buttons in one parent
//container div and then write an event listener on that parent.  Then you can test if event.target is the plus button or the 
//minus button and adjust the number accordingly
