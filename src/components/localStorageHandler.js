// Check whether local storage is possible in a browser
import message from "./message";
import { completedTasks, projectsContainer } from "./project";

let info;
let completedActivities;

export default function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

// if (storageAvailable("localStorage"))
// {    
//   if (!localStorage.getItem("projects"))
//   {
//       updateStorage()
//   }
// } else
// {
//   info = JSON.parse(localStorage.getItem("projects"));
//   // Too bad, no localStorage for us
// }

 function updateStorage() {
  localStorage.setItem("projects", JSON.stringify(projectsContainer));  
  info = JSON.parse(localStorage.getItem("projects"));
  message("Updated!", "create");

}

function updateCompletedTasksStorage() {
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}

function getInfo() {
    info = JSON.parse(localStorage.getItem("projects"))
    return info
}

function getCompletedTask() {
  completedActivities = JSON.parse(localStorage.getItem("completedTasks"))
  return completedActivities;
}

export {
  updateStorage,
  info,
  getInfo,
  updateCompletedTasksStorage,
  getCompletedTask,
}