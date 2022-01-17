//Request 1
//click to change text (banner's tagline)
const headline = document.querySelector('.headline');

headline.addEventListener('click', () => {
    headline.textContent = 'Have a good time!';
});

//Request 2
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const close_bnt = document.querySelector('.close-bnt');

burger.addEventListener('click', () => {
    burger.style.display = 'none';
    navbar.removeAttribute('style');
});

close_bnt.addEventListener('click', () => {
    navbar.style.display = 'none';
    burger.removeAttribute('style');
});


//Request 3
const action_button = document.querySelector('.button');

action_button.addEventListener('click', () => {
    const second_col = document.querySelector('.second-col-container');
    
    if (second_col.style.display === 'none') {
        second_col.removeAttribute('style');
    } else {
        second_col.style.display = 'none';
    }
});