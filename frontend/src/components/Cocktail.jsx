import React from 'react';

function Cocktail({ id, name, howto, ingredients, image, favourite }) {
  return (
    <div className='cocktail-wrapper' key={id}>
        <div className='base-info'>
            <h3>{name}</h3>
            <img src={image} alt={name} />
        </div>
        <div className='extended-info'>
            <p>{howto}</p>
            <p>{ingredients}</p>
        </div>
    </div>
  )
}

export default Cocktail