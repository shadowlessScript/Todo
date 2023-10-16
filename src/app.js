import "./components/assets/style.css";
import landingPage from "./components/menuHelpers";
import mainPage from "./components/mainPage";
// import project from "./components/project.js";

const main = document.createElement("main")
main.classList.add("main-container")

function start() {

    main.appendChild(mainPage())

    document.body.append(main);
    // if (storageAvailable("localStorage")) {
    //     console.log("It possible")
    // } else {
    //     console.log("Not possible")
    // }
}
start()

// console.log(localStorage.getItem("projects"))


export {
    main
}