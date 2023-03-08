fetch('http://ergast.com/api/f1/2023/drivers.json')
  .then(response => response.json())
  .then(data => {
    const drivers = data.MRData.DriverTable.Drivers;
    drivers.forEach(driver => {
      crearPilotos( driver.givenName + ' ' + driver.familyName, driver.driverId, driver.nationality);
    });
  })
  .catch(error => {
    console.log(error);
  });

function crearPilotos(nombre, pais, id){
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    li.innerText = nombre;
    li1.innerText = pais;
    li2.innerText = id
    ul.appendChild(li);
    ul.appendChild(li1);
    ul.appendChild(li2);
    document.getElementById("pilots").appendChild(ul);
}