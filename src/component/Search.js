import datalist from '../search-list.json'
import SearchInput from './SearchInput'
import List from './List'
import { useState } from 'react';


function Search() {
  const [name, setName] = useState('');
  const [result, setResult] = useState([]);
  const [Isloading, setIsloading] = useState(false)
  const getData = () => {
    return datalist.filter((data) => data.name.toLowerCase().includes(name.toLowerCase()))
  }

  const handleSubmit = async () => {
    if(name.length == 0)
    {
      alert('Please Enter Name');
      return false;
    }
    setIsloading(true)
    const filterdata = await getData()
    await setResult(filterdata)
    await setIsloading(false)
  }
  const handleInput = (e) => {
   
    setName(e.target.value);
  }
  return (
    <div>
        
      <SearchInput
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      ></SearchInput>
      {
        (Isloading) ? 'Fetching Data...' : 

        <List resultdata={result}></List>
      }
      
    </div>
  );
}

export default Search;
