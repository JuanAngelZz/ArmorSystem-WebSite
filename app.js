

const textContainer = document.querySelector(".text-container")
const servicesContainer = document.querySelector(".services")
const aboutUs1 = document.querySelector(".about-us__cont")
const aboutUs2 = document.querySelector(".about-us__cont--reverse")
const contactCopy = document.querySelector(".contact__copy")
const contactIcons = document.querySelector(".contact__icons")

//Animacion principal
addEventListener("load", ()=>{
    textContainer.classList.add("active")
})

//Animaciones por secciones
addEventListener("scroll", ()=>{
    let posicion1 = servicesContainer.getBoundingClientRect().top;
    let winHeight = window.innerHeight/1.4;
    
    if(posicion1 < winHeight){
        servicesContainer.classList.add("active")
    }

    let posicion2 = aboutUs1.getBoundingClientRect().top;
    if(posicion2 < winHeight){
        aboutUs1.classList.add("active")
    }

    let posicion3 = aboutUs2.getBoundingClientRect().top;
    if(posicion3 < winHeight){
        aboutUs2.classList.add("active")
    }

    let posicion4 = contactCopy.getBoundingClientRect().top;
    if(posicion4 < winHeight){
        contactCopy.classList.add("active")
    }

    let posicion5 = contactIcons.getBoundingClientRect().top;
    if(posicion5 < winHeight){
        contactIcons.classList.add("active")
    }
})
