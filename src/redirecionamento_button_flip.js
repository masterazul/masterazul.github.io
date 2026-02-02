        document.querySelector('.floating-button').addEventListener('click', function(event) {
            event.preventDefault();

            document.body.classList.add('wipe-out');

            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 1000);
        });