//visible abstracts in wide-screen

const abstracts = document.querySelectorAll('.abstract')

const abstractToBeVisible = () => {
	abstracts.forEach(abstract => {
		abstract.classList.add('show')
	})
}

const abstractToBeInvisible = () => {
	abstracts.forEach(abstract => {
		abstract.classList.remove('show')
	})
}
changeAbstractVisibility = () => {
	console.log(window.innerWidth)
	if (window.innerWidth > 768) {
		abstractToBeVisible()
	} else {
		abstractToBeInvisible()
	}
}

window.onresize = () => {
	changeAbstractVisibility();

}

window.onload = () => {
	changeAbstractVisibility()
}