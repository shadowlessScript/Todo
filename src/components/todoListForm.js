import { Project } from "./project";
import addTaskImg from "./assets/add_task.png"
import { generateFields } from "./generateFields";

export default function todoListForm() {
    const form = document.createElement("form");
    form.classList.add("todolist-form")

    const sectionTitle = document.createElement("h3")
    sectionTitle.classList.add("section-title")
    sectionTitle.textContent = "Add new Task"
    const addTaskImage = document.createElement("img")
    addTaskImage.src = addTaskImg
    addTaskImage.classList.add("add-task-img")
    form.append(addTaskImage,sectionTitle)
    // const title = document.createElement()
    generateFields(form,
        [
            { type:"text", label:"title" },
            { type:"TEXTAREA", label:"description" },
            { type:"date", label:"DueDate" },
            { type: "text", label: "priority" },
        ]
    );// just expermenting
    return form
}

export function titleCase(str) {
    // title case your sentences
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}