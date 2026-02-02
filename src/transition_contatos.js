document.addEventListener('DOMContentLoaded', function() {
    var btnBack = document.querySelector('.btn-back');

    btnBack.addEventListener('click', function(event) {
        event.preventDefault();

        document.body.classList.add('page-transition');

        setTimeout(function() {
            window.location.href = btnBack.getAttribute('href');
        }, 500);
    });
});
