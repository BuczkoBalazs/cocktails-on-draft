import React, { useState } from 'react';

function Cocktail({ id, name, howto, ingredients, image, favourite }) {

  const [fav, setFav] = useState(favourite === 'true' ? true : false);

  const favouriteToggle = async () => {
    await fetch('http://localhost:3001/add-fav', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        favourite: !fav
      })
    })
    setFav(!fav)
  };

  return (
    <div className='cocktail-wrapper' key={id}>
        <div className='base-info'>
            <h3>{name}</h3>
            {fav === true ?
              <button className='fav-button' onClick={favouriteToggle}>Favourite</button> :
              <button className='fav-button' onClick={favouriteToggle}>Not favourite</button>
            }
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