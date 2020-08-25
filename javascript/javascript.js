let myGravatar = 'https://en.gravatar.com/angelus078.json';

//Using XMLHttpRequest()
/*let request = new XMLHttpRequest();

request.open("GET", myGravatar, true);
request.onload = function() {
	let data = JSON.parse(this.response);
	let avatar = data.entry[0].photos[0].value;
	let logo = document.getElementById("logo");
	logo.style.background = `url(${avatar})`;
	logo.style.backgroundSize = "cover";
}
request.send()

//Using the fetch api
fetch(myGravatar)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		let address = data.entry[0].currency[0].value;
		let construction = document.getElementById("construction");
		construction.innerHTML = `${address}`;
	})
	.catch((err) => {
		console.log(err);
	})*/