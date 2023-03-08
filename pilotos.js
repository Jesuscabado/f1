fetch('http://ergast.com/api/f1/2023/drivers.json')
  .then(response => response.json())
  .then(data => {
    const drivers = data.MRData.DriverTable.Drivers;
    drivers.forEach(driver => {
      crearPilotos( driver.givenName + ' ' + driver.familyName, driver.permanentNumber, driver.nationality);
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
    createPost(nombre,pais,numero);
    document.getElementById("f1").reset();
  }

  function crearPilotos(nombre, pais, numero){
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    li.innerText = nombre;
    li1.innerText = pais;
    li2.innerText = numero;
    ul.appendChild(li);
    ul.appendChild(li1);
    ul.appendChild(li2);
    document.getElementById("drivers").appendChild(ul);
}