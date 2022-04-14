const formContact = document.querySelector("form");
const lastName = document.querySelector("#name");
const eMail = document.querySelector("#mail");
const messageContent = document.querySelector("#message");
const spinner = document.getElementById("spinner");
formContact.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = {
		lastName: lastName.value,
		eMail: eMail.value,
		messageContent: messageContent.value,
	};
	const option = {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	};
	spinner.removeAttribute("hidden");
	fetch(" https://phylling-web-dev.herokuapp.com/api/mail", option)
		.then((res) => {
			spinner.setAttribute("hidden", "");
			if (res.status === 200) {
				alert("Votre message a bien été expédié");
				lastName.value = "";
				eMail.value = "";
				messageContent.value = "";
			}
		})
		.catch((err) => {
			console.log(err);
			spinner.setAttribute("hidden", "");
			alert("Quelque chose s'est mal passé, veuillez réessayer plus tard");
		});
});
