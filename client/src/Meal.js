import fireHawk from './images/FireHawkB.png';
import React, { Component } from 'react'
var axios = require("axios");

export default class Meal extends Component {
    //keep state here
    constructor() {
        super()
        this.state = {
            meal: null,
        }
    }
    componentDidMount() {
        axios({
            method: "GET",
            url: "/meals",
            params: this.props.location.state
        })
            .then(response => {
                const meals = response.data;
                this.setState({ meal: meals[Math.floor(Math.random() * meals.length)] })
                //this is where, whith Sam, I pulled one random meal from all of the search results
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    render() {
        // const { history } = this.props;
        const { meal } = this.state;
        const selections = this.props.location.state
        let intentWord = "";
        switch (selections.intent) {
            case "maintain":
                intentWord = "maintaining";
                break;
            case "gains":
                intentWord = "getting gains";
                break;
            case "fat loss":
                intentWord = "losing weight";
                break;
            default: 
                intentWord = "being healthy";
        }
        let youTubeLink = "";
        switch (selections.prep) {
            case "stir-fry":
                youTubeLink = "https://youtu.be/XVFkMIxE6MY"
                break;
            case "soup":
                youTubeLink = "link"
                break;
            case "casserole":
                youTubeLink = "link"
                break;
            case "baking":
                youTubeLink = "https://youtu.be/o4oT4PpyDPk"
                break;
            default: 
                youTubeLink = "";
        }
        let proteinMacros = "";
        if(meal){    //it has to wait until the response comes back from the get request
            if(selections.gender === "female"){
                if(meal.protein === "Chicken breast" && selections.intent === "fat loss"){
                    proteinMacros = "19 g protein, 0 g carb, 1.5 g fat, 120 calories";
                }else if(meal.protein === "Salmon" && selections.intent === "fat loss"){
                    proteinMacros = "19 g protein, 0 g carb, 9 g fat, 180 calories";  
                }else if(meal.protein === "Egg whites" && selections.intent === "fat loss"){
                    proteinMacros = "13 g protein, 0 g carb, 2 g fat, 60 calories";
                }else if(meal.protein === "Ground turkey" && selections.intent === "fat loss"){
                    proteinMacros = "17 g protein, 0 g carb, 6 g fat, 120 calories";
    
                }else if(meal.protein === "Chicken breast" && selections.intent === "maintain"){
                    proteinMacros = "26 g protein, 0 g carb, 2 g fat, 160 calories";
                }else if(meal.protein === "Salmon" && selections.intent === "maintain"){
                    proteinMacros = "28 g protein, 0 g carb, 2 g fat, 240 calories";  
                }else if(meal.protein === "Egg whites" && selections.intent === "maintain"){
                    proteinMacros = "19 g protein, 0 g carb, 3 g fat, 90 calories";
                }else if(meal.protein === "Ground turkey" && selections.intent === "maintain"){
                    proteinMacros = "22 g protein, 0 carb, 8 g fat, 160 calories";
    
                }else if(meal.protein === "Chicken breast" && selections.intent === "gains"){
                    proteinMacros = "39 g protein, 0 g carb, 3 g fat, 240 calories";
                }else if(meal.protein === "Salmon" && selections.intent === "gains"){
                    proteinMacros = "31 g protein, 0 g carb, 16 g fat, 310 calories";  
                }else if(meal.protein === "Egg whites" && selections.intent === "gains"){
                    proteinMacros = "26 g protein, 0 g carb, 4 g fat, 120 calories";
                }else if(meal.protein === "Ground turkey" && selections.intent === "gains"){
                    proteinMacros = "33 g protein, 0 g carb, 12 g fat, 240 calories";
                }

            }else if(selections.gender === "male"){
                if(meal.protein === "Chicken breast" && selections.intent === "fat loss"){
                    proteinMacros = "26 g protein, 0 g carb, 2 g fat, 160 calories";
                }else if(meal.protein === "Salmon" && selections.intent === "fat loss"){
                    proteinMacros = "26 g protein, 0 g carb, 14 g fat, 245 calories";  
                }else if(meal.protein === "Egg whites" && selections.intent === "fat loss"){
                    proteinMacros = "20 g protein, 0 g carb, 3 g fat, 90 calories";
                }else if(meal.protein === "Ground turkey" && selections.intent === "fat loss"){
                    proteinMacros = "22 g protein, 0 g carb, 8 g fat, 160 calories";

                }else if(meal.protein === "Chicken breast" && selections.intent === "maintain"){
                    proteinMacros = "32 g ptorein, 0 g carb, 2.5 g fat, 200 calories";
                }else if(meal.protein === "Salmon" && selections.intent === "maintain"){
                    proteinMacros = "26 g protein, 0 g carb, 10.5 g fat, 195 calories";  
                }else if(meal.protein === "Egg whites" && selections.intent === "maintain"){
                    proteinMacros = "32 g protein, 0 g carb, 5 g fat, 150 calories";
                }else if(meal.protein === "Ground turkey" && selections.intent === "maintain"){
                    proteinMacros = "27 g protein, 0 g carb, 10 g fat, 200 calories";

                }else if(meal.protein === "Chicken breast" && selections.intent === "gains"){
                    proteinMacros = "39 g protein, 0 g carb, 3 g fat, 240 calories";
                }else if(meal.protein === "Salmon" && selections.intent === "gains"){
                    proteinMacros = "30 g protein, 0 g carb, 15 g fat, 250 calories";  
                }else if(meal.protein === "Egg whites" && selections.intent === "gains"){
                    proteinMacros = "45 g protein, 0 g carb, 7 g fat, 210 calories";
                }else if(meal.protein === "Ground turkey" && selections.intent === "gains"){
                    proteinMacros = "33 g protein, 0 g carb, 12 g fat, 240 calories";
                }
            }
        }
        let veggieMacros = "";
        if(meal){
            if(selections.gender === "female"){
                console.log(meal);
                if(meal.veggie === "Spinach" && selections.intent === "fat loss"){
                    veggieMacros = "2 g protein, 2 g carb, 0 g fat, 14 calories";
                }else if(meal.veggie === "Broccoli" && selections.intent === "fat loss"){
                    veggieMacros = "6 g protein, 4 g carb, 1 g fat, 50 calories";  
                }else if(meal.veggie === "Zucchini" && selections.intent === "fat loss"){
                    veggieMacros = "1.5 protein, 4 g carb, 0 g fat, 20 calories ";
                }else if(meal.veggie === "Bell pepper" && selections.intent === "fat loss"){
                    veggieMacros = "0.5 g protein, 4 g carb, 0 g fat, 15 calories";

                }else if(meal.veggie === "Spinach" && selections.intent === "maintain"){
                    veggieMacros = "2 g protein, 2 g carb, 0 g fat, 14 calories";
                }else if(meal.veggie === "Broccoli" && selections.intent === "maintain"){
                    veggieMacros = "9 g protein, 6 g carb, 1.5 g fat, 75 calories";  
                }else if(meal.veggie === "Zucchini" && selections.intent === "maintain"){
                    veggieMacros = "2.5 g protein, 6 g carb, 0.5 g fat, 30 calories";
                }else if(meal.veggie === "Bell pepper" && selections.intent === "maintain"){
                    veggieMacros = "0.5 g protein, 4 g carb, 0 g fat, 15 calories";

                }else if(meal.veggie === "Spinach" && selections.intent === "gains"){
                    veggieMacros = "2 g protein, 2 g carb, 0 g fat, 14 calories";
                }else if(meal.veggie === "Broccoli" && selections.intent === "gains"){
                    veggieMacros = "12 g protein, 8 g carb, 2 g fat, 100 calories";  
                }else if(meal.veggie === "Zucchini" && selections.intent === "gains"){
                    veggieMacros = "3 g protein, 8 g carb, 0.5 g fat, 40 calories";
                }else if(meal.veggie === "Bell pepper" && selections.intent === "gains"){
                    veggieMacros = "0.5 g protein, 4 g carb, 0 g fat, 15 calories";
                }
            }else if(selections.gender === "male"){
                if(meal.veggie === "Spinach" && selections.intent === "fat loss"){
                    veggieMacros = "2 g protein, 2 g carb, 0 g fat, 14 calories";
                }else if(meal.veggie === "Broccoli" && selections.intent === "fat loss"){
                    veggieMacros = "12 g protein, 8 g carb, 2 g fat, 100 calories";  
                }else if(meal.veggie === "Zucchini" && selections.intent === "fat loss"){
                    veggieMacros = "3 g protein, 8 g carb, 0.5 g fat, 40 calories";
                }else if(meal.veggie === "Bell pepper" && selections.intent === "fat loss"){
                    veggieMacros = "0.75 g protein, 6 g carb, 0 g fat, 23 calories";
    
                }else if(meal.veggie === "Spinach" && selections.intent === "maintain"){
                    veggieMacros = "2 g protein, 2 g carb, 0 g fat, 14 calories";
                }else if(meal.veggie === "Broccoli" && selections.intent === "maintain"){
                    veggieMacros = "9 g protein, 6 g carb, 1.5 g fat, 75 calories";  
                }else if(meal.veggie === "Zucchini" && selections.intent === "maintain"){
                    veggieMacros = "2.25 g protein, 6 g carb, 0.3 g fat, 30 calories";
                }else if(meal.veggie === "Bell pepper" && selections.intent === "maintain"){
                    veggieMacros = "0.75 g protein, 6 g carb, 0 g fat, 22 calories";
    
                }else if(meal.veggie === "Spinach" && selections.intent === "gains"){
                    veggieMacros = "2 g protein, 2 g carb, 0 g fat, 145 calories";
                }else if(meal.veggie === "Broccoli" && selections.intent === "gains"){
                    veggieMacros = "12 g protein, 8 g carb, 2 g fat, 100 calories";  
                }else if(meal.veggie === "Zucchini" && selections.intent === "gains"){
                    veggieMacros = "3 g protein, 8 g carb, 0.5 g fat, 40 calories";
                }else if(meal.veggie === "Bell pepper" && selections.intent === "gains"){
                    proteinMacros = "0.75 g protein, 6 g carb, 0 g fat, 22 calories";
                }
            }
        }
        let carbMacros = "";
        if(meal){
            if(selections.gender === "female"){
                if(meal.carb === "Sweet potatoe" && selections.intent === "fat loss"){
                    carbMacros = "1.5 g protein, 29 g carb, 0 g fat, 120 calories";
                }else if(meal.carb === "Brown rice" && selections.intent === "fat loss"){
                    carbMacros = "4 g protein, 14 g carb, 0.7 g fat, 70 calories";  
                }else if(meal.carb === "Lentils" && selections.intent === "fat loss"){
                    carbMacros = "6 g protein, 14 g carb, 0.25 g fat, 85 calories";
                }else if(meal.carb === "Black beans" && selections.intent === "fat loss"){
                    carbMacros = "5 g prtein, 15 g carb, 0.25 g fat, 80 calories";

                }else if(meal.carb === "Sweet potato" && selections.intent === "maintain"){
                    carbMacros = "2 g protein, 38 g carb, 0.25 g fat, 160 calories";
                }else if(meal.carb === "Brown rice" && selections.intent === "maintain"){
                    carbMacros = "6 g protein, 21 g carb, 1 g fat, 100 calories";  
                }else if(meal.carb === "Lentils" && selections.intent === "maintain"){
                    carbMacros = "9 g protein, 20 g carb, 0.5 g fat, 113 calories";
                }else if(meal.carb === "Black beans" && selections.intent === "maintain"){
                    carbMacros = "7.5 g protein, 20 g carb, 0.5 g fat, 115 calories";

                }else if(meal.carb === "Sweet potato" && selections.intent === "gains"){
                    carbMacros = "3 g protein, 58 g carb, 0.3 g fat, 240 calories";
                }else if(meal.carb === "Brown rice" && selections.intent === "gains"){
                    carbMacros = "12 g protein, 42 g carb, 2 g fat, 200 calories";  
                }else if(meal.carb === "Lentils" && selections.intent === "gains"){
                    carbMacros = "18 g protein, 40 g carb, 1 g fat, 226 calories";
                }else if(meal.carb === "Black beans" && selections.intent === "gains"){
                    carbMacros = "15 g protein, 41 g carb, 1 g fat, 230 calories";
                }
            }else if(selections.gender === "male"){
                if(meal.carb === "Sweet potato" && selections.intent === "fat loss"){
                    carbMacros = "2 g protein, 38 g carb, 0.25 g fat, 160 calories";
                }else if(meal.carb === "Brown rice" && selections.intent === "fat loss"){
                    carbMacros = "9 g protein, 32 g carb, 1.5 g fat, 150 calories";  
                }else if(meal.carb === "Lentils" && selections.intent === "fat loss"){
                    carbMacros = "13.5 g protein, 30 g carb, 0.75 g fat, 168 calories";
                }else if(meal.carb === "Black beans" && selections.intent === "fat loss"){
                    carbMacros = "11 g protein, 32 g carb, 0.75 g fat, 178 calories";

                }else if(meal.carb === "Sweet potato" && selections.intent === "maintain"){
                    carbMacros = "3 g protein, 58 g carb, 0.3 g fat, 240 calories";
                }else if(meal.carb === "Brown rice" && selections.intent === "maintain"){
                    carbMacros = "12 g protein, 42 g carb, 2 g fat, 200 calories";  
                }else if(meal.carb === "Lentils" && selections.intent === "maintain"){
                    carbMacros = "18 g protein, 40 g carb, 1 g fat, 226 caloris";
                }else if(meal.carb === "Black beans" && selections.intent === "maintain"){
                    carbMacros = "15 g protein, 41 g carb, 1 g fat, 130 calories";

                }else if(meal.carb === "Sweet potato" && selections.intent === "gains"){
                    carbMacros = "8 g protein, 80 g carb, 0.5 g fat, 320 calories";
                }else if(meal.carb === "Brown rice" && selections.intent === "gains"){
                    carbMacros = "18 g protein, 63 g carb, 3 g fat, 300 calories";  
                }else if(meal.carb === "Lentils" && selections.intent === "gains"){
                    carbMacros = "27 g protein, 60 g carb, 1.5 g fat, 339 calories";
                }else if(meal.carb === "Black beans" && selections.intent === "gains"){
                    carbMacros = "22.5 g protein, 61.5 g carb, 1.5 g fat, 345 calories";
                }
            }
        }
        let fatMacros = "";
        if(meal){
            if(selections.gender === "female"){
                if(meal.fat === "Avocado" && selections.intent === "fat loss"){
                    fatMacros = "1 g protein, 5 g carb, 8.5 g fat, 90 calories";
                }else if(meal.fat === "Black olives" && selections.intent === "fat loss"){
                    fatMacros = "1.25 g protein, 5 g carb, 6 g fat, 70 calories";  
                }else if(meal.fat === "Coconut oil" && selections.intent === "fat loss"){
                    fatMacros = "0 g protein, 0 g carb, 9.5 g fat, 90 calories";
                }else if(meal.fat === "Raw almonds" && selections.intent === "fat loss"){
                    fatMacros = "3 g protein, 3 g carb, 7 g fat, 80 calories";
    
                }else if(meal.fat === "Avocado" && selections.intent === "maintain"){
                    fatMacros = "2 g protein, 10 g carb, 17 g fat, 180 calories";
                }else if(meal.fat === "Black olives" && selections.intent === "maintain"){
                    fatMacros = "2 g protein, 7.5 g carb, 9 g fat, 105 calories";  
                }else if(meal.fat === "Coconut oil" && selections.intent === "maintain"){
                    fatMacros = "0 g protein, 0 g carb, 14 g fat, 140 calories";
                }else if(meal.fat === "Raw almonds" && selections.intent === "maintain"){
                    fatMacros = "6 g protein, 6 g carb, 14 g fat, 160 calories";
    
                }else if(meal.fat === "Avocado" && selections.intent === "gains"){
                    fatMacros = "3 g protein, 15 g carb, 25.5 g fat, 270 calories";
                }else if(meal.fat === "Black olives" && selections.intent === "gains"){
                    fatMacros = "2.5 g protein, 10 g carb, 12 g fat, 140 calories";  
                }else if(meal.fat === "Coconut oil" && selections.intent === "gains"){
                    fatMacros = "0 g protein, 0 g carb, 28 g fat, 240 calories";
                }else if(meal.fat === "Raw almonds" && selections.intent === "gains"){
                    fatMacros = "9 g protein, 9 g carb, 21 g fat, 240 calories";
                }
            }else if(selections.gender === "male"){
                if(meal.fat === "Avocado" && selections.intent === "fat loss"){
                    fatMacros = "1.5 g protein, 7.5 g carb, 12.75 g fat, 135 calories";
                }else if(meal.fat === "Black olives" && selections.intent === "fat loss"){
                    fatMacros = "2 g protein, 7.5 g carb, 9 g fat, 105 calories";  
                }else if(meal.fat === "Coconut oil" && selections.intent === "fat loss"){
                    fatMacros = "0 g protein, 0 g carb, 100 g fat, 120 calories";
                }else if(meal.fat === "Raw almonds" && selections.intent === "fat loss"){
                    fatMacros = "6 g protein, 6 g carb 14 g fat, 160 calories";
    
                }else if(meal.fat === "Avocado" && selections.intent === "maintain"){
                    fatMacros = "2.5 g protin, 12.5 g carb, 21.5 g fat, 225 calories";
                }else if(meal.fat === "Black olives" && selections.intent === "maintain"){
                    fatMacros = "2.5 g protein, 10 g carb, 12 g fat, 140 calories";  
                }else if(meal.fat === "Coconut oil" && selections.intent === "maintain"){
                    fatMacros = "0 g protein, 0 g carb, 21 g fat, 180 calories";
                }else if(meal.fat === "Raw almonds" && selections.intent === "maintain"){
                    fatMacros = "9 g protein, 9 g carb, 21 g fat, 240 calories";
    
                }else if(meal.fat === "Avocado" && selections.intent === "gains"){
                    fatMacros = "3.5 g protein, 17.5 g carb, 25.5 g fat, 315 calories";
                }else if(meal.fat === "Black olives" && selections.intent === "gains"){
                    fatMacros = "3.5 g protein, 12.5 g carb, 15 g fat, 195 calories";  
                }else if(meal.fat === "Coconut oil" && selections.intent === "gains"){
                    fatMacros = "0 g protein, 0 g carb, 28 g fat, 240 calories";
                }else if(meal.fat === "Raw almonds" && selections.intent === "gains"){
                    fatMacros = "12 g protein, 12 g carb, 28 g fat, 320 calories";
                }
            }
        }


        return (
            <div id="mealBodyDiv">

                <div id="mealTitleDiv">
                    <hr />
                    <p>{(selections.gender === "male") ? "Mens' " : "Womens' "}
                        {selections.type} {(selections.prep === "baking")? "baked meal" : selections.prep} for {intentWord}
                    </p>
                    <hr/>
                </div>
                <div id="mealResultTernary">
                    {meal && ((selections.type === "low-fat") ? 
                        <div className="mealResultDiv"><br/>
                            <p className="ingredients">{meal.protein} - {meal.proteinAmt}</p>
                                <h3 className="macrosH3">{proteinMacros}</h3>
                            <p className="ingredients">{meal.veggie} - {meal.veggieAmt}</p>
                                <h3 className="macrosH3">{veggieMacros}</h3>
                            <p className="ingredients">{meal.carb} - {meal.carbAmt}</p>
                                <h3 className="macrosH3">{carbMacros}</h3>
                        </div>
                        :
                        <div className="mealResultDiv">
                            <p className="ingredients">{meal.protein} - {meal.proteinAmt}</p>
                                <h3 className="macrosH3">{proteinMacros}</h3>
                            <p className="ingredients">{meal.veggie} - {meal.veggieAmt}</p>
                                <h3 className="macrosH3">{veggieMacros}</h3>
                            <p className="ingredients">{meal.fat} - {meal.fatAmt}</p>
                                <h3 className="macrosH3">{fatMacros}</h3>
                        </div>
                    )}
                </div>
                <div className="arrowButtonsDiv">
                    <button className='restartButton'
                        onClick={() => this.props.history.push('/')}>Restart</button>
                        <div id="youTubeLinkDiv">
                        <a href={youTubeLink} 
                            alt="You Tube link" id="youTubeLink"
                            target="_blank" rel="noopener noreferrer">
                            <div id="insideYouTubeLink">
                                <div id="triangle-right"></div>
                                {selections.prep} video
                            </div>
                        </a>
                    </div>
                </div>

                <div id="natePlugDiv">
                    <p id="natePlug">built by <a href="https://www.linkedin.com/in/nathan-wengert/"
                                                alt="Social links"
                                                target="_blank" rel="noopener noreferrer">
                                                <img src={fireHawk} id="fireHawk" alt="fire Hawk logo"/>
                                                </a>
                                                <a href="https://github.com/nwengert" 
                                                target="_blank" rel="noopener noreferrer">
                                                <img  className="socialImg" src="https://image.flaticon.com/icons/svg/25/25231.svg" 
                                                alt="Git Hub logo"/></a>
                                                </p>
                </div>
            </div>
        )
    }
}
