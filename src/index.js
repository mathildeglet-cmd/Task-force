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
//const deleteButton = document.querySelector; //recupérer ID bouton supprimer

const menuButton = document.querySelector(".bouton_menu");
const dropDownMenu = document.querySelector(".dropDownMenu");

menuButton.addEventListener("click", () => {
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

	if (!labelTask.value) {
		alert("Saisir un texte pour créer une tâche");
		return;
	}

	labelTask.value = "";

	return newElement;
}

/* function pour afficher les blocs tasks */

function displayNewTask(taskList) {
	const lastElment = taskList.length - 1;
	const newTask = taskList[lastElment];

	/* ajouter les éléments dans les sections */

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

	/* Div pour agencement des bouton edit/delete */

	/* ajout du select status */
	const articleSelectStatus = document.createElement("select");
	articleSelectStatus.name = "edit-name-status";
	articleSelectStatus.id = "edit-select-status";
	article.appendChild(articleSelectStatus);

	/* ajouter les options du status */

	let listValues = ["unstarted", "current", "finished"];
	let listTexUser = ["Non démarré", "En cours", "Terminé"];

	for (let i = 0; i < listTexUser.length; i++) {
		let optionSelectStatus = document.createElement("option");
		optionSelectStatus.value = listValues[i];
		optionSelectStatus.textContent = listTexUser[i];
		articleSelectStatus.appendChild(optionSelectStatus);
	}

	const divEditDelete = document.createElement("div");
	divEditDelete.classList.add("buttonEditDelete");
	article.appendChild(divEditDelete);

	/* ajout du button edit */

	const buttonEdit = document.createElement("button");
	buttonEdit.classList.add("edit-button");
	buttonEdit.id = newTask.id;
	buttonEdit.textContent = "Edit";
	divEditDelete.appendChild(buttonEdit);

	/* ecouter edit-button */

	buttonEdit.addEventListener("click", () => {
		if (buttonEdit.textContent.toLowerCase() === "edit") {
			taskTextArea.disabled = false;
			buttonDelete.disabled = true;
			buttonEdit.textContent = "Save";
		} else {
			/* sauvegarder le nouveau llibellé dans taskList */
			const findTask = `task-${newTask.id}`;
			const findEditTask = taskList.findIndex(
				(task) => task.idArticle === findTask,
			);
			console.log(findEditTask);
			taskList[findEditTask].labelTask = taskTextArea.value;
			taskTextArea.disabled = true;
			buttonDelete.disabled = false;
			buttonEdit.textContent = "Edit";

			//article.classList.replace(`${classTask}`, "Nouveau-Statut");
		}
	});

	/* ajout du button delete */

	const buttonDelete = document.createElement("button");
	buttonDelete.classList.add("delete-button");
	buttonDelete.id = newTask.id;
	buttonDelete.textContent = "Delete";
	divEditDelete.appendChild(buttonDelete);

	/* ecouter delete-button */

	buttonDelete.addEventListener("click", () => {
		const idValue = `task-${newTask.id}`;
		deleteTask(idValue);
	});
}

function deleteTask(articleId) {
	const articleToDelete = document.querySelector(`#${articleId}`);
	const deleteAlert = confirm(
		"Etes-vous sûr de vouloir supprimer cette tâche ?",
	);

	if (deleteAlert) {
		articleToDelete.remove();
		const findArticle = taskList.findIndex(
			(task) => task.idArticle === articleId,
		);

		// suppression de la task dans le tableau tasklist
		taskList.splice(findArticle, 1);
	}
}

/* ecouter send-button */

const sendButton = document.querySelector("#send-button");
sendButton.addEventListener("click", () => {
	const newTask = createNewTask();
	if (newTask) {
		displayNewTask(taskList);
	}
});
