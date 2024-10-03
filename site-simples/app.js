'use strict';

const switcher = document.querySelector('.btn');

// Define o texto inicial do botão com base no tema atual
if (document.body.classList.contains('dark-theme')) {
    switcher.textContent = "Claro";
} else {
    switcher.textContent = "Escuro";
}

switcher.addEventListener('click', function() {
    // Alterna a classe do tema
    document.body.classList.toggle('dark-theme');

    // Atualiza o texto do botão com base no tema atual
    if (document.body.classList.contains('dark-theme')) {
        this.textContent = "Claro";
    } else {
        this.textContent = "Escuro";
    }

    console.log('nome da classe atual: ' + document.body.className);
});
