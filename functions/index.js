const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key;

const sendGridEmail = require('@sendgrid/mail');
sendGridEmail.setApiKey(SENDGRID_API_KEY);

exports.AsiaForm = functions.firestore.document('mails/{mailsId}').onCreate(event => {
	console.log(event.params.mailsId);
	const mailData = event.data();
	console.log('mailData', mailData);
	const msg = {
		to: 'staszek.zajaczkowski@gmail.com',
		from: 'noreply@juniortechbots.com',
		message: 'wiadomość',
		templateId: 'd-699e4e9b498f43c0afb8837277a3d283',
		// dynamic_template_data: {
		// 	message: mailData.message,
		// },
	};

	return sendGridEmail
		.send(msg)
		.then(() => console.log('email sent'))
		.catch(error => console.error(error.toString()));
});
