import menuInterface from "./menuInterface";
import userProject from "./todoLandingPage";
import { projectsContainer } from "./project";
import todoListForm from "./todoListForm";

let currentProject = {
    project: projectsContainer[0],
    index: 0,
} // Will be used when creating a todo list, because it has to be contained in a spefic project

export default function mainPage() {
    const mainPageContainer = document.createElement("div");
    mainPageContainer.classList.add("main-page-container");

    mainPageContainer.append(
        menuInterface(),
        userProject(projectsContainer[0], currentProject.index),
        todoListForm(),
    )
    return mainPageContainer
}


export {
    currentProject 
}