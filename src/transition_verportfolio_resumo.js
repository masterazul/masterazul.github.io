
  function flipPageAndRedirect(url) {
    document.body.classList.add('zoom-out');

    setTimeout(function() {
      window.location.href = url;
    }, 500);
  }

  function redirectToQuali() {
    document.body.classList.add('zoom-out');

    setTimeout(function() {
      window.location.href = '../quali/index.html';
    }, 500);
  }
