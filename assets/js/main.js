let burger = document.querySelector(".burger")
let menuVisible = false;
burger.addEventListener('click', () => {
    if (menuVisible === false) {
        menuVisible = true
        document.querySelector("nav").style.display = "block"
    } else {
        menuVisible = false
        document.querySelector("nav").style.display = "none"
    }
})