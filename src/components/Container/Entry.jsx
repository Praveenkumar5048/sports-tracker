import React from 'react';
import { NavLink } from 'react-router-dom';

function Entry(props) {
    return (
      <div className="card">
        <img src={props.img} alt='game' />
        <h4>{props.name}</h4>
        <NavLink to={`/${props.name}`}><button>Click</button></NavLink>
     
      </div>
    );
  }




export default Entry;