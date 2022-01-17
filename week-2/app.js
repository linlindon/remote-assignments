//Request 1
//click to change text (banner's tagline)
const headline = document.querySelector('.headline');

headline.addEventListener('click', () => {
    headline.textContent = 'Have a good time!';
});

//Request 2
const burger = document.querySelector('.burger');
const burger_navbar = document.querySelector('.burger-navbar');
const close_bnt = document.querySelector('.close-bnt');
const large_navbar = document.querySelector('.large-navbar');

burger.addEventListener('click', () => {
    burger.style.display = 'none';
    //移除dispear讓navbar出現
    burger_navbar.classList.toggle('disapear');
});

close_bnt.addEventListener('click', () => {
    //加回dispear讓navbar消失
    burger_navbar.classList.toggle('disapear');
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