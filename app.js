const sectionElts = document.querySelectorAll("section");
const navigationElt = document.querySelector(".controls");
const navBtns = document.querySelectorAll(".control");
const container = document.querySelector(".container");
const btnTheme = document.querySelector(".btn-theme");

btnTheme.addEventListener("click", function toggleTheme() {
    document.body.classList.toggle("light")
})

function switchPage() {
    // change active navbar button
    navBtns.forEach(btn => {
        btn.addEventListener("click", switchActive)
    })

    // section
    // sectionElts.addEventListener("")
}

function switchActive() {
    const activeBtn = document.querySelector(".control.active");
    activeBtn.classList.remove("active");
    this.classList.add("active");

    const newActiveSection = document.getElementById(this.dataset.target);
    const previouslyActive = document.querySelector(".section.active");
    previouslyActive.classList.remove("active");
    newActiveSection.classList.add("active");
}

switchPage()
