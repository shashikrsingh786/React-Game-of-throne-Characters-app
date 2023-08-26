import React from 'react'
import CharacterItems from './CharacterItems';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({items, isLoading}) => {
  console.log("hi");
  console.log(items);
  return isLoading ? <Spinner /> : <section className="cards"> 
    {items.map(item => (
      <CharacterItems key = {item.id} item = {item}/>
    ))}
  </section>
}

export default CharacterGrid;