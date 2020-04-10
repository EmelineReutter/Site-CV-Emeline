var texte = document.getElementById("message");
var prenom = document.getElementById("prenom");
var nom = document.getElementById("nom");

// Storage
/*localStorage.setItem (0,"j'aime pas");
localStorage.setItem (1, "J'aime bien");
localStorage.setItem (2, "J'adore"); */
// taille du tableau du storage
var tailleLS = Object.keys(localStorage).length;
console.log (tailleLS);

function recuperer(){
    if(texte.value == "")
        return;
    var commentaire = prenom.value+ " "+ nom.value+ ": " +texte.value;
    localStorage.setItem(tailleLS,commentaire);
    tailleLS++
    // Création d'une div 
    var div=document.createElement("div");
        div.innerHTML=commentaire;
        div.className="messages";
    // ajout de la div 
    var blog=document.getElementById("commentaires");
        blog.appendChild(div);
}
var valider = document.querySelector("button");
valider.addEventListener("click", recuperer);

for (var i=0; i<tailleLS; i++){
   // Création d'une div 
   var div=document.createElement("div");
   div.className="messages";
   // afficher mes éléments stocker dans le local storage
   div.innerHTML=localStorage.getItem(i);
   // ajout de la div 
   var blog=document.getElementById("commentaires");
   blog.appendChild(div);  
}


