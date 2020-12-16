//visible abstracts in wide-screen

const abstracts = document.querySelectorAll('.abstract');

const abstractToBeVisible = () => {
	abstracts.forEach(abstract => {
		abstract.classList.add('show');
	});
};

const abstractToBeInvisible = () => {
	abstracts.forEach(abstract => {
		abstract.classList.remove('show');
	});
};
changeAbstractVisibility = () => {
	// console.log(window.innerWidth)
	if (window.innerWidth > 992) {
		abstractToBeVisible();
	} else {
		abstractToBeInvisible();
	}
};

window.onresize = () => {
	changeAbstractVisibility();
};

window.onload = () => {
	changeAbstractVisibility();
};

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
});

//form validation - colors
// $('#form').submit(e => {
// 	// e.preventDefault()
// 	const form = e.target;
// 	form.classList.add('was-validated');
// 	if (!form.checkValidity()) {
// 		console.log(form.checkValidity());
// 		return false;
// 	}
// });

//working modal
$('#projectModal').on('show.bs.modal', function (event) {
	const button = $(event.relatedTarget); // Button that triggered the modal
	const title = button.data('title'); //pobieranie tytułu
	const desc = button.data('desc');
	const modal = $(this);
	modal.find('.modal-title').text(title);
	modal.find('.modal-body').text(desc);
});

/////////////////////////////////////////////////////////////////
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB-Upec911GUCUlvASFaCQZUdTLMC5cwR8',
	authDomain: 'asiawebsiteform.firebaseapp.com',
	databaseURL: 'https://asiawebsiteform-default-rtdb.firebaseio.com',
	projectId: 'asiawebsiteform',
	storageBucket: 'asiawebsiteform.appspot.com',
	messagingSenderId: '512901883610',
	appId: '1:512901883610:web:575a6d197405ba57dc27e3',
	measurementId: 'G-2JFEPLRBV5',
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.analytics();

//reference message collection
const database = firebase.firestore();
// database.setting({ timestampsInSnapshots: true });
// const messagesRef = firebase.database().ref('messages');

//to get form values

const getInputVal = id => {
	return document.getElementById(id);
};

//sending form
const submitForm = e => {
	e.preventDefault();
	const name = getInputVal('name').value;
	const email = getInputVal('email').value;
	const institution = getInputVal('institution').value;
	const message = getInputVal('messageText').value;

	saveMessage(name, email, institution, message);
	// console.log('sent', name, email, institution, message);
	document.getElementById('form').reset();
};

//submit form
document.getElementById('form').addEventListener('submit', submitForm);

//save message to firebase
function saveMessage(name, email, institution, message) {
	database
		.collection('mails')
		.add({
			to: 's.zajaczkowski@gumed.edu.pl',
			message: {
				name: name,
				email: email,
				institution: institution,
				message: message,
			},
		})
		.then(() => console.log('mail wysłany', message));
}
