<script>
  function flipPageAndRedirect(url) {
    document.body.classList.add('page-flip');
    setTimeout(function() {
      window.location.href = url;
    }, 500); // Tempo em milissegundos que corresponde à duração da animação
  }
</script>
