const searchInput = document.querySelector('.search');
const divs = document.querySelectorAll('.country');

searchInput.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase();

    divs.forEach (item => {
        item.querySelector('.nameGuide').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display='none')
    })
})