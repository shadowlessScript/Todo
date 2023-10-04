import { Project, addProject } from "./project.js";
import { reloadProjects } from "./landingPage.js";
import closeImage from "./assets/close.png";

function addNewProjectForm() {
    // MAKES THE FORM FOR MAKING A NEW PROJECT

    const formContainer = document.createElement("div")
    formContainer.classList.add("form-container")

    const form = document.createElement("form")
    form.classList.add("add-new-project-form")
    const projectNameInput = document.createElement("input")
    projectNameInput.setAttribute("type", "text")
    projectNameInput.setAttribute("placeholder", "Project Name")

    const addProject = document.createElement("button")
    addProject.textContent = "Add Project"
    form.append(projectNameInput, addProject)

    addProject.addEventListener("click", () => { 
        createProject(form, projectNameInput.value);
        document.body.removeChild(formContainer); // remove the form container from the body
    });

  

    const closeIcon = document.createElement("img");
    closeIcon.src = closeImage;
    closeIcon.alt = "Closes the form page";
    closeIcon.classList.add("close-form-btn")

    closeIcon.addEventListener("click", () => {
        document.body.removeChild(formContainer); // remove the form container from the body    
    });

    formContainer.append(form, closeIcon)
    document.body.append(formContainer)
}


function createProject(form, nameSubmitted) {

    addProject(new Project(nameSubmitted)) // creates and adds a project to the projectListContainer at the `Project` module
    reloadProjects(nameSubmitted) // shows the change real-time.
    
    form.addEventListener("submit", (e) => {
    
        e.preventDefault();
    })
}

export {addNewProjectForm}