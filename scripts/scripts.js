const projectDiv = document.getElementById("projects-div");
const projectContainer = document.getElementById("project-superContainer");

function changeClass() {
        projectContainer.classList.toggle("project-superContainer");
        projectContainer.classList.toggle("project-superContainer-hidden")
}

projectDiv.addEventListener("click", changeClass);