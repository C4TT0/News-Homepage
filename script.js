const openBtn = document.getElementById('open-btn');
const closeBtn =document.getElementById('close-btn');

openBtn.addEventListener('click', () => {
    document.querySelector('nav').style.display = 'flex';
})

closeBtn.addEventListener('click', () => {
    document.querySelector('nav').style.display = 'none';
})

document.querySelectorAll('.links ul li a').forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('nav').style.display = 'none';
    })
});