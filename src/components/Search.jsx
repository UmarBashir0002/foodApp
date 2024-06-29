import { useState } from "react";
import { useEffect } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "8d6792507ff749bf8589d9000d1173a9";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  // Syntax of useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
      ></input>
    </div>
  );
}
