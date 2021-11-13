const slide = document.querySelector('.about-me')
let text = document.createElement('p');


slide.addEventListener('click', () => {
    slide.classList.add('active');
    text.className = 'open-text';
    text.innerText = `I am 20 yers old and I am a student. Besides I am hardworking and responsible person who likes improving my own skills. Except programming I love travelling and sports. My favorite kind of sport is football.`
    slide.append(text);
})