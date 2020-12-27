import Api from '../services/Api'
import SearchInput from './SearchInput'
import List from './List'
import History from './History'
import { useState } from 'react';


function Search() {
  const [name, setName] = useState('');
  const [result, setResult] = useState([]);
  const [Isloading, setIsloading] = useState(false)
  const [history, setHistory] = useState([])
  const getHistoryData = (name) => {
     return history.filter((data) =>  (data[name]))
  }


  const handleSubmit = async () => {
    if(name.length == 0)
    {
      alert('Please Enter Name');
      return false;
    }
    setIsloading(true)
     
    const CheckHistory = await getHistoryData(name);
     
    if(CheckHistory.length > 0)
    {
      
      await setResult(CheckHistory[0][name])
      
    }
    else
    {
      
      const filterdata = await Api(name)
      await setResult(filterdata)
      if(filterdata.address)
      {
        
        await setHistory([...history, {[name] : filterdata} ]);
         
      }
      
      }
    
    await setIsloading(false)
  }
  const handleInput = (e) => {
   
    setName(e.target.value);
  }
  return (
    <div>
        <History history={history}></History>
      <SearchInput
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      ></SearchInput>
      {console.log('historyv123v',history)
      }
      {  
        (Isloading) ? 'Fetching Data...' : 

        <List resultdata={result}></List>
      }
      
    </div>
  );
}

export default Search;
