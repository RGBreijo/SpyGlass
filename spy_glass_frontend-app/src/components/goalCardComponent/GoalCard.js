import "./GoalCard.css"
import "../createGoalComponent/CreateGoal"
import CreateGoal from "../createGoalComponent/CreateGoal";
import React, {useState, useEffect} from 'react';

const GoalCard = (props) => 
{

    const clicked = () =>
    {
        props.onEdit();
    }


    return (
        <div className="goalCard">
            {}
                <div className="goalCardHeader">
                    <h2>House</h2>
                    <p onClick={clicked}>Edit</p>
                </div>
   
                <div className="goalCardInnerSection">
                    <div className="goalDescription">
                        <p>I've always lived in a small cramped apartment. 
                        I'm never able to have any friends over
                        because of this. I also have to deal with 
                        upstairs neighbors 
                        </p>
                    </div>
                    <div clasName="goalImage">
                        <br></br>
                        <img alt="goal" src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"></img>
                    </div>
                </div>

                <div className="progressBar">
                    <div className="progressBarCurrent">
                      
                    </div>
                    <div className="progressBarFinish">
                      
                    </div>
                </div>

                <div className="priceContainer">
                    <p>$20,000</p>
                    <p>$200,000</p>
                </div>

            <div className="cardAchieveContainer">
                <p>Achieve your goal on July 2027 by saving $500 each month</p>
            </div>
        </div>
    )
}


export default GoalCard; 