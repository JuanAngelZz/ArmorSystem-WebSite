

const textContainer = document.querySelector(".text-container");
const servicesContainer = document.querySelector(".services");
const aboutUs1 = document.querySelector(".about-us__cont");
const aboutUs2 = document.querySelector(".about-us__cont--reverse");
const contactCopy = document.querySelector(".contact__copy");
const contactIcons = document.querySelector(".contact__icons");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const pages = document.querySelector(".page");
const prevButton = document.querySelector(".gallery__prev");
const nextButton = document.querySelector(".gallery__next");

//Animacion principal
addEventListener("load", ()=>{
    textContainer.classList.add("active");
})

//Animaciones por secciones
addEventListener("scroll", ()=>{
    let posicion1 = servicesContainer.getBoundingClientRect().top;
    let winHeight = window.innerHeight/1.4;
    
    if(posicion1 < winHeight){
        servicesContainer.classList.add("active");
    }

    let posicion2 = aboutUs1.getBoundingClientRect().top;
    if(posicion2 < winHeight){
        aboutUs1.classList.add("active");
    }

    let posicion3 = aboutUs2.getBoundingClientRect().top;
    if(posicion3 < winHeight){
        aboutUs2.classList.add("active");
    }

    let posicion4 = contactCopy.getBoundingClientRect().top;
    if(posicion4 < winHeight){
        contactCopy.classList.add("active");
    }

    let posicion5 = contactIcons.getBoundingClientRect().top;
    if(posicion5 < winHeight){
        contactIcons.classList.add("active");
    }

    let posicion6 = page1.getBoundingClientRect().top;
    if(posicion6 < winHeight && !page2.classList.contains('active')){
        page1.classList.add("active");
    }
})

//Galeria

nextButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let page1Active = page1.classList.contains('active');
    let page2Active = page2.classList.contains('active');

    if(page1Active){
        page1.classList.remove('active');
        page2.classList.add('active');
    }else if(page2Active){
        page2.classList.remove('active');
        page1.classList.add('active');
    }
})

prevButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let page1Active = page1.classList.contains('active');
    let page2Active = page2.classList.contains('active');

    if(page1Active){
        page1.classList.remove('active');
        page2.classList.add('active');
    }else if(page2Active){
        page2.classList.remove('active');
        page1.classList.add('active');
    }
})