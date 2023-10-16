// import { updateStorage } from "./localStorageHandler";
import { updateStorage , getInfo, updateCompletedTasksStorage, getCompletedTask} from "./localStorageHandler";
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
let completedTasks = {} // will hold all the completed tasks i.e { projectName: [task1, task2] }
Array.prototype.newList = function (newLIst) {
    projectsContainer = newLIst;
};
 
function addProject(project) {
    projectsContainer.push(project)
}

if (projectsContainer.length === 0)
{
    addProject(new Project("Default"))
}

(
    function () {
       
        if (!localStorage.getItem("projects"))
        {
            updateStorage() // the default project is added to the localStorage
        } else
        {
            let temp_projectsContainer = getInfo()
            let temp_list = []
            for (let i = 0; i < temp_projectsContainer.length; i++)
            {
                // Once the projectContainer is saved in the localStorage as JSON,
                // the classes methods are removed, thus, this 'for loop' is used
                // to create new project objects, and todolist object and add them to the projectsContainer variable,
                // using the existing save data.

                let p = new Project(temp_projectsContainer[i]._projectName) // create a project object, using the existing project name in the `info` variable
                if (temp_projectsContainer[i].todoList.length !== 0) // if the json parse project object has a todolist array 
                {
                    
                    temp_projectsContainer[i].todoList.map((task) => {
                        p.addTask(task)
                    });
                }
                
                
                temp_list.push(p)
            }

            projectsContainer = temp_list
        }

        if (!localStorage.getItem("completedTasks"))
        {
            updateCompletedTasksStorage();
        } else
        {
            completedTasks = getCompletedTask();
        }
    }

    

)();


export {
    projectsContainer,
    Project,
    addProject,
    completedTasks
}
