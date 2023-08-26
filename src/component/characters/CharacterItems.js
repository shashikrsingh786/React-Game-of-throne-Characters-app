import React from 'react'

const CharacterItems = ({item}) => {
  return (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={item.imageUrl} alt='' />
      </div>
      <div className='card-back'>
        <h1>{item.name}</h1>
        <ul>
          <li>
            <strong>Family:</strong> {item.family}
          </li>
          <li>
            <strong>Name:</strong> {item.fullName}
          </li>
          <li>
            <strong>Title:</strong> {item.title}
          </li>
          </ul>
      </div>
    </div>
  </div>
  )
}

export default CharacterItems;