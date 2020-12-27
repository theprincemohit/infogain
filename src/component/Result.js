function Result(props) {
  const {resultdata} =  props
  return (
    <div>
     
        <table class="table table-bordered">
    <thead>
      <tr className="bg-primary">
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Street</th>
        <th>Country Code</th>
        <th>Postal Code</th>
      </tr>
    </thead>
    <tbody>
      {
        (resultdata.address) ?
        
        
         
            <tr>
            <td>{resultdata.address.lat}</td>
            <td>{resultdata.address.lat}</td>
            <td>{resultdata.address.street}</td>
            <td>{resultdata.address.countryCode}</td>
            <td>{resultdata.address.postalcode}</td>
          </tr>
         
        : <tr><td>No Data Found</td></tr>
      }
     
      
    </tbody>
  </table>
    </div>
  );
}

export default Result;
