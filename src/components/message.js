// This will respond for showing a message when a task is complete.

import createComponent from "./elements";
/**
     * Used to show a pop up message, when different action are completed, such as:
     *  - creating a project/task.
     *  - deleting a project/task.
     *  - completing a task.
     * 
     * The function has two parameters:
     *  @param {String} msg  write a specific message, depending on the action.
     *  @param {String} type , write either "delete" or "create", this will give different backgroundColor for each instance. 
     */
export default function message(msg, type) {
    
    const msgContainer = createComponent("div", "notify", msg);
    if (type.toLowerCase() === "delete")
    {
        msgContainer.style.backgroundColor = "#f87171";
    } else if(type.toLowerCase() === "create")
    {
        msgContainer.style.backgroundColor = "#a3e635";
    }
   
    document.body.append(msgContainer);
    destroyMessage(msgContainer);
}

function destroyMessage(msgContainer) {
    setTimeout(() => { 
        document.body.removeChild(msgContainer)
     }, 2000);
}