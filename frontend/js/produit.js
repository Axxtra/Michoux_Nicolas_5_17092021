const queryString_url_id = window.location.search;
console.log(queryString_url_id);

const urlId = new URLSearchParams(queryString_url_id);
console.log(urlId);
const url_id = urlId.get("id");
console.log(url_id);




fetch('http://localhost:3000/api/teddies' + "/" + url_id )
.then(res => res.json())
.then(data => console.log(data));

const newElt = document.createElement("div");
newElt.className ="col-md-4 col-lg-4";
let elt = document.getElementsByClassName("row gx-4 gx-lg-5")[0];
elt.appendChild(newElt);


let img =document.createElement("img");
img.className ="card-img-top mb-5 mb-md-0";
img.src="";
img.alt="ours en peluche";
document.getElementsByClassName("col-md-4 col-lg-4")[0].appendChild(img);

let card = document.createElement("div");
card.className ="card-body";
document.getElementsByClassName("col-md-4 col-lg-4")[0].appendChild(card);

let categorie = document.createElement("div");
categorie.className ="small mb-1";
document.getElementsByClassName("card-body")[0].appendChild(categorie);

let titre = document.createElement("h2");
titre.className ="fw-bolder";
document.getElementsByClassName("card-body")[0].appendChild(titre);

let price = document.createElement("div");
price.className ="fs-5 mb-5";
document.getElementsByClassName("card-body")[0].appendChild(price);

let descript = document.createElement("p");
descript.className ="lead";
document.getElementsByClassName("card-body")[0].appendChild(descript);

let panier = document.createElement("div");
panier.className="d-flex";
document.getElementsByClassName("card-body")[0].appendChild(panier);

let input = document.createElement("div");
input.className ="form-control text-center me-3";
input.id="inputQuantity";
input.type="num";
input.value="1";
input.style="max-width: 3rem";
document.getElementsByClassName("d-flex")[1].appendChild(input);

let bouton = document.createElement("button");
bouton.className="btn btn-outline-dark flex-shrink-0";
bouton.type="button";
bouton.textContent = "Commander";
document.getElementsByClassName("d-flex")[1].appendChild(bouton);







const nom = document.getElementsByClassName('fw-bolder')[0];
const prix = document.getElementsByClassName("fs-5 mb-5")[0];
const description = document.getElementsByClassName("lead")[0];
let id =document.getElementsByClassName("lead")[0];
fetch('http://localhost:3000/api/teddies' + "/" + url_id )
.then(res => res.json())
.then(data => {
nom.innerHTML = data.name;
prix.innerHTML = data.price + "$";
id.innerHTML = data._id;
description.innerHTML = "description : " + data.description;
img = document.getElementsByClassName('card-img-top')[0];
img.setAttribute("src",data.imageUrl) ;


});