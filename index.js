const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photo = ['one.jpeg', 'two.jpeg', 'three.jpeg', 'four.jpeg', 'five.jpeg'];
let i = 0;

next.addEventListener('click', () => {
    i++;
    if (i > photo.length-1) {
        i=0;
    }

    document.querySelector('#testimonials').src=photo[i];
})

back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photo.length-1;
    }

    document.querySelector('#testimonials').src=photo[i];
})

