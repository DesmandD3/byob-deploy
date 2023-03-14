import { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Button from '@/components/Button';

export default function Results() {
  const [showCocktails, setShowCocktails] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('');

  const getRandomCocktails = async () => {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
    const data = await response.json();
    setCocktails(data.drinks);
    setShowCocktails(true);
  };

  const getRandomMocktail = async () => {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
    );
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.drinks.length);
    const randomMocktail = data.drinks[randomIndex];
    setCocktails([randomMocktail]);
    setShowCocktails(true);
  };

  const searchCocktail = async () => {
    let url;
    if (searchType === 'ingredient') {
      url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`;
    } else if (searchType === 'name') {
      url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    setCocktails(data.drinks);
    setShowCocktails(true);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Results</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main1}>
        <h1 className={styles.h1}>YOUR SEARCH</h1>
        {searchType === 'ingredient' && (
          <h2 className={styles.h2}>INGREDIENT: "{searchInput}"</h2>
        )}
        {searchType === 'name' && (
          <h2 className={styles.h2}>NAME: "{searchInput}"</h2>
        )}

        <div className={styles.buttons}>
          <Button labeltxt="Random Cocktails" onClick={getRandomCocktails} />
          <Button labeltxt="Random Mocktail" onClick={getRandomMocktail} />
        </div>

        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search by ingredient or name"
            value={searchInput}
            onChange={handleInputChange}
          />
          <select value={searchType} onChange={handleSelectChange}>
            <option value="">Select Search Type</option>
            <option value="ingredient">Ingredient</option>
            <option value="name">Name</option>
          </select>
          <Button labeltxt="Search" onClick={searchCocktail} />
        </div>

        {showCocktails
