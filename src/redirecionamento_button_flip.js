// evento de clique no botão
        document.querySelector('.floating-button').addEventListener('click', function(event) {
            event.preventDefault(); // Previne o redirecionamento imediato

            // Adiciona a classe de animação à página
            document.body.classList.add('wipe-out');

            // Redireciona para a nova página após a animação
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 1000); // Tempo deve ser igual à duração da animação
        });