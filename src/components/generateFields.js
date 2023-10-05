import { projectsContainer } from "./project";
import TodoList from "./todos";
import { currentProject } from "./mainPage";
import loadProjectPage from "./loadPage";
import { Container } from "./todoLandingPage";
import { titleCase } from "./todoListForm";

export function generateFields(form, elements, isUpdate=false) {
    // seems over complicated
    
    elements.map(
        (ele) => {
            const label = document.createElement("label");
            label.setAttribute("for", `${ele.label}-field`);
            label.textContent = titleCase(`${ele["label"]}: `);
            if (ele.type === "text")
            {
                let v = document.createElement(`input`);
                v.setAttribute("type", ele.type);
                v.classList.add(`${ele.label}-field`);
                v.setAttribute("id", `${ele.label}-field`);
                form.append(label, v);

            } else if (ele.type === "TEXTAREA")
            {
                let v = document.createElement(`${ele.type}`);
                v.rows = 10;
                v.cols = 50;
                v.classList.add(`${ele.label}-field`);
                v.setAttribute("id", `${ele.label}-field`);
                form.append(label, v);

            } else if (ele.type === "date")
            {
                let v = document.createElement("input");
                v.setAttribute("type", ele.type);
                v.classList.add(`${ele.label}-field`);
                v.setAttribute("id", `${ele.label}-field`);
                form.append(label, v);

            }


        }
    );

    const submitBtn = document.createElement("button");
    if (isUpdate)
    {
        submitBtn.textContent = "Update task";
    } else
    {
        submitBtn.textContent = "Add task";

    }
    submitBtn.classList.add("submit-btn");

    submitBtn.addEventListener("click", (e) => {
        const title = document.querySelector(".title-field").value;
        const dueDate = document.querySelector(".DueDate-field").value;
        const description = document.querySelector(".description-field").value;
        const priority = document.querySelector(".priority-field").value;

        if (isValid(title, description, priority, dueDate))
        {
            currentProject.project.addTask(new TodoList(title, description, priority, dueDate));
            console.log(title, description, dueDate, priority, currentProject, projectsContainer);
            loadProjectPage(Container(currentProject.project));
        }
        
        form.addEventListener("submit", (e) => {

            e.preventDefault();
        });
    });

    form.append(submitBtn);

}

function isValid(title, description, priority, dueDate) {
    if (title !== "" && description !== "" && priority !== "")
    {
       return true
    }
    return false
}

function populateFields(data, e) {
    document.querySelector(".title-field").value = data.title;
    document.querySelector(".description-field").value = data.description;
    document.querySelector(".DueDate-field").value = data.dueDate;
    document.querySelector(".priority-field").value = data.priority;
}

export { populateFields }