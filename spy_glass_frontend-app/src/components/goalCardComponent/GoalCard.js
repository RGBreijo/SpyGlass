import "./GoalCard.css"
import "../createGoalComponent/CreateGoal"
import CreateGoal from "../createGoalComponent/CreateGoal";
import React, {useState, useEffect} from 'react';

import ProgressBar from "@ramonak/react-progress-bar";
import { CountUp } from 'use-count-up'

const GoalCard = (props) => 
{

    const [completedAmount, setCompletedAmount] = useState(0); // should be 0 innitially 

    
    useEffect(() => 
    {
        setCompletedAmount(10); // 20,000 of 200,0000  (default display values) = 10% 
    }, [])

    const clicked = () =>
    {
        props.onEdit();
        //setCompletedAmount(50);  this is a test to show bar of that goal going to 50. After caluclating the required value this should be called 
    }


    return (
        <div className="goalCard">
            
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

                <div>
                    <ProgressBar completed={completedAmount} transitionDuration="1.5s" bgColor="#04D582" borderRadius="5px" baseBgColor="#E3F3FD" isLabelVisible={false} height="15px"/>
                    </div>

                <div className="priceContainer">
                    <CountUp prefix="$" isCounting thousandsSeparator="," start={0} end={20000} duration={1.5}></CountUp>
                    <p>$200,000</p>
                </div>



            <div className="cardAchieveContainer">
                <p>Achieve your goal on July 2027 by saving $500 each month</p>
            </div>
        </div>
    )
}





export default GoalCard; 