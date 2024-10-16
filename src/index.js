const status = ["Non démarré", "En cours", "Terminé"];
const taskList = [];

// Bouton menu
const menuButton = document.querySelector(".bouton_menu")//recuperer ID boutton menu
const dropDownMenu = document.querySelector(".dropDownMenu")


// mettre un display none sur le menu déroulant
/* menuButton.addEventListener('click', function () {
    dropDownMenu.classList.toggle("visible")//ajouter .visible au css avec un display block
}); */


// Supprimer une tâche
const deleteButton = document.querySelector//recupérer ID bouton supprimer

/* deleteButton.addEventListener("click", function () {

}) */


function createNewTask() {

    const newElement = {};

    const labelTask = document.querySelector("#add-task");
    const choiceStatus = document.querySelector("#select-status-article");
    const choiceCategory = document.querySelector("#select-category-article");


    alert(`Libellé tache : ${labelTask.value}, 
            Statut : ${choiceStatus.options[choiceStatus.selectedIndex].textContent},
            catégorie : ${choiceCategory.options[choiceCategory.selectedIndex].textContent}`);

    /* ajout du nouveau bloc dans */

    newElement.labelTask = labelTask.value;
    newElement.choiceStatus = choiceStatus.options[choiceStatus.selectedIndex].textContent;
    newElement.choiceCategory = choiceCategory.options[choiceCategory.selectedIndex].textContent;

    taskList.push(newElement);

    /* ajouter les éléments dans les sections */
    /* 1 - créer un élement article avec class dans un element section */
    /* 2 - créer un élément input initialisé avec la valeur labelTask */
    /* 3 - créer un élément select initialisé avec la valeur choisceStatus */
    /* 4 - créer un élément select initialisé avec la valeur choisceCategory */
    /* 5 - créer un élément button avec le label Edit */
    /* 6 - créer un élément button avec le label Delete */

    /* ici ajouter la la function dysplayTask qui va lire la dernière rtache ajoutée dans taskList
    et l'ajouter dans la bonnne section "status" */






    /* input ou textarea */





    const nonDemarre = document.querySelector(".non_demarre");

    const article = document.createElement("article");
    article.classList.add("status-article");
    nonDemarre.appendChild(article);

    /* label du select */

    const labelSelect = document.createElement("label");
    labelSelect.htmlFor.add("")

    /* ajout du select status */



    const articleSelectStatus = document.createElement("select");
    articleSelectStatus.classList.add("select-status");
    /*  articleSelectStatus.textContent = labelTask.value; */
    article.appendChild(articleSelectStatus);

    /* ajouter les options du status */

    const optionSelectStatus = document.createElement("option");
    optionSelectStatus.classList.add("")



    /* label du select category */

    /* ajout du select category */

    /* ajout du button edit */

    /* ajout du button delete */

    console.log(newElement);

}

/* ecouter send-button */

const sendButton = document.querySelector("#send-button");
sendButton.addEventListener("click", () => {
    const newTask = createNewTask();

});




