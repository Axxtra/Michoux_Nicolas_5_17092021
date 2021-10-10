let productInLocalStorage = JSON.parse(localStorage.getItem("produit"));



// si le panier est vide
if(productInLocalStorage=== null)
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
    for(k = 0;k < productInLocalStorage.length;k ++ )
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

        const nom = document.getElementsByClassName('fw-bolder')[k];
        const prix = document.getElementsByClassName("fs-5 mb-5")[k];
        const description = document.getElementsByClassName("lead")[k];
        let id =document.getElementsByClassName("lead")[k];
    
        prix.innerHTML = productInLocalStorage[k].product_price;
        titre.innerHTML = productInLocalStorage[k].name_product;
        description.innerHTML = productInLocalStorage[k].product_description + " Couleur : " + productInLocalStorage[k].product_option ;
        img = document.getElementsByClassName('card-img-top')[0];
        img.setAttribute("src",productInLocalStorage[k].product_img);

    }
}