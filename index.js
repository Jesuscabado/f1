document.getElementById("buscadorF1").addEventListener("keyup",filtrarF1);

function filtrarF1(){
    
    let text = document.getElementById("buscadorF1").value;
    let section = document.getElementById("f1");
    let titulos = section.querySelectorAll("ul > li");
    titulos = [...titulos]; //titulos = Array.from(titulos);
    let titulosFiltrados = titulos.filter(nombre => !nombre.innerText.toLowerCase().includes(text));

     titulos.forEach( nombre=>{
        let ul = nombre.parentElement;
        ul.style.display = "block";
    }) 
    titulosFiltrados.forEach (nombre => {  //borra los otros elementos
        let ul = nombre.parentElement;
        ul.style.display = "none";
    });  
}