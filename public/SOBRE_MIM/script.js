// Função para voltar
function goBack() {
    document.body.classList.add('wipe-transition');
    setTimeout(function() {
        history.back();
    }, 1000); // Ajuste o tempo de acordo com a duração da animação
}
