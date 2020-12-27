function History(props) {
    return (
        <div className="panel panel-primary">
            <div class="panel-heading">Last Search History</div>
            <div className="panel-body">
                <ul class="list-group">
              
                    { 
                        (props.history.length > 0)
                        ?
                        
                        props.history.map((data) => {
                                return <li class="list-group-item">{Object.keys(data)}</li>
                                
                        })
                        
                        :
                        <li class="list-group-item">No Past History</li>
                    }
                    
                </ul>

            </div>

        </div>
    );
}

export default History;
