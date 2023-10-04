import { projectsContainer } from "./project";
import { addNewProjectForm } from "./formHandlers";
import loadProjectPage from "./loadPage";
import userProject from "./todoLandingPage";
import { Container } from "./todoLandingPage";
import addImage from "./assets/add.png";
import { projectsHolder } from "./menuInterface";
// let formCounter = 0;

// make the main div
const projectListDisplay = document.createElement("div")
projectListDisplay.classList.add("project-list");

export default function landingPage() {    
    // TODO: Put the add project btn in a different div 
    const addProjectBtn = document.createElement("img")
    addProjectBtn.src = addImage
    addProjectBtn.alt = "Click this to add a project"
    addProjectBtn.classList.add("add-project-btn")

    addProjectBtn.addEventListener("click", () => {
        
            addNewProjectForm();          
        
    });

    loadProjects(projectListDisplay)
    projectListDisplay.append(addProjectBtn)

    return projectListDisplay
}

function loadProjects(projectListDisplay) {
    // load existing projects to the the projectListDisplay div
    for (let i = 0; i < projectsContainer.length; i++)
    {
        const projectLink = document.createElement("div")
        projectLink.classList.add("project-link");
        projectLink.textContent = projectsContainer[i].projectName
        projectLink.setAttribute("id", i);

        projectLink.addEventListener("click", () => { 
            loadProjectPage(Container(projectsContainer[i]))
        });

        projectListDisplay.append(projectLink)
    }
}

function reloadProjects(name) { // TODO: May be it can the placed in a different module.
    // used to add new project to the project-list-display div

    for (let i = 0; i < projectsContainer.length; i++)
    {
        if (projectsContainer[i].projectName === name)
        {
            const projectLink = document.createElement("div")
            projectLink.classList.add("project-link");
            projectLink.textContent = projectsContainer[i].projectName
            projectLink.setAttribute("id", i);

            projectLink.addEventListener("click", () => { 
                loadProjectPage(userProject(projectsContainer[i]))
            });

            projectsHolder.append(projectLink)
        }
        
    }
    
}
export {
    loadProjects,
    reloadProjects
}
