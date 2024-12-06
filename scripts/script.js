const menuButton = document.querySelector("header button")
const deNav = document.querySelector("header nav:nth-of-type(2)")
const deSluit = document.querySelector("header nav:nth-of-type(2) button")

menuButton.onclick = toggleMenu 
deSluit.onclick = toggleMenu

function toggleMenu() {
    deNav.classList.toggle("open")
}