import React from 'react';
import got from '../../img/got.png';

const Header = () => {
  return (
    <header className='center'>
        <img src = {got} alt = 'game of thrones' height={120} width={100}/>
    </header>
  )
}

export default Header;