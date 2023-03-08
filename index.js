document.getElementById("buscadorF1").addEventListener("keyup",filtrarF1);

function filtrarF1(){
    console.log(document.getElementById("buscadorF1"));
    let text = document.getElementById("buscadorF1").value;
    let section = document.getElementById("drivers");
    let titulos = section.querySelectorAll("ul > li");
    titulos = [...titulos]; //titulos = Array.from(titulos);
    let titulosFiltrados = titulos.filter(nombre => nombre.innerText.toLowerCase().includes(text) );
 
    titulos.forEach( nombre =>{  
        let ul = nombre.parentElement;
        ul.style.display = "none";
        console.log(nombre.innerText.toLowerCase() + " " +text);
        
    }) 
    titulosFiltrados.forEach (nombre => {  //borra los otros elementos
        let ul = nombre.parentElement;
        ul.style.display = "block";
    });  
}

let menuVer = false;
//funcion que oculta o muestra el menu
function mostrarOocultarmenu(){
    if(menuVer){
        document.getElementById("barrainicio").classList = "";
        menuVer = false;
    }else{
        document.getElementById("barrainicio").classList = "titulos";
        menuVer = true;
    }
}
//ocultar menu una vez selecionas una opcion
function seleccionar(){
    document.getElementById("barrainicio").classList = "";
    menuVer = false;

}
