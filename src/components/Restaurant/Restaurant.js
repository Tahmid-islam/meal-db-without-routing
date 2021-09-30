import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Restaurant.css";

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  const handleSearchField = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };
  return (
    <div>
      <input
        className="restaurant-menu"
        onChange={handleSearchField}
        placeholder="Search meals here"
        type="text"
      />

      {!meals ? (
        <h2 style={{ margin: "0 auto" }}>No Result Found</h2>
      ) : (
        <div className="meals-container">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </div>
      )}
    </div>
  );
};

export default Restaurant;
