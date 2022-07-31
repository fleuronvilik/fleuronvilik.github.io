document
    .querySelector(".btn-theme")
    .addEventListener("click", function toggleTheme() {
        const themeDark = localStorage.getItem("themeDark")
        if (!themeDark) {
            localStorage.setItem("themeDark", "off")
        } else {
            localStorage.setItem("themeDark", themeDark == "on" ? "off" : "on")
        }
        document.body.classList.toggle("light")
    })

function enableControls() {
    const controlElts = document.querySelectorAll(".control")
    controlElts.forEach(btn => {
        btn.addEventListener("click", changeActiveSection)
    })

    function changeActiveSection() {
        const activeBtn = document.querySelector(".control.active")
        activeBtn.classList.remove("active")
        this.classList.add("active")

        const newActiveSection = document.getElementById(this.dataset.target)
        const previouslyActive = document.querySelector(".section.active")
        previouslyActive.classList.remove("active")
        newActiveSection.classList.add("active")
    }
}

enableControls()
