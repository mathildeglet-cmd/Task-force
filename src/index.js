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

/* ecouter send-button */

const sendButton = document.querySelector("#send-button");
sendButton.addEventListener("click", () => {
    createNewTask();
});

function createNewTask() {
    const labelTask = document.querySelector("#add-task");
    const choiceStatus = document.querySelector("#select-status-article");
    const choiceCategory = document.querySelector("#select-category-article");

    alert(`Libellé tache : ${labelTask.value}, 
        Statut : ${choiceStatus.options[choiceStatus.selectedIndex].textContent},
        catégorie : ${choiceCategory.options[choiceCategory.selectedIndex].textContent}`);
}