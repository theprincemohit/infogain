function InputField(props) {
  return (
    <div className="panel panel-primary">
      <div class="panel-heading">Search Form</div>
        <div className="panel-body">
        <form>
        <div className="form-group">
            <label htmlFor="name">Enter Name:</label>
            <input type="text" className="form-control" id="name" onChange={props.handleInput} />
        </div>
        <button type="button" className="btn btn-default" onClick={props.handleSubmit}>Submit</button>
        </form> 

        </div>
        
    </div>
  );
}

export default InputField;
