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

//closing navbar after clicking on menu-link - jQuery
$(document).on('click', function () {
	$('.collapse-on-click').collapse('hide');
});

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

const database = firebase.firestore();

//to get form values
const getInputVal = id => {
	return document.getElementById(id);
};

//sending form
const submitForm = e => {
	e.preventDefault();
	const form = e.target;
	form.classList.add('was-validated');
	if (!form.checkValidity()) {
		return false;
	}
	const name = getInputVal('name').value;
	const email = getInputVal('email').value;
	const institution = getInputVal('institution').value;
	const message = getInputVal('messageText').value;

	saveMessage(name, email, institution, message);
	document.getElementById('form').reset();
	form.classList.remove('was-validated');
};

//submit form
document.getElementById('form').addEventListener('submit', submitForm);
//show alert after sending message
const messageSentAlert = document.querySelector('.form__alert');

const showAlert = () => {
	messageSentAlert.classList.add('d-block');
	setTimeout(() => {
		messageSentAlert.classList.remove('d-block');
	}, 5000);
};
//save message to firebase
function saveMessage(name, email, institution, message) {
	database
		.collection('mails')
		.add({
			name: name,
			email: email,
			institution: institution,
			message: message,
		})
		.then(() => showAlert());
}

//setting date in footer ©
const date = new Date().getFullYear();
// console.log(date);
document.querySelector('.footer__date').innerText = date.toString();
