import TodoList from "./todos";

class Project{
    todoList = [];

    constructor(projectName) {
        this.projectName = projectName        
    }

    set projectName(value) {
        this._projectName = value
    }

    get projectName() {
        return this._projectName
    }

    addTask(todo) {
        this.todoList.push(todo)
    }

    get todoList() {
        return this.todoList
    }

    // addProject
}



let projectsContainer = [] // will hold all the projects of user

function addProject(project) {
    projectsContainer.push(project)
}

if (projectsContainer.length === 0)
{
    addProject(new Project("Default"))
}

(
    function () {
        let proj = new Project("Construction");
        proj.addTask(new TodoList("Go to work", "...", 2, "2021-3-12"))
        proj.addTask(new TodoList("Go to work!", "...", 2, "2021-3-12"));
        addProject(proj);
        console.dir(projectsContainer)
    }
)();


// exports
export {
    projectsContainer,
    Project,
    addProject
}
// console.log(projectsContainer)