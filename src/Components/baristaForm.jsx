import React, {Component, useState} from "react";
import RecipeChoices from "./recipeChoices";
import drinksJson from "./drinks.json"

const BarsitaForm = () =>{

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': '' 
    });

    const [currentDrink, setCurrentDrink] = useState("");
    const [trueRecipe, setTrueRecipe] = useState({});

    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
      
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
      
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
      
        'blended': ['yes', 'turbo', 'no']
    }

    const onCheckAnswer = () => {};

    
    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' });
            
          getNextDrink();
    };

    const getNewDrink = () =>{
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);

        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    }
    return(
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button
                    type="new-drink-button"
                    className="button newdrink"
                    onClick={onNewDrink}
                >
                    🔄
                </button>
            </div>
            <form>
                <div className="mini-container">
                    <h3>Temperature</h3>
                    <div className="answer-space">
                        {inputs["temperature"]}
                    </div>
                    <RecipeChoices
                        handleChange={ (e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="temperature"
                        choices={ingredients["temperature"]}
                        checked={inputs["temperature"]}
                    />
                </div>
                <div className="mini-container">
                    <h3>Syrup</h3>
                    <div className="answer-space">
                        {inputs["syrup"]}
                    </div>
                    <RecipeChoices
                        handleChange={ (e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="syrup"
                        choices={ingredients["syrup"]}
                        checked={inputs["syrup"]}
                    />
                </div>
                <div className="mini-container">
                    <h3>Milk</h3>
                    <div className="answer-space">
                        {inputs["milk"]}
                    </div>
                    <RecipeChoices
                        handleChange={ (e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="milk"
                        choices={ingredients["milk"]}
                        checked={inputs["milk"]}
                    />
                </div>
                <div className="mini-container">
                    <h3>Blended</h3>
                    <div className="answer-space">
                        {inputs["blended"]}
                    </div>
                    <RecipeChoices
                        handleChange={ (e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="blended"
                        choices={ingredients["blended"]}
                        checked={inputs["blended"]}
                    />
                </div>



            </form>
            <button type="submit" className="button submit" onClick={onCheckAnswer}>Check Answer</button>

            <button type="new-drink-button" className=" button newdrink" onClick={onNewDrink}>New Drink</button>

           
        </div>
    )
}

export default BarsitaForm;