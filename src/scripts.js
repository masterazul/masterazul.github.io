
        const terminal = document.getElementById('terminal');
        const content = document.getElementById('content');
        const rain = document.getElementById('rain');
        const nameContainer = document.getElementById('name-container');
        let emailCopied = false;

        function showTooltip() {
            console.log("Mouse over detected");
            if (!emailCopied) {
                nameContainer.textContent = "você deseja copiar este email?";
            }
        }

        function hideTooltip() {
            console.log("Mouse out detected");
            if (!emailCopied) {
                nameContainer.textContent = "Matheus Augusto";
            }
        }

        function copyEmail() {
            const email = "ae_augusto33@proton.me";
            navigator.clipboard.writeText(email).then(() => {
                console.log("Email copied");
                emailCopied = true;
                nameContainer.textContent = "email copiado com sucesso";
                setTimeout(() => {
                    nameContainer.textContent = "Matheus Augusto";
                    emailCopied = false;
                }, 2000);
            }).catch(err => {
                console.error('Erro ao copiar email: ', err);
            });
        }

        function getRandomChar() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            return chars.charAt(Math.floor(Math.random() * chars.length));
        }

        function addTerminalLine() {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.textContent = Array.from({ length: 80 }, getRandomChar).join('');
            terminal.appendChild(line);

            if (terminal.children.length > 20) {
                terminal.removeChild(terminal.firstChild);
            }
        }

        function showContent() {
            terminal.style.display = 'none';
            content.style.display = 'flex';
        }

        setInterval(addTerminalLine, 100);
        setTimeout(showContent, 4000);

        const numLetters = 100;
        for (let i = 0; i < numLetters; i++) {
            const letter = document.createElement('div');
            letter.className = 'raindrop';
            letter.textContent = getRandomChar();
            letter.style.left = `${Math.random() * 100}%`;
            letter.style.animationDelay = `${Math.random() * 5}s`;
            rain.appendChild(letter);
        }

        function redirectToPortfolio() {
    document.body.classList.add('rotate-out');
    setTimeout(() => {
        window.location.href = "../public/SOBRE_MIM/resumo.html";
    }, 1000); // Aguarde 1 segundo antes de redirecionar
}

// Adiciona evento de rolagem para ativar o redirecionamento
window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        // Rolagem para baixo
        redirectToPortfolio();
    } else if (event.deltaY < 0) {
        // Rolagem para cima
        redirectToPortfolio();
    }
});
