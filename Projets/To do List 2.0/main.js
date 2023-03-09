let todoItems = JSON.parse(localStorage.getItem("todoStorage"));
console.log(todoItems);
if (todoItems == null) {
    todoItems = new Array();
    console.log(todoItems);
}
let parent = document.getElementById("todo");
let input = document.querySelector(".todoForm input");

function initialize() {
    input.value = "";
    for (let i = 0; i < todoItems.length; i++) {
        createTodoItem(todoItems[i], true);
    }
}
initialize();

function createTodoItem(todoText, isStart) {
    if (todoItems == "") {
        todoItems.createElement = [input.value]
    }

    if (input.value != "" || isStart) {
        // récupérer input
        if (input.value != "") {
            todoItems.push(input.value);
            // sauvegarder ma nouvelle todo Items
            localStorage.setItem("todoStorage", JSON.stringify(todoItems));
        }
        // Création de la div "finale"
        let newTodoItem = document.createElement("div");

        // Creation de nouveaux éléments HTML
        let check = document.createElement("input");
        check.type = "checkbox";
        let texte = document.createElement("p");
        texte.innerHTML = todoText;
        let todoActions = document.createElement("div");
        let mod = document.createElement("i");
        let suppr = document.createElement("i");

        // Attribution de styles
        newTodoItem.className = "todoItem";
        todoActions.className = "todoActions";
        mod.className = "fa fa-edit";
        suppr.className = "fa fa-trash-o";

        // Ajouter dynamiquement des écouteurs d'évenements
        suppr.addEventListener("click", deleteTodoItem);

        // Ajout des éléments au DOM

        todoActions.appendChild(mod);
        todoActions.appendChild(suppr);

        newTodoItem.appendChild(check);
        newTodoItem.appendChild(texte);
        newTodoItem.appendChild(todoActions);

        parent.appendChild(newTodoItem);
    }

}

function deleteTodoItem(event) {
    // supprimer l'élément du HTML
    let btnSupprimer = event.target;
    let divASupprimer = btnSupprimer.parentNode.parentNode;
    parent.removeChild(divASupprimer);

    // supprimer l'élément du tableau
    let chaineATrouver = divASupprimer.childNodes[1].innerHTML;
    let index = todoItems.indexOf(chaineATrouver);
    todoItems.splice(index, 1);
    localStorage.setItem("todoStorage", JSON.stringify(todoItems));
}

let bouton = document.querySelector(".btnValider");
bouton.addEventListener("click", function () { createTodoItem(input.value, false) });
