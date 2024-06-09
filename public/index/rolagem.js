<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Scroll to Change Tab</title>
</head>
<body>

<!-- Seu conteúdo aqui -->

<script>
window.addEventListener("wheel", function(event) {
    // Verifica se a rolagem foi para cima ou para baixo
    if (event.deltaY < 0) {
        // Troca para a próxima aba
        window.open("", "_self").close();
    } else if (event.deltaY > 0) {
        // Troca para a aba anterior
        window.open("", "_self").close();
    }
});
</script>

</body>
</html>
