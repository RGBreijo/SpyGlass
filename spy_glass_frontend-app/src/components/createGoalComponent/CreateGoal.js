import "./CreateGoal.css"
import vanguard from "../images/vanguard.jpg"

import React, {Component} from 'react';
import GoalService from "../../GoalServices/GoalService";

class CreateGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goalName: "",
            reason: "",
            targetDate: "",
            targetAmount: "",
            initialDeposit: "",
            monthlyDepo: "",
        }
        this.setGoalName= this.setGoalName.bind(this);
        this.setReason = this.setReason.bind(this);
        this.setTargetDate = this.setTargetDate.bind(this);
        this.setTargetAmount = this.setTargetAmount.bind(this);
        this.setInitialDepo = this.setInitialDepo.bind(this);
        this.setMonthlyDepo = this.setMonthlyDepo.bind(this);
        this.saveGoal = this.saveGoal.bind(this);
    }
    setGoalName = (event) => {
        this.setState({goalName: event.target.value});
    }
    setReason = (event) => {
        this.setState({reason: event.target.value});
    }
    setTargetDate = (event) => {
        this.setState({targetDate: event.target.value});
    }
    setTargetAmount = (event) => {
        this.setState({targetAmount: event.target.value});
    }
    setInitialDepo = (event) => {
        this.setState({initialDeposit: event.target.value});
    }
    setMonthlyDepo = (event) => {
        this.setState({monthlyDepo: event.target.value});
    }
    saveGoal = (e) => {
        e.preventDefault();
        let goal = {goalName: this.state.goalName, reason: this.state.reason, targetDate: this.state.targetDate,
        targetAmount: this.state.targetAmount, initialDeposit: this.state.initialDeposit, monthlyDepo: this.state.monthlyDepo};
        console.log("goal => " + JSON.stringify(goal));

        GoalService.createGoal(goal).then(res => {
            this.setState({goals: res.data})
            this.props.onCancel();
        });
    }
    render() {
            return (
                <div className="createGoalContainer">

                    <div className="createGoalHeaderContainer">
                        <h2 id="createGoalTitle">Your Goal</h2>
                    </div>
                    <hr id="createDivider"></hr>

                    <div className="createGoalMainSectionContainer">
                        <div>
                            <form className="createGoalFormContainer">

                                <div className="createGoalInputContainer">
                                    <div>
                                        <label>Goal Name</label>
                                        <input placeholder= "Goal Name" name= "goalName" className="form-control"
                                               value={this.state.goalName} onChange={this.setGoalName}/>

                                    </div>

                                     <div className="moneyInputContainer">
                                        <label>Target Dollar Amount</label>
                                        <input placeholder= "0000.00" name= "targetAmount" className="form-control"
                                               value={this.state.targetAmount} onChange={this.setTargetAmount}/>
                                    </div>
                                </div>


                                <div className="createGoalInputContainer">
                                    <div className="moneyInputContainer">
                                        <label>Initial Deposit</label>
                                        <input placeholder= "0000.00" name= "initialDeposit" className="form-control"
                                               value={this.state.initialDeposit} onChange={this.setInitialDepo}/>
                                    </div>

                                    <div>
                                        <label>Achieve By Date</label>
                                        <input  type="date" name= "targetDate" className="form-control"
                                               value={this.state.targetDate} onChange={this.setTargetDate}/>
                                    </div>
                                </div>

                                <div className="createGoalInputContainer">
                                    <div className="moneyInputContainer">
                                        <label>Monthly Deposit</label>
                                        <input placeholder= "0000.00" name= "monthlyDepo" className="form-control"
                                               value={this.state.monthlyDepo} onChange={this.setMonthlyDepo}/>
                                    </div>


                                    <div id="imgUploadContainer">
                                        <label for="img" id="goalImgLabel">Upload Image</label>
                                        <input className="inputFile" type="file" id="img" name="img"
                                               accept="image/*"></input>
                                    </div>
                                </div>

                                <div id="descriptionContainer">
                                    <label>Description</label>
                                    <textarea placeholder= "Why do you want to achieve this goal?" name= "Reason" className="form-control"
                                           value={this.state.reason} onChange={this.setReason}/>
                                </div>


                                <div className="CreateGoalButtonContainer">

                                    <input onClick={this.props.onCancel} type="button" value="cancel"
                                           id="createCancelBtn"></input>
                                    <input type="submit" value="save" id="createSaveBtn" onClick={this.saveGoal}></input>
                                </div>
                            </form>
                        </div>

                        <div className="createImageContainer">
                            <img alt="vanguard logo" src={vanguard} id="createGoalImage"></img>
                        </div>

                    </div>
                </div>
            )
        }
}
export default CreateGoal;


