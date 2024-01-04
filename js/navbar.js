const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}
 
showMenu('nav-toggle','nav-menu')

const navbar = document.querySelector(".header")
window.onscroll = () =>{
    this.scrollY > 20 ? navbar.classList.add("pulled") : navbar.classList.remove("pulled");
}