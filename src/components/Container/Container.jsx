import React from 'react';
import './Container.css';
import CardsList from '../../data/CardsList';
import Entry from './Entry';
 

function createEntry(cardItem) {
    return (
      <Entry
        key={cardItem.id}
        img={cardItem.img}
        name={cardItem.name}
      />
    );
}

function Container(){
 
     return (
      <div>
      <div className = "heading"><h1>Choose your Sport !!!</h1></div>
      <div className="container">
    
      {CardsList.map(createEntry)}
      </div>
      </div>
     );
}

export default Container;
