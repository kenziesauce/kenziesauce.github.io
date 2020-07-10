//index.js  
function sendEmail() {
	Email.send({
	SecureToken : "772c5200-0b15-4a94-8ff4-f77afe9b0205",
	To : "kenzie@miadolce.com",
	From : "<sender’s email address>",
	Subject : "Test",
	Body : "a Test",
	}).then(
		message => alert("Message Sent!")
	);
}

console.log("this is good")