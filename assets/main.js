const refreshBtn = document.querySelector('#refresh')
const toggleBtn = document.querySelector('#toggle')
const clearBtn = document.querySelector('#clear')
const sun = document.querySelector('.fa-sun')
const moon = document.querySelector('.fa-moon')
const theme = localStorage.getItem("mode")

if (theme === "dark") {
    document.body.classList.add("dark")
    toggleBtn.checked = true;
}
else {
    toggleBtn.checked = false;
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')

    if (theme === "dark") {
        localStorage.setItem("mode", "light")
    }
    else {
        localStorage.setItem("mode", "dark")
    }

})

refreshBtn.addEventListener('click', () => {
    location.reload();
})

clearBtn.addEventListener("click", () => {
    localStorage.clear()
})