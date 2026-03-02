document.querySelector(".btn-theme").addEventListener("click", toggleTheme)

function setDefaultTheme() {
    const themeDark = localStorage.getItem("themeDark")
    if (!themeDark) {
        localStorage.setItem("themeDark", "on")
    } else if (themeDark == "off") {
        document.body.classList.add("light")
    }
}

function toggleTheme() {
    const themeDark = localStorage.getItem("themeDark") == "on" ? "off" : "on"
    localStorage.setItem("themeDark", themeDark)
    document.body.classList.toggle("light")
}

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

setDefaultTheme()
enableControls()
