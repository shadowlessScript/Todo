import "./components/assets/style.css";
import landingPage from "./components/landingPage";
import mainPage from "./components/mainPage";
// import project from "./components/project.js";

const main = document.createElement("main")
main.classList.add("main-container")

function start() {

    main.appendChild(mainPage())

    document.body.append(main);

}
start()

export {
    main
}