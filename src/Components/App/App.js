import React from 'react';
import './App.scss';
import Filter from '../filter/filter';
import Tabs from '../tabs/tabs';
import icon from '../../Logo.svg';

function App() {
  return (
    <div className='app'>
      <div className='icon'>
        <img src={icon} alt='aviasales' />
      </div>
      <div className='menu'>
        <Filter />
        <Tabs />
      </div>
    </div>
  );
}

export default App;
