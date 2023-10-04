// deals with showing the todo list of the project selected
// TODO: - If todoList isEmpty then show "No task added"
//      - if they exist, show the task.
//      - Include a form for adding new tasks.
const todoContainer = document.createElement("div")
todoContainer.classList.add("todo-container")

export default function userProject(project) { 
    //project, is an object in the form:
    // {
    //  todoList:[
    // {"title", "description","dueDate", "priority"} --> TodoList object
    //],
    //  projectName: "<some name>"
    //}

    
    todoContainer.append(Container(project))
    
    
    return todoContainer
}

function createTodoItems(container, project) {
    // makes todo divs for each todo item and appends it to the container
    if (project.todoList.length > 0)
    {
        for (let i = 0; i < project.todoList.length; i++) 
        {
            let projectTodoList = project.todoList[i]
            const todo = document.createElement("div")
            const todoTitle = document.createElement("h4")
            todoTitle.textContent = projectTodoList.title
            const todoDescription = document.createElement("p");
            todoDescription.textContent = projectTodoList.description;
            const todoPriority = document.createElement("h5")
            todoPriority.textContent = projectTodoList.priority
            const todoDueDate = document.createElement("p")
            todoDueDate.textContent = projectTodoList.dueDate
            
            
            todo.append(
                todoTitle,
                todoDescription,
                todoPriority,
                todoDueDate
            )
            container.append(todo)
        }
    } else
    {
        container.append(
            document.createElement("p").textContent=`${project.projectName} project is Empty`
        )
    }
}


function Container(project) {
    const projectNameContainer = document.createElement("div") //--> append to todoContainer
    projectNameContainer.classList.add("title-container");
    const container = document.createElement("div")
    container.classList.add("container")

    const title = document.createElement("h3"); // + to projectNameContainer
    title.textContent = project.projectName
    projectNameContainer.appendChild(title);
    container.append(projectNameContainer);    

    createTodoItems(container, project)

    return container
}

export {
    todoContainer,
    Container,
}