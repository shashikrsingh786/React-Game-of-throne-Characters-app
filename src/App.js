import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/ui/Header';
import axios from 'axios';
import CharacterGrid from './component/characters/CharacterGrid';
import Pagination from './component/Pagination';


function App() {



  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentpage] = useState(1);
  const postsPerPage = 8;


const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = items.slice(indexOfFirstPost,indexOfLastPost);

const paginate = (pageNumbers) => setCurrentpage(pageNumbers);



useEffect(() => {
  const fetchItems = async () => {
   const result = await axios(
      `https://thronesapi.com/api/v2/Characters`
    )
    setItems(result.data);
    setLoading(false);
  }
  fetchItems();
},[]);

  return (
    <>
    <Header />
    <CharacterGrid  isLoading = {isLoading} items = {currentPosts}/>
    <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate}/>

    </>
  );
}

export default App;
