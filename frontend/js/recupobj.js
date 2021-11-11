let productInLocalStorage = JSON.parse(localStorage.getItem("produit"));

//création de la constante qui va recevoir la taille du local storage

if (productInLocalStorage === null)
{
    const getPanier = document.getElementById("nombre_panier");
    getPanier.innerHTML = "0";
}
else
{   
    const getPanier = document.getElementById("nombre_panier");
    getPanier.innerHTML = productInLocalStorage.length;
}

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
//AVEC TEMPLATE ET FOREACH
function renderProducts(data) {
    try {
        console.log("renderProducts");
        const cardTemplate = document.getElementById("template");
        const listProducts = document.getElementById("products-render");

        data.forEach(item => {
            console.log(item)
            let card = document.importNode(cardTemplate.content, true);

            // façonnage
            card.querySelector('.card-img-top').setAttribute('src', item.imageUrl);
            card.querySelector('.card-img-top').setAttribute('alt', 'photo de ' + ' ' + item.name);
            card.querySelector('.card-title').textContent = item.name;
            card.querySelector('.lien').setAttribute('href', "ours.html" + "?" + "id=" + item._id);
            card.querySelector('.lead').textContent =item.description;
            card.querySelector('.price').textContent = item.price + "$";
            listProducts.appendChild(card);
        });


    } catch (error) {
        console.error("renderProducts error : " + error);
        throw error;
    }
}

 



