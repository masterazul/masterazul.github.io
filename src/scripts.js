
        const terminal = document.getElementById('terminal');
        const content = document.getElementById('content');
        const rain = document.getElementById('rain');
        const nameContainer = document.getElementById('name-container');
        const cta = document.querySelector('.intro .cta');
        const destino = cta ? cta.getAttribute('href') : 'public/SOBRE_MIM/resumo.html';
        let emailCopied = false;
        let conteudoAVista = false;
        let saindo = false;

        function showTooltip() {
            if (!emailCopied) {
                nameContainer.textContent = "você deseja copiar este email?";
            }
        }

        function hideTooltip() {
            if (!emailCopied) {
                nameContainer.textContent = "Matheus Augusto";
            }
        }

        function copyEmail() {
            const email = "ae_augusto33@proton.me";
            navigator.clipboard.writeText(email).then(() => {
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
            conteudoAVista = true;
        }

        // o visual claro esconde terminal e chuva por CSS: sem isso os dois seguiriam
        // criando no e gastando bateria atras de um elemento invisivel
        const teatroVisivel = (el) => el && getComputedStyle(el).display !== 'none';

        if (teatroVisivel(terminal)) {
            setInterval(addTerminalLine, 100);
            setTimeout(showContent, 4000);
        } else {
            showContent();
        }

        const numLetters = teatroVisivel(rain) ? 100 : 0;
        for (let i = 0; i < numLetters; i++) {
            const letter = document.createElement('div');
            letter.className = 'raindrop';
            letter.textContent = getRandomChar();
            letter.style.left = `${Math.random() * 100}%`;
            letter.style.animationDelay = `${Math.random() * 5}s`;
            rain.appendChild(letter);
        }

        function redirectToPortfolio() {
            if (saindo) return;
            saindo = true;
            document.body.classList.add('rotate-out');
            setTimeout(() => {
                window.location.href = destino;
            }, 1000);
        }

        if (cta) {
            cta.addEventListener('click', (event) => {
                // ctrl, cmd, shift ou botao do meio abrem em outra aba: deixar passar
                if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                redirectToPortfolio();
            });
        }

        // rolar para baixo leva ao resumo mesmo durante o boot do terminal:
        // quem rola ja decidiu entrar, nao precisa esperar o teatro acabar
        window.addEventListener('wheel', (event) => {
            if (event.deltaY > 0) redirectToPortfolio();
        }, { passive: true });

        // teclado: as teclas usuais de "descer a pagina"
        window.addEventListener('keydown', (event) => {
            if (['ArrowDown', 'PageDown', ' '].includes(event.key)) redirectToPortfolio();
        });

        // toque: swipe para cima (gesto de rolar para baixo) no celular
        let toqueY = null;
        window.addEventListener('touchstart', (event) => {
            toqueY = event.touches[0].clientY;
        }, { passive: true });
        window.addEventListener('touchmove', (event) => {
            if (toqueY !== null && toqueY - event.touches[0].clientY > 40) {
                toqueY = null;
                redirectToPortfolio();
            }
        }, { passive: true });
