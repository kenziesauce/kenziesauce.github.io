//index.js  
function sendEmail() {
	Email.send({
	SecureToken : "c842cd55-489d-46d1-a5b3-9437f4006d9e",
	To : 'kenzie@miadolce.com',
	From : "<sender’s email address>",
	Subject : "Test",
	Body : "a Test",
	}).then(
		message => alert("Message Sent!")
	);
}