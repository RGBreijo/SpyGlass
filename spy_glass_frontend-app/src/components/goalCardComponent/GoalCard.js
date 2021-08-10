import React, {Component} from 'react';
import "./GoalCard.css"
import "../createGoalComponent/CreateGoal"
import CreateGoal from "../createGoalComponent/CreateGoal";
import  {useState, useEffect} from 'react';

import ProgressBar from "@ramonak/react-progress-bar";
import { CountUp } from 'use-count-up'
import GoalService from "../../GoalServices/GoalService";
import Moment from "moment";

class GoalCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goals: []
        }


    }


    componentDidMount() {
        GoalService.getGoals().then((response) => {
            this.setState({goals: response.data})

        })
    }

    render() {

        return (
            this.state.goals.map(goal => {
                    return (
                        <div className="goalCard" key={goal.goalId}>
                            <div className="goalCardHeader">
                                <h2>{goal.goalName}</h2>
                                <p>Edit</p>
                            </div>

                            <div className="goalCardInnerSection">
                                <div className="goalDescription">
                                    <p>{goal.reason}</p>
                                </div>
                                <div clasName="goalImage">
                                    <br></br>
                                    <img alt="goal"
                                         src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"></img>
                                </div>
                            </div>

                            <div>
                                <ProgressBar
                                    completed={((goal.initialDeposit) * 100) / goal.targetAmount}
                                    transitionDuration="1.5s" bgColor="#04D582" borderRadius="5px" baseBgColor="#E3F3FD"
                                    isLabelVisible={false} height="15px"/>
                            </div>
                            <div className="priceContainer">

                                <div>
                                <CountUp id="countComp" prefix="$" isCounting thousandsSeparator="," start={0}
                                         end={(goal.initialDeposit)}
                                         duration={1.5}></CountUp>
                                </div>

                                <div>
                                     <p id="targetAmount">${goal.targetAmount}</p>
                                </div>
                            </div>


                            <div className="cardAchieveContainer">
                                <p>Achieve your goal on {Moment(goal.targetDate).format('MMMM Do YYYY')} by
                                    saving {goal.monthlyDepo} each month</p>
                            </div>
                        </div>
                    )
                }
            ))

    }
}
export default GoalCard;