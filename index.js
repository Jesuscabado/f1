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

/* function filterList() {
    var input, filter, ul, li, txtValue;
    input = document.getElementById("buscadorF1");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ul");
    li = ul.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  } */