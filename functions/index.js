const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key;

const sendGridEmail = require('@sendgrid/mail');
sendGridEmail.setApiKey(SENDGRID_API_KEY);

exports.AsiaForm = functions.firestore.document('/mails/{mailsId}').onCreate(snap => {
	const messageData = snap.data();
	const msg = {
		to: 'staszek.zajaczkowski@gmail.com',
		from: 'ktulu.inc@gmail.com',
		templateId: 'd-699e4e9b498f43c0afb8837277a3d283',
		dynamic_template_data: {
			fromName: messageData.name,
			fromEmail: messageData.email,
			fromInstitution: messageData.institution,
			message: messageData.message,
		},
	};

	return sendGridEmail
		.send(msg)
		.then(() => console.log('email sent'))
		.catch(error => console.error(error.toString()));
});
