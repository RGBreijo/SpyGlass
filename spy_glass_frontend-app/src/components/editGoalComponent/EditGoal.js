import "./EditGoal.css"
import vanguard from "../images/vanguard.jpg"
import React, {Component} from 'react';
import GoalService from "../../GoalServices/GoalService";

class EditGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goalId: this.props.cardInfo.goalId,
            goalName: this.props.cardInfo.goalName,
            reason: this.props.cardInfo.reason,
            targetDate: this.props.cardInfo.targetDate,
            targetAmount: this.props.cardInfo.targetAmount,
            monthlyDepo: this.props.cardInfo.monthlyDepo,
        }
        this.setGoalName= this.setGoalName.bind(this);
        this.setReason = this.setReason.bind(this);
        this.setTargetDate = this.setTargetDate.bind(this);
        this.setTargetAmount = this.setTargetAmount.bind(this);
        this.setMonthlyDepo = this.setMonthlyDepo.bind(this);
        this.updateGoal = this.updateGoal.bind(this);
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
    setMonthlyDepo = (event) => {
        this.setState({monthlyDepo: event.target.value});
    }
    updateGoal = (e) => {
        e.preventDefault();
        let goal = {goalName: this.state.goalName, reason: this.state.reason, targetDate: this.state.targetDate,
            targetAmount: this.state.targetAmount, monthlyDepo: this.state.monthlyDepo};
        console.log("goal => " + JSON.stringify(goal));

        GoalService.updateGoal(goal,this.state.goalId).then(res => {
            this.setState({goals: res.data})
            this.props.onCancel();
        })

    }
    render() {
        return(
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
                                    <input type="text" value={this.state.goalName} onChange={this.setGoalName}></input>
                                </div>

                                <div className="moneyInputContainer">
                                    <label>Target Dollar Amount</label>
                                    <input type="text" value={this.state.targetAmount} onChange={this.setTargetAmount}></input>
                                </div>
                            </div>


                            <div className="createGoalInputContainer">

                                <div>
                                    <label>Achieve By Date</label>
                                    <input  type="date" value={this.state.targetDate} onChange={this.setTargetDate} ></input>
                                </div>
                            </div>

                            <div className="createGoalInputContainer">
                                <div className="moneyInputContainer">
                                    <label>Monthly Deposit</label>
                                    <input type="text" value={this.state.monthlyDepo} onChange={this.setMonthlyDepo}></input>
                                </div>


                                <div id="imgUploadContainer">
                                    <label for="img" id="goalImgLabel">Upload Image</label>
                                    <input className="inputFile" type="file" id="img" name="img" accept="image/*"></input>
                                </div>
                            </div>

                            <div id="descriptionContainer">
                                <label>Description</label>
                                <input type="text" value={this.state.reason} onChange={this.setReason}></input>
                            </div>


                            <div className="CreateGoalButtonContainer">

                                <input onClick = {this.props.onCancel} type="button" value="cancel" id="createCancelBtn"></input>
                                <input type="submit" value="save" id="createSaveBtn" onClick={this.updateGoal}></input>
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

export default EditGoal;


