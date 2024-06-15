
  function flipPageAndRedirect(url) {
    document.body.classList.add('zoom-out'); // Adiciona classe para aplicar a transição de zoom out

    setTimeout(function() {
      window.location.href = url;
    }, 500); // Redireciona após 500ms (0.5s)
  }

  function redirectToQuali() {
    document.body.classList.add('zoom-out'); // Adiciona classe para aplicar a transição de zoom out

    setTimeout(function() {
      window.location.href = '../quali/index.html';
    }, 500); // Redireciona após 500ms (0.5s)
  }
