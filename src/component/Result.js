function Result(props) {
  return (
    <div>
     
        <table class="table table-bordered">
    <thead>
      <tr className="bg-primary">
        <th>Id</th>
        <th>Nane</th>
        <th>gender</th>
      </tr>
    </thead>
    <tbody>
      {
        (props.resultdata.length > 0) ?
        props.resultdata.map((data)=> {
          return (
            <tr>
            <td>{data._id}</td>
            <td>{data.name}</td>
            <td>{data.gender}</td>
          </tr>
          )
        })
        : <tr><td>No Data Found</td></tr>
      }
     
      
    </tbody>
  </table>
    </div>
  );
}

export default Result;
