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
	// console.log(window.innerWidth)
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



//clearing after sending e-mail

// const resetForm = () => {
// 	console.log('reset')
// 	setTimeout(() => {
// 		const iii = document.querySelectorAll('.formInput')
// 		iii.forEach(ii => {
// 			ii.value = "";

// 		})
// 	}, 2000)
// }


//closing navbar after clicking on menu-link - jQuery
$(document).on('click', function () {
	$('.collapse-on-click').collapse('hide');
})



//form validation - colors
$('#form').submit((e) => {
	// e.preventDefault()
	const form = e.target
	form.classList.add('was-validated')
	if (!form.checkValidity()) {
		console.log(form.checkValidity())
		return false
	}
})

//working modal
$('#projectModal').on('show.bs.modal', function (event) {
	const button = $(event.relatedTarget) // Button that triggered the modal
	const title = button.data('title') //pobieranie tytułu
	const desc = button.data('desc')
	const modal = $(this)
	modal.find('.modal-title').text(title)
	modal.find('.modal-body').text(desc)
})