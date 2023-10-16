import { projectsContainer } from "./project";
import TodoList from "./todos";
import { currentProject } from "./mainPage";
import loadProjectPage from "./loadPage";
import { Container, taskSelected } from "./todoLandingPage";
import todoListForm, { titleCase } from "./todoListForm";
import { updateStorage } from "./localStorageHandler";

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
        const cancleBtn = document.createElement("button")
        cancleBtn.classList.add("cancle-btn");
        cancleBtn.textContent = "Cancle"

        submitBtn.addEventListener("click", () => { 
            // calls a function that will update a task
            updateTask();
        });

        cancleBtn.addEventListener("click", (e) => {
            let c = e.view.document.querySelector(".main-page-container");

            const form = document.querySelector(".todolist-form");

            form.addEventListener("submit", (e) => {

                e.preventDefault();
            });
            c.removeChild(form)
            c.append(todoListForm())
            // generateFields(form, [{ type: "text", label: "title" },
            // { type: "TEXTAREA", label: "description" },
            // { type: "date", label: "DueDate" },
            //     { type: "text", label: "priority" },]);
            
        });
        form.append(cancleBtn)

    } else
    {
        submitBtn.textContent = "Add task";
        submitBtn.addEventListener("click", (e) => {
            submitTask();
    });
    }
    submitBtn.classList.add("submit-btn");
    

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


function submitTask() {
    const title = document.querySelector(".title-field").value;
    const dueDate = document.querySelector(".DueDate-field").value;
    const description = document.querySelector(".description-field").value;
    const priority = document.querySelector(".priority-field").value;
    const form = document.querySelector(".todolist-form");

    if (isValid(title, description, priority, dueDate))
    {
        currentProject.project.addTask(new TodoList(title, description, priority, dueDate));
        updateStorage()
        console.log(title, description, dueDate, priority, currentProject.project, projectsContainer);
        loadProjectPage(Container(currentProject.project));
        
    }
    
    form.addEventListener("submit", (e) => {

        e.preventDefault();
    });
}

function updateTask() {
    // console.log(taskSelected)
    const form = document.querySelector(".todolist-form");
    taskSelected.title = document.querySelector(".title-field").value;
    taskSelected.dueDate = document.querySelector(".DueDate-field").value;
    taskSelected.description = document.querySelector(".description-field").value;
    taskSelected.priority = document.querySelector(".priority-field").value;

    updateStorage()

    loadProjectPage(Container(currentProject.project));
    console.log(taskSelected)
    form.addEventListener("submit", (e) => {

        e.preventDefault();
    });
}

export { populateFields }

