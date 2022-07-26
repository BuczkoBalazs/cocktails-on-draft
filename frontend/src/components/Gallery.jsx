import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Cocktail from './Cocktail';

function Gallery() {

    const [cocktails, setCocktails] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [sortByName, setSortByName] = useState('asc');
    const [sortButton, setSortButton] = useState('Sort ascending')

    const getCocktails = async () => {

        const response = await fetch('http://localhost:3001/cocktails');
        const responseJSON = await response.json();
        setCocktails(responseJSON);
    }

    useEffect(() => {
        getCocktails();
    }, []);


    const inputChangeHandle = (e) => setSearchInput(e.target.value);

    function sortButtonChangeHandle() {
        setCocktails([...cocktails.sort( (a,b) => sortByName === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))]);
        setSortByName(sortByName === 'asc' ? 'desc' : 'asc');
        setSortButton(sortButton === 'Sort ascending' ? 'Sort descending' : 'Sort ascending')
    }

    return (
        <Layout>
            <div className='gallery-wrapper'>
                <h1>Welcome to our gallery! Feel free to browse.</h1>
                <div className='filters'>
                    <label for="search">Search by name</label>
                    <input type="text" name="search" id="search" value={searchInput} onChange={inputChangeHandle} />
                    <button className='sort-by-name' onClick={sortButtonChangeHandle} >{sortButton}</button>
                </div>
                <div className='cocktails-wrapper'>
                    {cocktails && cocktails.map(({ id, name, howto, ingredients, image, favourite }) => name.toLowerCase().includes(searchInput.toLowerCase()) && <Cocktail key={id} id={id} name={name} howto={howto} ingredients={ingredients} image={image} favourite={favourite} />
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default Gallery