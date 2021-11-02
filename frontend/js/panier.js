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
    
    description.innerHTML = "vous pouvez remplir votre panier ! ";
    img = document.getElementsByClassName('card-img-top')[0];
    img.setAttribute("src","./images/pexels-karolina-grabowska-4498135.jpg");

    let prix_total_html = document.querySelector(".total_panier");
    prix_total_html.innerHTML ="Montant du panier : 0 $";

}
else
{
    let strucutreProduitPanier =[];
    for(k = 0; k < productInLocalStorage.length; k ++ )
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
        btn_delete.className = "fctn_delete btn btn-outline-dark flex-shrink-0 btn-warning";
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

    //création de la variable pour insérer les prix des éléments dans le panier

const prix_panier =[];

for (let m =0; m < productInLocalStorage.length; m ++)
{
    let prix_produit_localStorage = productInLocalStorage[m].product_price;

    //mettre les prix dans prix_panier
   prix_panier.push(prix_produit_localStorage);
}

//additionner les prix avec la méthode reduce

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const total_price = prix_panier.reduce(reducer, 0);


let prix_total_html = document.querySelector(".total_panier");
prix_total_html.innerHTML ="Montant du panier : " + total_price + " $";
       
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

//-------------------------------------------------------création de la constante pour récupérer le bouton "vider le panier"

const suppr_all = document.querySelector(".btn_suppr_all");


//--------------------------------------------------------suppression de tous les éléments produit dans le local storage
suppr_all.addEventListener("click", (e) => 
    {
        e.preventDefault;
        localStorage.removeItem("produit");

        alert("votre panier est maintenant vide");

        window.location.href ="panier.html";
    }
);



/****************************************************Création formulaire commande */

/**************************fonction afficher formulaire */
const afficherformulairecommande = () =>
{
    const positionform =document.querySelector("#formulaire");

    const structform =
    `<div class="col-md-4 col-lg-4">
    <div class="card-body">
        <div class="small mb-1"></div>
        <h4 class="fw-bolder">Formulaire de commande</h4>
        <form>
            <p>
                <label for="prenom">Prénom : </label>
                <input type="text" name="prenom" id="prenom" required />
            </p>
            <p>
                <label for="nom">Nom : </label>
                <input type="text" name="nom" id="nom" required />
            </p>
            <p>
                <label for="adress">Adresse : </label>
                <textarea id="adress" name="adress" id="prénom" required> </textarea>
            </p>
            <p>
                <label for="ville">Ville : </label>
                <input type="text" name="ville" id="ville" required />
            </p>
            <p>
                <label for="mail">Adresse mail : </label>
                <input type="email" name="mail" id="mail" required />
            </p>
        </form>
        <button id="SendForm" type="submit" name="SendForm" class ="btn btn-outline-dark flex-shrink-0 btn-warning">
            Confirmation de la commande
        </button>
    </div>
</div>`;
positionform.insertAdjacentHTML("afterend",structform );
};
afficherformulairecommande();

const btnSendForm = document.querySelector("#SendForm");


/***************AddEventListener pour récupérer les informations du formulaire au moment du click */
btnSendForm.addEventListener("click", (e) =>
{
    e.preventDefault()
/*récupération des valeurs du formulaire pour les mettre dans le local storage dans un objet*/

    let contact =
    {
        'firstName' : document.querySelector("#prenom").value,
        'lastName' : document.querySelector("#nom").value,
        'address' : document.querySelector("#adress").value,
        'city' : document.querySelector("#ville").value,
        'email' : document.querySelector("#mail").value
    }

//validation du formulaire

    function checkPrenomNomVille () // on vérifie si le nom le prenom et la ville correspondent aux exigences
    {
        const checkFirstName = contact.firstName;
        const checklastName = contact.lastName;
        const checkCity = contact.city;

        if (/^[A-Za-z]{3,20}$/.test(checkFirstName) && /^[A-Za-z]{3,20}$/.test(checklastName) && /^[A-Za-z]{3,20}$/.test(checkCity))
        {
            return true;
        }
        else
        {
            alert("Les chiffres et les symboles ne sont pas autorisés \n20 caractères max 3 caractères min")
            return false;
        }
    }

    function checkAdress () // on vérifie si l'adresse est bien écrite
    {
        const checkAdresse = contact.address;
        if (/^[A-Za-z0-9_ ]{3,150}$/.test(checkAdresse))
        {
            return true;
        }
        else
        {
        alert("Vous n'avez pas bien renseigné l'adresse \n150 caractères max 3 caractères min")
            return false;
        }
    }

    function checkMail () // on vérifie si l'adresse mail est bien écrite
    {
        const checkMail = contact.email;
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(checkMail))
        {
            return true;
        }
        else
        {
            alert("Vous n'avez pas bien renseigné l'adresse mail")
            return false;
    }
    }

//mettre contact dans le local storage

    if(checkPrenomNomVille() == true && checkAdress() == true && checkMail() == true)
    {
        localStorage.setItem ("contact", JSON.stringify(contact));
    }
    else
    {
        alert("Merci de remplir tout les champs du formulaire");
    }

    let products = productInLocalStorage;

    let ToSend =
    {
        contact,
        products
        
    }

    

    const promise01 = fetch("http://localhost:3000/api/teddies/order", 
    {
        method: "POST",
        body: JSON.stringify(ToSend),
        headers: {
            "Content-type" : "application/json",
            "Accept" : "application/json"
        }
    })

    // réponse du serveur
    promise01.then(async(response)=>{
        try
        {
            console.log(response)
            const content = await response.json();
            console.log(content);
        }
        catch(e)
        {
            console.log(e);
        }
    })
    // pour voir ce qu il y a dans le serveur
    

})

