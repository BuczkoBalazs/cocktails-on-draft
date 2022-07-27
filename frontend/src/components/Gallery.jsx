import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Cocktail from './Cocktail';

function Gallery() {

    const [cocktails, setCocktails] = useState(null);
    const [searchInput, setSearchInput] = useState("")

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
                <h1>Welcome to our gallery. Feel free to browse</h1>
                <div className='filters'>
                    <label for="search">Search by name</label>
                    <input type="text" name="search" id="search" value={searchInput} onChange={ (e) => setSearchInput(e.target.value) } />
                </div>
                <div className='cocktails-wrapper'>
                    {cocktails && cocktails.map(({ id, name, howto, ingredients, image }) => name.toLowerCase().includes(searchInput.toLowerCase()) && <Cocktail key={id} id={id} name={name} howto={howto} ingredients={ingredients} image={image} />
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default Gallery