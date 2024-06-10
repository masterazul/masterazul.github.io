window.addEventListener('load', () => {
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');

    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');
    const icon3 = document.getElementById('icon3');

    setTimeout(() => {
        icon1.style.display = 'block';
        setTimeout(() => {
            screen2.style.display = 'flex';
            setTimeout(() => {
                icon2.style.display = 'block';
                setTimeout(() => {
                    screen3.style.display = 'flex';
                    setTimeout(() => {
                        icon3.style.display = 'block';
                    }, 125);
                }, 125);
            }, 125);
        }, 125);
    }, 125);
});