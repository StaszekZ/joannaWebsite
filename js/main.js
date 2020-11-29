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

window.onresize = () => {
	console.log(window.innerWidth)
	if (window.innerWidth > 786) {
		abstractToBeVisible()
	} else {
		abstractToBeInvisible()
	}
}
