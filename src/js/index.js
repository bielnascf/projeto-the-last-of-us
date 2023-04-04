



const carouselButtons = document.querySelectorAll('.button');
const images = document.querySelectorAll('.image');

carouselButtons.forEach((button, indice) => {
    button.addEventListener('click', () => {    
        disableSelectedButton();

        selectButtonCarousel(button);

        hideActiveImage();

        showBackgroudImage(indice);
    })
})

function showBackgroudImage(indice) {
    images[indice].classList.add('active');
}

function selectButtonCarousel(button) {
    button.classList.add('selected');
}

function hideActiveImage() {
    const imagemAtiva = document.querySelector('.active');
    imagemAtiva.classList.remove('active');
}

function disableSelectedButton() {
    const botaoSelecionado = document.querySelector('.selected');
    botaoSelecionado.classList.remove('selected');
}


