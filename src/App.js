import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/ui/Header';
import axios from 'axios';
import CharacterGrid from './component/characters/CharacterGrid';

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

useEffect(() => {
  const fetchItems = async () => {
   const result = await axios(
      `https://thronesapi.com/api/v2/Characters`
    )
    console.log(result.data);
    setItems(result.data);
    setLoading(false);
  }
  fetchItems();
},[]);

  return (
    <>
    <Header />
    <CharacterGrid  isLoading = {isLoading} items = {items}/>

    </>
  );
}

export default App;
