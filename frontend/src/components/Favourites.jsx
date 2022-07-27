import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Cocktail from './Cocktail';

function Favourites() {

    const [cocktails, setCocktails] = useState(null);

    const getCocktails = async () => {

        const response = await fetch('http://localhost:3001/cocktails');
        const responseJSON = await response.json();
        setCocktails(responseJSON);
    }

    useEffect(() => {
        getCocktails();
    }, []);



    return (
    <Layout>
        <div className='gallery-wrapper'>
            <h1>Here you find your favourite cocktails!</h1>
            <div className='cocktails-wrapper'>
                {cocktails && cocktails.map(({ id, name, howto, ingredients, image, favourite }) => favourite === 'true' && <Cocktail key={id} id={id} name={name} howto={howto} ingredients={ingredients} image={image} favourite={favourite} />
                )}
            </div>
        </div>
    </Layout>
    )
}

export default Favourites