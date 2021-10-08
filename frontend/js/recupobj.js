//création classe permettant de récupérer les produits
getProducts();

//récupération des données
function getProducts()
{
fetch('http://localhost:3000/api/teddies')
.then(res => res.json())
.then(data => renderProducts(data))
}

//création des éléments et insertion des données de l'API dans le code html
function renderProducts(data)
{
    for ( let i =0; i<data.length; i++)
    {
    
    const newElt = document.createElement("div");
    newElt.className ="col-md-4 col-lg-4";
    let elt = document.getElementsByClassName("row gx-4 gx-lg-5")[0];
    elt.appendChild(newElt);
    
    let a = document.createElement("a");
    a.className = "lien";
    newElt.appendChild(a);
    
    let img =document.createElement("img");
    img.className ="card-img-top mb-5 mb-md-0";
    img.src="";
    img.alt="ours en peluche";
    a.appendChild(img);
    
    let card = document.createElement("div");
    card.className ="card-body";
    newElt.appendChild(card);
    
    let categorie = document.createElement("div");
    categorie.className ="small mb-1";
    card.appendChild(categorie);
    
    let titre = document.createElement("h2");
    titre.className ="fw-bolder";
    card.appendChild(titre);
    
    let price = document.createElement("div");
    price.className ="fs-5 mb-5";
    card.appendChild(price);
    
    let descript = document.createElement("p");
    descript.className ="lead";
    card.appendChild(descript);
    
    let panier = document.createElement("div");
    panier.className="d-flex";
    card.appendChild(panier);
    
    let input = document.createElement("div");
    input.className ="form-control text-center me-3";
    input.id="inputQuantity";
    input.type="num";
    input.value="1";
    input.style="max-width: 3rem";
    panier.appendChild(input);
    
    let bouton = document.createElement("button");
    bouton.className="btn btn-outline-dark flex-shrink-0";
    bouton.id="envoie_panier";
    bouton.type="submit";
    bouton.textContent = "Ajouter au panier";
    panier.appendChild(bouton);
    
    const nom = document.getElementsByClassName('fw-bolder')[i];
    const prix = document.getElementsByClassName("fs-5 mb-5")[i];
    const description = document.getElementsByClassName("lead")[i];
    let id =document.getElementsByClassName("lead")[i];
    
    
    titre.innerHTML = data[i].name;
    price.innerHTML = data[i].price + "$";
    descript.innerHTML = "description : " + data[i].description;
    img.setAttribute("src",data[i].imageUrl) ;
    a.href = "ours.html" + "?" + "id=" + data[i]._id;
    }
}

 


