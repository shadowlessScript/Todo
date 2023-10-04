import { main } from "../app";
import { todoContainer } from "./todoLandingPage";

export default function loadProjectPage(page) { //TODO: Make sure it is dynamic, 
    todoContainer.removeChild(todoContainer.childNodes[0])

    todoContainer.append(page)

}