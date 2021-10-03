for ( let i =0; i <5; i++)
{

    fetch('http://localhost:3000/api/teddies')
.then(res => res.json())
.then(data => console.log(data));

const newElt = document.createElement("div");
newElt.className ="col-md-4 col-lg-4";
let elt = document.getElementsByClassName("row gx-4 gx-lg-5")[0];
elt.appendChild(newElt);

let a = document.createElement("a");
a.className = "lien";

document.getElementsByClassName("col-md-4 col-lg-4")[i].appendChild(a);

let img =document.createElement("img");
img.className ="card-img-top mb-5 mb-md-0";
img.src="";
img.alt="ours en peluche";
document.getElementsByClassName("lien")[i].appendChild(img);

let card = document.createElement("div");
card.className ="card-body";
document.getElementsByClassName("lien")[i].appendChild(card);

let categorie = document.createElement("div");
categorie.className ="small mb-1";
document.getElementsByClassName("card-body")[i].appendChild(categorie);

let titre = document.createElement("h2");
titre.className ="fw-bolder";
document.getElementsByClassName("card-body")[i].appendChild(titre);

let price = document.createElement("div");
price.className ="fs-5 mb-5";
document.getElementsByClassName("card-body")[i].appendChild(price);

let descript = document.createElement("p");
descript.className ="lead";
document.getElementsByClassName("card-body")[i].appendChild(descript);

let panier = document.createElement("div");
panier.className="d-flex";
document.getElementsByClassName("card-body")[i].appendChild(panier);

let input = document.createElement("div");
input.className ="form-control text-center me-3";
input.id="inputQuantity";
input.type="num";
input.value="1";
input.style="max-width: 3rem";
document.getElementsByClassName("d-flex")[i+1].appendChild(input);

let bouton = document.createElement("button");
bouton.className="btn btn-outline-dark flex-shrink-0";
bouton.type="button";
bouton.textContent = "Ajouter au panier";
document.getElementsByClassName("d-flex")[i+1].appendChild(bouton);






const nom = document.getElementsByClassName('fw-bolder')[i];
const prix = document.getElementsByClassName("fs-5 mb-5")[i];
const description = document.getElementsByClassName("lead")[i];
let id =document.getElementsByClassName("lead")[i];
fetch('http://localhost:3000/api/teddies')
.then(res => res.json())
.then(data => {
nom.innerHTML = data[i].name;
prix.innerHTML = data[i].price + "$";
id.innerHTML = data[i]._id;
description.innerHTML = "description : " + data[i].description;
img = document.getElementsByClassName('card-img-top')[i];
img.setAttribute("src",data[i].imageUrl) ;
a.href = "ours.html" + "?" + "id=" + data[i]._id; 

});
}
