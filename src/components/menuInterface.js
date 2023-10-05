import { loadProjects } from "./landingPage";
import { addNewProjectForm } from "./formHandlers";
import addImage from "./assets/add.png";

// make the main div
const projectListDisplay = document.createElement("div")
projectListDisplay.classList.add("project-list");
const projectsHolder = document.createElement("div")
projectsHolder.classList.add("project-holder")

export default function menuInterface() {    
    // TODO: Put the add project btn in a different div 

    const addProjectBtn = document.createElement("img")
    addProjectBtn.src = addImage
    addProjectBtn.alt = "Click this to add a project"
    addProjectBtn.classList.add("add-project-btn")

    addProjectBtn.addEventListener("click", () => {
        
            addNewProjectForm();          
        
    });
    

    loadProjects(projectsHolder)
    projectListDisplay.append(projectsHolder,addProjectBtn)

    return projectListDisplay
}

export {
    projectsHolder
}
