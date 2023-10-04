import menuInterface from "./menuInterface";
import userProject from "./todoLandingPage";
import { projectsContainer } from "./project";
import todoListForm from "./todoListForm";

export default function mainPage() {
    const mainPageContainer = document.createElement("div");
    mainPageContainer.classList.add("main-page-container");

    mainPageContainer.append(
        menuInterface(),
        userProject(projectsContainer[0]),
        todoListForm(),
    )

    return mainPageContainer
}