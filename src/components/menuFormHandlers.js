import { Project, addProject } from "./project.js";
import { reloadProjects } from "./menuHelpers.js";
import closeImage from "./assets/close.png";
import { updateStorage } from "./localStorageHandler.js";
import message from "./message.js";

let isActive = false; // to avoid the form being appended multiple times.

function addNewProjectForm() {
    // MAKES THE FORM FOR MAKING A NEW PROJECT

    const formContainer = document.createElement("div")
    formContainer.classList.add("form-container")

    const form = document.createElement("form")
    form.classList.add("add-new-project-form")
    const projectNameInput = document.createElement("input")
    projectNameInput.classList.add("project-name-input")
    projectNameInput.setAttribute("type", "text")
    projectNameInput.setAttribute("placeholder", "Project Name")

    const addProjectBtn = document.createElement("button")
    addProjectBtn.classList.add("add-project-btn")
    addProjectBtn.textContent = "Add Project"
    form.append(projectNameInput, addProjectBtn)

    addProjectBtn.addEventListener("click", () => { 
        createProject(form, projectNameInput.value);
        const projectList = document.querySelector(".add-project-form-holder")
        projectList.removeChild(formContainer); // remove the form container from the div.project-list
        isActive = false;
    });

  

    const closeIcon = document.createElement("img");
    closeIcon.src = closeImage;
    closeIcon.alt = "Closes the form page";
    closeIcon.classList.add("close-form-btn")

    closeIcon.addEventListener("click", () => {
        // document.body.removeChild(formContainer); // remove the form container from the body 
        document.querySelector(".add-project-form-holder").removeChild(formContainer)
        isActive = false;
    });
    form.append(closeIcon)
    formContainer.append(form)

    if (!isActive)
    {
        document.querySelector(".add-project-form-holder").append(formContainer)
        isActive = true;
    }
}


function createProject(form, nameSubmitted) {

    addProject(new Project(nameSubmitted)) // creates and adds a project to the projectListContainer at the `Project` module
    updateStorage(); // localStorage is updated
    reloadProjects(nameSubmitted) // shows the newly added project on the div.project-holder.
    
    form.addEventListener("submit", (e) => {
    
        e.preventDefault(); // prevent it from sending post/get request
    });

    message(`${nameSubmitted} project has been created!`, "create");
}

export {addNewProjectForm}