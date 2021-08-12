import React from 'react';
import "./GoalDetailInfoContainer.css";
import GoalService from "../../GoalServices/GoalService";
import Moment from 'moment';
import localdate from 'localdate'

class GoalDetailInfoContainer extends React.Component 
{
 

     reload = 0; 

    constructor(props) {
        super(props);
        this.state = {
            goals: []
        }
    }

    /*
        Create a variable state called reload and a function that changes that variable state
        when createGoal calles saves it will also call this reload function which will change the state
        hence change the 
    */

    componentDidMount() {
        GoalService.getGoals().then((response) => {
            this.setState({goals: response.data})
        })
    }

    isOnTrack(initial, goal, target,Monthly){
        var targetDate = new localdate(target)
        var today = new localdate(2021,8,10)

        var days = today.diff(targetDate) * -1;
        var months = 0;

        if (days % 30 != 0) {
            months = months + Math.floor(days / 30)
        }

        var monthsNeeded = Math.floor((goal - initial) / Monthly)


        if (monthsNeeded > months || days < 0) {
            return "False"
        }
        return "True"
    }

    onTrackClassName(onTrack)
    {
        if(onTrack === "True")
        {
            return "itemAtEnd onTrack";
        }else
        {
            return "itemAtEnd notOnTrack";
        }
    }


    render() {
        return (
            <div>
                <div className="tableContainer">
                    <table className="goalTable">

                        <thead>
                        <tr className="goalDetailTableHeader">
                            <th>Name <span className="sortTablePointer">&#x25B2;</span></th>
                            <th>Target Date <span className="sortTablePointer">&#x25B2;</span></th>
                            <th>Amount Saved <span className="sortTablePointer">&#x25B2;</span></th>
                            <th>Target Dollar Amount <span className="sortTablePointer">&#x25B2;</span></th>
                            <th> Amount Remaining <span className="sortTablePointer">&#x25B2;</span></th>
                            <th>Monthly Deposit <span className="sortTablePointer">&#x25B2;</span></th>
                            <th>On Track <span className="sortTablePointer">&#x25B2;</span></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.goals.map(
                                goal =>
                                    <tr key={goal.goalId}>
                                        <td>{goal.goalName}</td>
                                        <td>{Moment(goal.targetDate).format('MMMM YYYY')}</td>
                                        <td>${goal.initialDeposit}</td>
                                        <td>${goal.targetAmount}</td>
                                        <td>${goal.targetAmount - goal.initialDeposit}</td>
                                        <td>${goal.monthlyDepo}</td>
                                        <td className={this.onTrackClassName(this.isOnTrack(goal.initialDeposit,goal.targetAmount,goal.targetDate,goal.monthlyDepo))}> {this.isOnTrack(goal.initialDeposit,goal.targetAmount,goal.targetDate,goal.monthlyDepo)}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default GoalDetailInfoContainer;