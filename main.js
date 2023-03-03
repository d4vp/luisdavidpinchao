// seleccionar
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}
let menuVisible = false;
// Funcion que oculta y muestra el menu

function mostrarOcultarMenu() {
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // ocuñtar menu una vez seleccionado una opccion
    document.getElementById("nav").classList = "";
    menuVisible = false
}

// Animacion de skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        // habilidades[3].classList.add("wordpress");
        habilidades[3].classList.add("php");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        // habilidades[8].classList.add("dedicacion");
        // habilidades[9].classList.add("proyect");
    }
}

// Detectar el scrolling para aplicar animacion de habilidades
window.onscroll = function(){
    efectoHabilidades();
}