import { generateFields, populateFields } from "./generateFields";
import { currentProject } from "./mainPage";
import createComponent from "./elements";
import { completedTasks } from "./project";
import { taskSelected } from "./todoLandingPage";
import { arrayRemove, renderCompletedTasks, updatetasksAccomplished } from "./menuHelpers";
import { updateCompletedTasksStorage, updateStorage } from "./localStorageHandler";

export function createTodoItems(container, project) {
    // makes todo divs for each todo item and appends it to the container
    if (project.todoList.length > 0)
    {
        for (let i = 0; i < project.todoList.length; i++)
        {
            let projectTodoList = project.todoList[i];
            const taskContainer = createComponent("div", "task-container");
            const todo = document.createElement("div");
            todo.classList.add("user-task");
            const todoTitle = document.createElement("h4");
            todoTitle.textContent = projectTodoList.title;
            const todoDescription = document.createElement("p");
            todoDescription.textContent = projectTodoList.description;
            const todoPriority = document.createElement("h5");
            todoPriority.textContent = projectTodoList.priority;
            const todoDueDate = document.createElement("p");
            todoDueDate.textContent = projectTodoList.dueDate;
            const deleteTask = createComponent("button", "delete-task", "X");
            const taskComplete = createComponent("button", "task-complete", "Done");

            todo.append(
                todoTitle,
                // todoDescription,
                // todoPriority,
                todoDueDate
            );
            taskContainer.append(todo, taskComplete, deleteTask);

            container.append(taskContainer);
            
            todo.addEventListener("click", (e) => {
                let ind = Array.prototype.indexOf.call(container.children, taskContainer) - 1; // minus 1 because it is been offset by the title-container child 
                let form = document.querySelector(".todolist-form");
                form.replaceChildren();
                generateFields(form, [
                    { type: "text", label: "title" },
                    { type: "TEXTAREA", label: "description" },
                    { type: "date", label: "DueDate" },
                    { type: "text", label: "priority" },
                ],
                    true
                );
                populateFields(currentProject.project.todoList[ind]);
                taskSelected = currentProject.project.todoList[ind];
                console.log(ind, currentProject.project.todoList[ind], form);
            });

            taskComplete.addEventListener("click", () => {
                let ind = Array.prototype.indexOf.call(container.children, taskContainer) - 1; // minus 1 because it is been offset by the title-container child 

                let tasks = [];
                tasks.push(currentProject.project.todoList[ind]);
                if (completedTasks[`${project._projectName}`])
                {
                    completedTasks[`${project._projectName}`].push(currentProject.project.todoList[ind]);
                }
                else
                {
                    completedTasks[`${project._projectName}`] = tasks;
                }
                currentProject.project.todoList = arrayRemove(currentProject.project.todoList, currentProject.project.todoList[ind]);
                updateCompletedTasksStorage();
                console.log(completedTasks);
                renderCompletedTasks();
                updateStorage();
                container.removeChild(taskContainer);
            });

            deleteTask.addEventListener("click", () => { 
                let ind = Array.prototype.indexOf.call(container.children, taskContainer) - 1; // minus 1 because it is been offset by the title-container child 
                currentProject.project.todoList = arrayRemove(currentProject.project.todoList, currentProject.project.todoList[ind]);
                updateStorage();
                container.removeChild(taskContainer);
            });
        }



    }
    else
    {
        container.append(
            document.createElement("p").textContent = `${project._projectName} project is Empty`
        );
    }
}
