let btnOpen = document.querySelector('span');
let input = document.querySelector('input');

btnOpen.addEventListener('click', () => {
    window.open(input.value, '_top');
});