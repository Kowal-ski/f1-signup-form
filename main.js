document.body.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {

        document.querySelector('.scene2').classList.add('showing');
        document.querySelector('#navBar > div:nth-child(1) > div:first-child').removeAttribute('id');
        document.querySelector('#navBar > div:nth-child(2) > div:first-child').setAttribute('id', 'active');

    } else {

        document.querySelector('.scene2').classList.remove('showing');
        document.querySelector('#navBar > div:nth-child(2) > div:first-child').removeAttribute('id');
        document.querySelector('#navBar > div:nth-child(1) > div:first-child').setAttribute('id', 'active');

    }

}, {
    capture: true,
    passive: true
})