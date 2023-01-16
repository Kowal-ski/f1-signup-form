document.body.addEventListener('wheel', async (e) => {
	if (e.deltaY > 0) {
		document.body.setAttribute('data-scene2', true)
        document.querySelector('#navBar > div:nth-child(1) > div:first-child').removeAttribute('id');
        document.querySelector('#navBar > div:nth-child(2) > div:first-child').setAttribute('id', 'active');
	} else {
		document.body.setAttribute('data-scene2', false)
        document.querySelector('#navBar > div:nth-child(2) > div:first-child').removeAttribute('id');
        document.querySelector('#navBar > div:nth-child(1) > div:first-child').setAttribute('id', 'active');
	}

}, {
	capture: true,
	passive: true
})