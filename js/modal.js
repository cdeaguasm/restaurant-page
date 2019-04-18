let images = document.querySelectorAll('.gallery-img');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal-img');
let button = document.querySelector('#modal-button');

images.forEach(e => {
    e.addEventListener('click', function(e) {
        modal.classList.toggle("modal-open");
        let src = e.target.src;
        img.setAttribute('src', src);
    });
})

button.addEventListener('click', function() {
    modal.classList.toggle("modal-open");
});