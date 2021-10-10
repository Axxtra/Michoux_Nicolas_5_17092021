const queryString_url_id = window.location.search;
console.log(queryString_url_id);

const urlId = new URLSearchParams(queryString_url_id);
console.log(urlId);
const url_id = urlId.get("id");
console.log(url_id);


//création fonction permettant de récupérer les produits
getProducts();

//récupération des données
function getProducts()
{
    fetch('http://localhost:3000/api/teddies' + "/" + url_id )
    .then(res => res.json())
    .then(data => renderProducts(data))
}

//création des éléments
function renderProducts(data)
{
    const newElt = document.createElement("div");
    newElt.className ="col-md-4 col-lg-4";
    let elt = document.getElementsByClassName("row gx-4 gx-lg-5")[0];
    elt.appendChild(newElt);

    let img =document.createElement("img");
    img.className ="card-img-top mb-5 mb-md-0";
    img.src="";
    img.alt="ours en peluche";
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

    let input = document.createElement("div");
    input.className ="form-control text-center me-3";
    input.id="inputQuantity";
    input.type="num";
    input.value="1";
    input.style="max-width: 3rem";
    panier.appendChild(input);

    let bouton = document.createElement("button");
    bouton.className="btn btn-outline-dark flex-shrink-0";
    bouton.type="submit";
    bouton.id="order";
    bouton.name="Commander";
    bouton.textContent = "Commander";
    document.getElementsByClassName("d-flex")[1].appendChild(bouton);


    const nom = document.getElementsByClassName('fw-bolder')[0];
    const prix = document.getElementsByClassName("fs-5 mb-5")[0];
    const description = document.getElementsByClassName("lead")[0];
    let id =document.getElementsByClassName("lead")[0];
    
    nom.innerHTML = data.name;
    prix.innerHTML = data.price + "$";
    id.innerHTML = data._id;
    description.innerHTML = "description : " + data.description;
    img = document.getElementsByClassName('card-img-top')[0];
    img.setAttribute("src",data.imageUrl);

    let option = document.createElement("label");
    option.className = "choix_option";
    option.for="option";
    option.textContent="choissisez la couleur : ";
    card.appendChild(option);

    let select = document.createElement("select");
    select.name = "couleur";
    select.id = "couleur" ;
    select.className = "couleur_produit";
    card.appendChild(select);

    const option_couleur = data.colors;

    // boucle for pour créer l'élément option pour chaque options de chaques produits
    for ( let j = 0; j < option_couleur.length; j++)
    {
        let option_product = document.createElement("option");
        option_product.id = "c_product";
        option_product.className = "c_product";
        option_product.value = option_couleur[j];
        select.appendChild(option_product);

        //récupération des options J s'incrémente à chaque fois que l'on récupere une donnée "colors" de l'API
        option_product.textContent = option_couleur[j];
    }

    
    const idForm = document.querySelector("#couleur");



    //sélection du bouton ajouter au panier
    const btn_envoyerPanier = document.querySelector("#order");


    //écouter le bouton et envoyer le panier
    btn_envoyerPanier.addEventListener("click", (event)=>{
    event.preventDefault()

    // mettre le choix dans une variable
    const choixForm = idForm.value;


    //récupération des valeurs du formulaire
    let option_produit = 
    {
        name_product : data.name,
        product_price : data.price,
        product_id : data._id,
        product_description : data.description,
        product_img : data.imageUrl,
        product_option : choixForm,

    }
    console.log(option_produit);

    //-------------------------------------------------------------local storage---------------------------------------------------------------
    //stocker les valeurs

    //déclaration d'une variable "productInLocalStorage"

    let productInLocalStorage = JSON.parse(localStorage.getItem("produit"));
    console.log(productInLocalStorage);

    // création fonction confirmation envoie au panier
    const popupConfirmation = () => {
        if(window.confirm(`${data.name} option ${choixForm} a bien été ajouté au panier
    OK pour accéder au pannier, ANNULER pour revenir en arrière`))
        {
            window.location.href ="panier.html";
        }
            else
            {
                window.location.href ="index.html";
            }
        
    }

    // fonction ajouter un produit sélectionné
    const ajoutProduitLocalStorage = () =>
    {
        productInLocalStorage.push(option_produit);// envoie des données sur le local storage
        localStorage.setItem("produit",JSON.stringify(productInLocalStorage));// on met les données au format JSON
        // confirmation de l'envoie au panier
    }


    //---------------------------------------------------vérification du contenu du local storage

        // si il y a des produits dans le local storage
    if(productInLocalStorage)
    {   
        ajoutProduitLocalStorage();// appel fonction ajouter un produit sélectionné
        popupConfirmation();
    }            

        // si il n'y a pas de produit dans le local storage on créé un tableau vide pour ensuite y insérer les éléments
        else
        {
            productInLocalStorage = [];
            ajoutProduitLocalStorage(); // appel fonction ajouter un produit sélectionné
            console.log(productInLocalStorage); // on affiche dans le console.log() les données pour controler 
            popupConfirmation();// confirmation de l'envoie au panier
        
        }
    

    });

    






}