let productInLocalStorage = JSON.parse(localStorage.getItem("produit"));

//création de la constante qui va recevoir la taille du local storage

if (productInLocalStorage === null)
{
    const getPanier = document.getElementById("nb_panier");
    getPanier.innerHTML = "0";
}
else
{   
    const getPanier = document.getElementById("nb_panier");
    getPanier.innerHTML = productInLocalStorage.length;
}


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
    const cardTemplate = document.getElementById("template");
    const listProducts = document.getElementById("products-render");

    let card = document.importNode(cardTemplate.content, true);

    // façonnage
    card.querySelector('.card-img-top').setAttribute('src', data.imageUrl);
    card.querySelector('.card-img-top').setAttribute('alt', 'photo de ' + ' ' + data.name);
    card.querySelector('.card-title').textContent = data.name;
    card.querySelector('.lien').setAttribute('href', "ours.html" + "?" + "id=" + data._id);
    card.querySelector('.lead').textContent = data.description;
    card.querySelector('.price').textContent = data.price + "$";
    listProducts.appendChild(card);


    const option_couleur = data.colors;

    // boucle for pour créer l'élément option pour chaque options de chaques produits
    for ( let j = 0; j < option_couleur.length; j++)
    {
        let option_product = document.createElement("option");
        option_product.id = "c_product";
        option_product.className = "c_product";
        option_product.value = option_couleur[j];
        document.getElementById("couleur").appendChild(option_product);

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