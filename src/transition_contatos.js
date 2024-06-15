document.addEventListener('DOMContentLoaded', function() {
    var btnBack = document.querySelector('.btn-back');

    // Adiciona um event listener para o clique no botão "Voltar"
    btnBack.addEventListener('click', function(event) {
        // Previne o comportamento padrão do link (não segue imediatamente)
        event.preventDefault();

        // Adiciona uma classe para aplicar uma transição
        document.body.classList.add('page-transition');

        // Aguarda um pequeno intervalo para a transição ser visível
        setTimeout(function() {
            // Redireciona para a URL definida no atributo href do botão
            window.location.href = btnBack.getAttribute('href');
        }, 500); // Ajuste o tempo (em milissegundos) conforme necessário para a transição
    });
});
