
function Api(data) {

  return fetch('http://api.geonames.org/geoCodeAddressJSON?username=theprincemohit&q='+data)
  .then(response => response.json())
  .then(data =>data);

}

export default Api;
