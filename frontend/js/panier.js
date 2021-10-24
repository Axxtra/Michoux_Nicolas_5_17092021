let productInLocalStorage = JSON.parse(localStorage.getItem("produit"));



//création de la constante qui va recevoir la taille du local storage

if (productInLocalStorage === null)
{
    const getPanier = document.getElementsByClassName("badge bg-dark text-white ms-1 rounded-pill")[0];
    getPanier.innerHTML = "0";
}
else
{   
    const getPanier = document.getElementsByClassName("badge bg-dark text-white ms-1 rounded-pill")[0];
    getPanier.innerHTML = productInLocalStorage.length;
}




// si le panier est vide
if(productInLocalStorage === null || productInLocalStorage == 0)
{
    const newElt = document.createElement("div");
    newElt.className ="col-md-4 col-lg-4";
    let elt = document.getElementsByClassName("row gx-4 gx-lg-5")[0];
    elt.appendChild(newElt);

    let img =document.createElement("img");
    img.className ="card-img-top mb-5 mb-md-0";
    img.src="";
    img.alt="boite en carton vide";
    newElt.appendChild(img);

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

    const nom = document.getElementsByClassName('fw-bolder')[0];
    const prix = document.getElementsByClassName("fs-5 mb-5")[0];
    const description = document.getElementsByClassName("lead")[0];
    
    nom.innerHTML = "votre panier est vide";
    prix.innerHTML = "montant du panier : 0 $";
    
    description.innerHTML = "vous pouvez remplir votre panier ! ";
    img = document.getElementsByClassName('card-img-top')[0];
    img.setAttribute("src","./images/pexels-karolina-grabowska-4498135.jpg");
}
else
{
    let strucutreProduitPanier =[];
    for(k = 0; k < productInLocalStorage.length; k ++ )
    {
        console.log(productInLocalStorage.length);
        const newElt = document.createElement("div");
        newElt.className ="col-md-4 col-lg-4";
        let elt = document.getElementsByClassName("row gx-4 gx-lg-5")[0];
        elt.appendChild(newElt);

        let img =document.createElement("img");
        img.className ="card-img-top mb-5 mb-md-0";
        img.src="";
        img.alt="boite en carton vide";
        newElt.appendChild(img);

        let card = document.createElement("div");
        card.className ="card-body";
        newElt.appendChild(card);

        let categorie = document.createElement("div");
        categorie.className ="small mb-1";
        card.appendChild(categorie);

        let titre = document.createElement("h3");
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

        let btn_delete = document.createElement("button");
        btn_delete.className = "fctn_delete";
        btn_delete.textContent = "supprimer l'article";
        card.appendChild(btn_delete);

        const nom = document.getElementsByClassName('fw-bolder')[k];
        const prix = document.getElementsByClassName("fs-5 mb-5")[k];
        const description = document.getElementsByClassName("lead")[k];
        let id =document.getElementsByClassName("lead")[k];
    
        prix.innerHTML = productInLocalStorage[k].product_price;
        titre.innerHTML = productInLocalStorage[k].name_product;
        description.innerHTML = productInLocalStorage[k].product_description + " Couleur : " + productInLocalStorage[k].product_option ;
        img = document.getElementsByClassName('card-img-top')[k];
        img.setAttribute("src",productInLocalStorage[k].product_img);

    }
}

//récupération du nombre de produit dans le local storage pour l'afficher sur le bouton panier



//suppression de l'article

let btn_suppr = document.querySelectorAll(".fctn_delete");


//sélection de l'id qui va etre supprimé en cliquant sur le bouton

for (let l = 0; l < btn_suppr.length; l ++)
{
    btn_suppr[l].addEventListener ("click", (event) =>
    {
        event.preventDefault();

        let id_suppr = productInLocalStorage[l].product_id;
        
        //avec la méthode filter on sélectionne les éléments que l'on garde et on supprimer l'élément lié au bouton
        productInLocalStorage = productInLocalStorage.filter( el => el.product_id !== id_suppr);
        

        // on envoie dans le local storage
        localStorage.setItem("produit",JSON.stringify(productInLocalStorage));

        alert("ce produit a été retiré du panier");
        window.location.href ="panier.html";

    })
}

//création de la constante pour récupérer le bouton vider le panier

const suppr_all = document.querySelector(".btn_suppr_all");
console.log(suppr_all);

//suppression de tous les éléments produit dans le local storage
suppr_all.addEventListener("click", (e) => {
        e.preventDefault;
        localStorage.removeItem("produit");

        alert("votre panier est maintenant vide");

        window.location.href ="panier.html";
    });