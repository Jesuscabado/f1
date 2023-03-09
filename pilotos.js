fetch('http://ergast.com/api/f1/2023/drivers.json')
  .then(response => response.json())
  .then(data => {
    const drivers = data.MRData.DriverTable.Drivers;
    drivers.forEach(driver => {
      crearPilotos( driver.givenName + ' ' + driver.familyName, driver.permanentNumber, driver.nationality, driver.code);
    });
  })
  .catch(error => {
    console.log(error);
  });

  function createF1Event(evento) {
    evento.preventDefault();
    let nombre = document.getElementById("nombre").value.trim();
    let pais = document.getElementById("pais").value.trim();
    let numero = document.getElementById("numero").value.trim();
    crearPilotos(nombre,pais,numero);
    document.getElementById("drivers").reset();
  }

  function crearPilotos(nombre, pais, numero,id){
    let ul = document.createElement("ul");
     ul.setAttribute("id", id); 
    let li = document.createElement("li");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let img= document.createElement("img");
    img.setAttribute("src",`image/${id}.png`);
    li.innerText = nombre;
    li1.innerText = pais;
    li2.innerText = numero;
    li3.appendChild(img);
    ul.appendChild(li);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    document.getElementById("drivers").appendChild(ul);
    

  }


