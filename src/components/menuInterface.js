import { loadProjects, renderCompletedTasks } from "./menuHelpers";
import { addNewProjectForm } from "./menuFormHandlers";
import addImage from "./assets/add.png";

// make the main div
const projectListDisplay = document.createElement("div")
projectListDisplay.classList.add("project-list");
const projectsHolder = document.createElement("div")
projectsHolder.classList.add("project-holder")
projectsHolder.textContent = "Projects"

export default function menuInterface() {    
    // TODO: Put the add project btn in a different div 

    const openFormBtn = document.createElement("img")
    openFormBtn.src = addImage
    openFormBtn.alt = "Click this to add a project"
    openFormBtn.classList.add("open-form-btn")
    const formHolder = document.createElement("div")
    formHolder.classList.add("add-project-form-holder");
    openFormBtn.addEventListener("click", () => {
        
            addNewProjectForm();          
        
    });
    
    formHolder.append(openFormBtn)
    loadProjects() // add project names and create links to each project to div.project-holder
    projectListDisplay.append(projectsHolder,formHolder)
    renderCompletedTasks() // display existing completed tasks
    return projectListDisplay
}




export {
    projectsHolder,
    projectListDisplay
}
