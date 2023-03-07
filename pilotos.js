fetch('http://ergast.com/api/f1/2023/drivers.json')
  .then(response => response.json())
  .then(data => {
    const drivers = data.MRData.DriverTable.Drivers;
    drivers.forEach(driver => {
      crearPilotos(driver.givenName + ' ' + driver.familyName + ' ' + driver.nationality);
    });
  })
  .catch(error => {
    console.log(error);
  });

function crearPilotos(contenido){
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.innerText = contenido;
    ul.appendChild(li);
    document.getElementById("pilots").appendChild(ul);
}