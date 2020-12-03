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
	if (window.innerWidth > 992) {
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








//closing navbar after clicking on menu-link - jQuery
$(document).on('click', function () {
	$('.collapse').collapse('hide');
})