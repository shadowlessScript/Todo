// deals with showing the todo list of the project selected
import { currentProject } from "./mainPage"
import createComponent from "./elements"
import { updateStorage } from "./localStorageHandler"
import { projectsContainer } from "./project"
import message from "./message"
import { createTodoItems } from "./createTodoItems"

const todoContainer = document.createElement("div")
todoContainer.classList.add("todo-container")
let taskSelected;
export default function userProject(project, ind) { 
    //project, is an object in the form:
    // {
    //  todoList:[
    // {"title", "description","dueDate", "priority"} --> TodoList object
    //],
    //  projectName: "<some name>"
    //}

    
    todoContainer.append(Container(project, ind))
    
    
    return todoContainer
}

function Container(project, projIndex) {
    currentProject.project = project 
    currentProject.index = projIndex
    const projectNameContainer = document.createElement("div") //--> append to todoContainer
    projectNameContainer.classList.add("title-container");
    const container = document.createElement("div")
    container.classList.add("container")

    const title = document.createElement("h3"); // + to projectNameContainer
    title.classList.add("project-title")
    title.textContent = project._projectName
    projectNameContainer.appendChild(title);
    container.append(projectNameContainer);    
    let isrenameActive = false; // prevent recursion of the rename input field
    let cancleActived = false;  // prevent recursion of the rename input field
    projectNameContainer.addEventListener("click", () => {

        // TODO: Put this in the renameProject function
        if (!isrenameActive)
        {            
            // without the if statement, the process becomes infinitely recursive whenever the cancle, rename or input field is clicked
            // i think, the above mentioned fields inherit the event listener for projectNameContainer.

            const renameProjectInputField = document.createElement("input")
            renameProjectInputField.value = project._projectName
            const cancleRename = createComponent("button", "cancle-rename", "cancle")
            
            cancleRename.addEventListener("click", () => {
                projectNameContainer.replaceChildren()
                projectNameContainer.append(title)
                cancleActived = true;
                console.log(renameProjectInputField.value)

            });
            const approveRename = createComponent("button", "approve-rename", "rename")
            approveRename.addEventListener("click", () => {
                let ind = projectsContainer.indexOf(project) + 1; // plus one because of the `#text` childNode -> Projects.
                project._projectName = renameProjectInputField.value;
                const v = document.querySelector(".project-holder")
                v.childNodes[ind].childNodes[0].textContent = renameProjectInputField.value;
                //      ^^^^
                //      ||||
                //<div projectHolder>
                // #text childNode, which is  "Projects"
                //<div>
                    //div.project-link[childNodes[0]] && delete Icon[childNodes[1]]
                //</div > < --- this corresponds to the index of the project
                //</div >
                title.textContent = renameProjectInputField.value;
                updateStorage();
                projectNameContainer.replaceChildren()
                projectNameContainer.append(title)
                cancleActived = true;
                message(`Rename successful`, "create");
                let containerChildren = document.querySelector(".container").childNodes
                // console.log(containerChildren[1])
                if (containerChildren[1].nodeName === "#text")
                {
                    /**
                     * When the project has no task, the div.container contains:
                     *  - div.title-container
                     *  - text, saying "<project name> is empty" 
                     * The text when rendered has a nodeName -> '#text', 
                     * This is what is used to determine whether the interface loaded, is showing any tasks or not.
                     * The tasks will be in div.user-task (this can be multiple). 
                     * ->This if statement allows for the project name to change in containerChildren[1] (text), after rename without need for refreshing the page.             
                     */
                    container.childNodes[1].textContent = `${renameProjectInputField.value} project is empty`
                }
            });
            projectNameContainer.removeChild(title)
            projectNameContainer.append(renameProjectInputField, cancleRename, approveRename)
            isrenameActive = true;
        } else if (isrenameActive && cancleActived)
        {
            isrenameActive = false;
            cancleActived = false;        
        }
    });
    
    createTodoItems(container, project)

    
    return container
}



export {
    todoContainer,
    Container,
    taskSelected,
}