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

     clicked = (id, goalName, reason, monthlyDepo,targetAmount,targetDate) =>
    {
        this.props.onEdit(id, goalName, reason, monthlyDepo,targetAmount,targetDate);
    }

    imagename(name) {
        if (name === "Home") {
            return "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
        }
        if (name === "Car") {
            return "https://www.motortrend.com/uploads/sites/5/2021/07/2021-Tesla-Model-3_19-exterior-three-quarter-front-view.jpg"
        }
        if (name === "College Fall Semester") {
            return "https://bha.aspirepublicschools.org/wp-content/uploads/sites/8/2017/10/college.jpg"
        }
        if (name === "Boat") {
            return "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/trimsdb/9984771-0-61152511.jpg"
        }


    }

    render() {

        return (
            this.state.goals.map(goal => {
                    return (
                        <div className="goalCard" key={goal.goalId}>
                            <div className="goalCardHeader">
                                <h2>{goal.goalName}</h2>    
                                <p onClick={(id, goalName, reason, monthlyDepo, targetAmount, targetDate) => this.clicked(goal.goalId, goal.goalName, goal.reason, goal.monthlyDepo,goal.targetAmount,goal.targetDate)}>Edit</p>
                            </div>

                            <div className="goalCardInnerSection">
                                <div className="goalDescription">
                                    <p>{goal.reason}</p>
                                </div>
                                <div clasName="goalImage">
                                    <br></br>
                                    <img alt="goal"
                                         src={this.imagename(goal.goalName)}></img>
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