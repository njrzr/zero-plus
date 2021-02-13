let myGravatar = 'https://en.gravatar.com/angelus078.json';
let hover = document.getElementsByClassName("portfolio-button");
let button = document.getElementsByClassName("arrow-button");
let logoHover = document.getElementById("logo");
let logoChange = document.getElementById("logo-img1");
let yearText = document.getElementById("year");
let addresses = [];
let date = new Date().getFullYear();

yearText.innerHTML = date;

fetch(myGravatar)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for(let i = 0;i < data.entry[0].currency.length;i++) {
      addresses.push({
        coin: data.entry[0].currency[i].type,
        address: data.entry[0].currency[i].value
      })
    }
  })
  .catch((err) => {
    console.log(err);
  });

for(let i = 0;i < hover.length;i++) {
  hover[i].addEventListener("mouseover", () => {
    button[i].src = "images/arrow_1.svg";
    hover[i].addEventListener("mouseleave", () => {
      button[i].src = "images/arrow_2.svg";
    });
  });
}

logoHover.addEventListener("mouseover", () => {
  logoChange.src = "images/logo2.png";
  logoHover.addEventListener("mouseleave", () => {
    logoChange.src = "images/logo1.png";
  });
});
