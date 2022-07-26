import React, { useState, useEffect } from 'react';
import Layout from './Layout';

function Gallery() {

    const [cocktails, setCocktails] = useState([]);

    async function getCocktails() {

        const response = await fetch("http://localhost:3001/cocktails");
        const responseJSON = await response.json();
        setCocktails(responseJSON);
    }

    useEffect(() => {
        getCocktails()
      }, []);

    return (
        <Layout>
            QWERTY
        </Layout>
    )
}

export default Gallery