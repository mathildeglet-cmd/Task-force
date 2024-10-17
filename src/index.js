const status = ["Non démarré", "En cours", "Terminé"];
const taskList = [];
let taskId = 0;

// Bouton menu
//const menuButton = document.querySelector(".bouton_menu"); //recuperer ID boutton menu
//const dropDownMenu = document.querySelector(".dropDownMenu");

// mettre un display none sur le menu déroulant
//menuButton.addEventListener("click", () => {
//	dropDownMenu.classList.toggle("visible"); //ajouter .visible au css avec un display block
//});

// Supprimer une tâche
const deleteButton = document.querySelector; //recupérer ID bouton supprimer

/* deleteButton.addEventListener("click", function () {

}) */

const menuButton = document.querySelector(".bouton_menu");
const dropDownMenu = document.querySelector(".dropDownMenu");

menuButton.addEventListener("click",  () => {
	dropDownMenu.classList.toggle("visible");
});

function createNewTask() {
	const newElement = {};

	const labelTask = document.querySelector("#add-task");
	const selectStatus = document.querySelector("#select-status-article");

	/* si aucun texte saisi, message alert puit sortie de la fonction */

	if (!labelTask.value) {
		alert("Saisir un texte pour créer une tâche");
		return;
	}

	/* ajout du nouveau bloc dans */
	taskId += 1; // incrementer la valeur de l'id
	newElement.id = taskId;
	newElement.idArticle = `task-${taskId}`;
	newElement.labelTask = labelTask.value;
	newElement.selectStatus = selectStatus.value;
	
	taskList.push(newElement);

	return newElement;
}

/* function pour afficher les blocs tasks */

function displayNewTask(taskList) {
	const lastElment = taskList.length - 1;
	const newTask = taskList[lastElment];

	/* ajouter les éléments dans les sections */

	/* 3 - créer un élément select initialisé avec la valeur choisceStatus */
	/* 4 - créer un élément button avec le label Edit */

	let classTask = "";
	let labelStatus = "";

	/* déterminer le status pour ajouter le nom de class correspondant dans la balise article */

	if (newTask.selectStatus === "unstarted") {
		classTask = "task-nonDemarre";
		labelStatus = "Non démarré";
	}

	if (newTask.selectStatus === "current") {
		classTask = "task-enCours";
		labelStatus = "En cours";
	}

	if (newTask.selectStatus === "finished") {
		classTask = "task-termine";
		labelStatus = "Terminé";
	}

	const task = document.querySelector(".tasks");

	const article = document.createElement("article");
	article.id = `task-${newTask.id}`;
	article.classList.add(classTask);
	task.appendChild(article);

	/* label du select */

	
	/* ajout du textarea */

	const taskTextArea = document.createElement("textarea");
	taskTextArea.id = "taskText";
	taskTextArea.rows = 2;
	taskTextArea.cols = 33;
	taskTextArea.value = newTask.labelTask;
	taskTextArea.disabled = true;
	article.appendChild(taskTextArea);

	/* ajouter le libellé du statut dans la tache crée */

	const displayStatus = document.createElement("h3");
	displayStatus.classList.add("label-status");
	displayStatus.textContent = `Tâche ${labelStatus}`;
	article.appendChild(displayStatus);

	/* ajout du button edit */

	const buttonEdit = document.createElement("button");
	buttonEdit.classList.add("edit-button");
	buttonEdit.id = newTask.id;
	buttonEdit.textContent = " Edit ";
	article.appendChild(buttonEdit);

	/* ecouter edit-button */
	buttonEdit.addEventListener("click", () =>
		alert(`Edit tache ${newTask.labelTask} ID : ${newTask.id}`),
	);

	/* ajout du button delete */

	const buttonDelete = document.createElement("button");
	buttonDelete.classList.add("delete-button");
	buttonDelete.id = newTask.id;
	buttonDelete.textContent = " Delete ";
	article.appendChild(buttonDelete);

	/* ecouter delete-button */

	buttonDelete.addEventListener("click", () =>{
		const idValue = `task-${newTask.id}`;
		deleteTask(idValue);
	}
		
	);

	//const articleSelectStatus = document.createElement("select");
	//articleSelectStatus.classList.add("select-status");
	/*  articleSelectStatus.textContent = labelTask.value; */
	//article.appendChild(articleSelectStatus);

	/* ajouter les options du status */

	//const optionSelectStatus = document.createElement("option");
	//optionSelectStatus.classList.add("");
}

/* ecouter send-button */

const sendButton = document.querySelector("#send-button");
sendButton.addEventListener("click", () => {
    const newTask = createNewTask();
    if (newTask) {
        displayNewTask(taskList);
    }
});


function deleteTask(articleId) { 
	
		const articleToDelete = document.querySelector(`#${articleId}`);
		const deleteAlert = confirm(
			"Etes-vous sûr de vouloir supprimer cette tâche ?",
		);
			console.log(taskList);
			console.log(articleId);

		if(deleteAlert){
			articleToDelete.remove();
			//const findArticle = taskList.indexOf(() => taskList.idArticle === `${articleId}`);
			const findArticle = taskList.find(task=>task.idArticle === articleId);
			console.log(findArticle); 
		}
		 

			   
	
}


