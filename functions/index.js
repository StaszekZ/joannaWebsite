const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key;

const sendGridEmail = require('@sendgrid/mail');
sendGridEmail.setApiKey(SENDGRID_API_KEY);

exports.AsiaForm = functions.firestore.document('/mails/{mailsId}').onCreate(async snap => {
	const messageData = snap.data();
	const msg = {
		to: 'joanmiklosz@gmail.com',
		from: 'ktulu.inc@gmail.com',
		templateId: 'd-699e4e9b498f43c0afb8837277a3d283',
		dynamic_template_data: {
			fromName: messageData.name,
			fromEmail: messageData.email,
			fromInstitution: messageData.institution,
			message: messageData.message,
		},
	};

	try {
		await sendGridEmail.send(msg);
		return console.log('email sent');
	} catch (error) {
		return console.error(error.toString());
	}
});

exports.asia_form_to_sender = functions.firestore
	.document('/mails/{mailsId}')
	.onCreate(async snap => {
		const messageData = snap.data();
		const msg = {
			to: messageData.email,
			from: 'ktulu.inc@gmail.com',
			templateId: 'd-34673fdc6ec84ccba73470fe09ff61e5',
			dynamic_template_data: {
				message: messageData.message,
			},
		};
		try {
			await sendGridEmail.send(msg);
			return console.log('email sent');
		} catch (error) {
			throw new Error(error.toString());
		}
	});
