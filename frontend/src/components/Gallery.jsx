import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Cocktail from './Cocktail';

function Gallery() {

    const [cocktails, setCocktails] = useState(null);

    const getCocktails = async () => {

        const response = await fetch("http://localhost:3001/cocktails");
        const responseJSON = await response.json();
        setCocktails(responseJSON);
    }

    useEffect(() => {
        getCocktails();
    }, []);

    return (
        <Layout>
            <h1>Welcome to our gallery. Feel free to browse</h1>
            <>
                {cocktails && cocktails.map(({ id, name, howto, ingredients, image }) => <Cocktail key={id} id={id} name={name} howto={howto} ingredients={ingredients} image={image} />
                )}
            </>
        </Layout>
    )
}

export default Gallery