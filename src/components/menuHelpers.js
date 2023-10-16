// TODO: Rename this module
import { completedTasks, projectsContainer } from "./project";
import loadProjectPage from "./loadPage";
import { Container } from "./todoLandingPage";
import { projectListDisplay, projectsHolder } from "./menuInterface";
import deleteIcon from "./assets/deleteIcon.svg";
import createComponent from "./elements";
import { updateStorage } from "./localStorageHandler";
import message from "./message";
// let formCounter = 0;


function loadProjects() {
    // load existing projects to the the projectsHolder div

    projectsContainer.map((project) => {
         projectsHolder.append(createProjectLabel(project))
        }       
    );   
}

function reloadProjects(name) { 
    // used to add new project to the project-list-display div
    projectsContainer.map((project) => {
         if (project._projectName === name)
        {
            

            projectsHolder.append(createProjectLabel(project))
            
        }
    }       
    );   
    
    
}

function createProjectLabel (project) {
    let ind = projectsContainer.indexOf(project) // index of project object in the project Container.
    const projectLinkContainer = document.createElement("div")
    projectLinkContainer.classList.add("project-link-container");
    const projectLink = document.createElement("div")
    projectLink.classList.add("project-link");
    projectLink.textContent = project._projectName
    projectLink.setAttribute("id", ind);

    const deleteProject = document.createElement("img");
    deleteProject.classList.add("delete-project");
    deleteProject.src = deleteIcon;
    projectLink.append(deleteProject);


    deleteProject.addEventListener("click", () => {
        deleteProjectDialog(project)
    });

    projectLink.addEventListener("click", () => {
        loadProjectPage(Container(project, ind))
    });
    projectLinkContainer.append(projectLink, deleteProject)
    return projectLinkContainer
}

function deleteProjectDialog(project) {
    let bodyChildren = document.querySelector("body")

    //  children existing in body tag before add the dialog:-
    //      0: text <--- is not seen the dom is rendered, saw it throught the browser's debugger.
    //      1: div.main-container
    //  therefore, when the delete porject dialog is added it will be childNode 2

    if (!bodyChildren.childNodes[2])
    {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("msg-container");
        messageContainer.innerHTML = `<h1>
            Are you sure you want to delete, '${project._projectName}'
        </h1>`
        const cancleDialog = createComponent("button", "cancle-dialog", "cancle");
        const confirmDialog = createComponent("button", "confirm-dialog", "Yes");
        messageContainer.append(confirmDialog, cancleDialog);

        cancleDialog.addEventListener("click", () => {
            bodyChildren.removeChild(bodyChildren.childNodes[2])
        });

        confirmDialog.addEventListener("click", () => { 
            let childIndex = projectsContainer.indexOf(project)
            projectsHolder.removeChild(projectsHolder.childNodes[childIndex])
            let temp_arr = arrayRemove(projectsContainer, project)
            projectsContainer.newList(temp_arr);
            updateStorage();
            bodyChildren.removeChild(bodyChildren.childNodes[2])
            message(`${project._projectName} has been deleted`, "delete");
        });
        document.body.append(messageContainer)
    } else
    {
        bodyChildren.removeChild(bodyChildren.childNodes[2])
        deleteProjectDialog(project)
    }
    
}


function arrayRemove(arr, value) {
 
    return arr.filter(function (projects) {
        return projects != value;
    });

}

function updatetasksAccomplished() {
    let completedTasksDiv = document.querySelector(".complete-task-div")
    if (completedTasksDiv.children)
    {
        completedTasksDiv.replaceChildren();
    }
    for (const project in completedTasks)
    {
       
        const relatedProject = createComponent("ul", "complete-items", `${project}`);
        completedTasks[project].map(function (item) { // item is a todo List object
            const taskCompleted = createComponent("li", "task-completed", `${item.title}`);
            relatedProject.append(taskCompleted);
        });
        completedTasksDiv.append(relatedProject)
    }
    document.querySelector(".project-list").append(completedTasksDiv);
}

function renderCompletedTasks() {
    const completedTasksDiv = document.createElement("div");
    completedTasksDiv.classList.add("complete-task-div");
    
    completedTasksDiv.innerHTML = "<h2> Completed Tasks</h2>";
    for (const project in completedTasks)
    {
       
        const relatedProject = createComponent("ul", "complete-items", `${project}`);
        completedTasks[project].map(function (item) { // item is a todo List object
            const taskCompleted = createComponent("li", "task-completed", `${item.title}`);
            relatedProject.append(taskCompleted);
        });
        completedTasksDiv.append(relatedProject)
    }
    let title = projectListDisplay.lastChild.childNodes[0].innerHTML
    if (title === completedTasksDiv.childNodes[0].innerHTML)
    {
        projectListDisplay.replaceChild(completedTasksDiv, projectListDisplay.lastChild)
    } else
    {
        projectListDisplay.append(completedTasksDiv);
    }
}

export {
    loadProjects,
    reloadProjects,
    updatetasksAccomplished,
    arrayRemove,
    renderCompletedTasks,
}
