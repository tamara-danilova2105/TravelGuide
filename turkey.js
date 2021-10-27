
const pictures = document.querySelectorAll('.pictures');

const back = document.querySelector('#back');
const next = document.querySelector('#next');

const backTwo = document.querySelector('#backTwo');
const nextTwo = document.querySelector('#nextTwo');

const photo = ['myphoto1.jpg', 'myphoto2.jpg', 'myphoto4.jpg', 'myphoto5.jpg', 'myphoto6.jpg'];
const photoTwo = ['GAL1.jpg', 'GAL2.jpg', 'GAL3.jpg', 'GAL4.jpg', 'GAL5.jpg', 'GAL6.jpg'];
let i = 0;

// баннер анимация

let text = ' Стамбул и Каппадокия';
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


pictures.forEach (item => {
    item.addEventListener ('mouseover', () => {
        removeFocus();
        item.classList.add('new');
    })
})

removeFocus = () => {
    pictures.forEach(item => {
        item.classList.remove('new')
    })
}

next.addEventListener('click', () => {
    i++;
    if (i > photo.length-1) {
        i = 0;
    }

    document.querySelector('#myphoto').src=photo[i];
})

back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photo.length-1;
    }

    document.querySelector('#myphoto').src=photo[i];
})

//слайд Каппадокия

nextTwo.addEventListener('click', () => {
    i++;
    if (i > photoTwo.length-1) {
        i = 0;
    }

    document.querySelector('#myphotoTwo').src=photoTwo[i];
})

backTwo.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photoTwo.length-1;
    }

    document.querySelector('#myphotoTwo').src=photoTwo[i];
})



