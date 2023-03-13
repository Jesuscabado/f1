encodeURI("https://www.formula1.com/en/drivers.html");
let driverName = result.Driver.givenName;
let driverFamilyName = result.Driver.familyName;
let param = encodeURIComponent(givenName & familyName);
let url = "https://www.formula1.com/en/drivers/" + param + ".html";
console.log(url);