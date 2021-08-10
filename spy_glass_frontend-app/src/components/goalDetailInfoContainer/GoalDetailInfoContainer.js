import React from 'react';
import "./GoalDetailInfoContainer.css";
import GoalService from "../../GoalServices/GoalService";
import Moment from 'moment';

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

    render() {
        return (
            <div>
                <div className="tableContainer">
                    <table className="goalTable">

                        <thead>
                        <tr className="goalDetailTableHeader">
                            <th>Name &#x25B2;</th>
                            <th>Target Date &#x25B2;</th>
                            <th>Amount Saved &#x25B2;</th>
                            <th>Target Dollar Amount &#x25B2;</th>
                            <th> Amount Remaining &#x25B2;</th>
                            <th>Monthly Deposit &#x25B2;</th>
                            <th>On Track &#x25B2;</th>
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
                                        <td className="itemAtEnd onTrack"> True</td>
                                    </tr>
                            )
                        }
                        </tbody>
                        <tr>
                            <td className="itemAtStart">House</td>
                            <td>July 2027</td>
                            <td>$20,000.00</td>
                            <td>$300,000.00</td>
                            <td>$280,000.00</td>
                            <td>$1,000.00</td>
                            <td className="itemAtEnd onTrack"> True</td>
                        </tr>

                    <tr>
                        <td className="itemAtStart">Vacation</td>
                        <td>July 2027</td>
                        <td>$20,000.00</td>
                        <td>$300,000.00</td>
                        <td>$280,000.00</td>
                        <td>$1,000.00</td>
                        <td className="itemAtEnd onTrack"> True</td>
                    </tr>

                        <tr>
                            <td className="itemAtStart">House</td>
                            <td>July 2027</td>
                            <td>$20,000.00</td>
                            <td>$300,000.00</td>
                            <td>$280,000.00</td>
                            <td>$1,000.00</td>
                            <td className="itemAtEnd notOnTrack">False</td>
                        </tr>

                        <tr>
                            <td className="itemAtStart">House</td>
                            <td>July 2027</td>
                            <td>$20,000.00</td>
                            <td>$300,000.00</td>
                            <td>$280,000.00</td>
                            <td>$1,000.00</td>
                            <td className="itemAtEnd onTrack">True</td>
                        </tr>

                        <tr>
                            <td className="itemAtStart">House</td>
                            <td>July 2027</td>
                            <td>$20,000.00</td>
                            <td>$300,000.00</td>
                            <td>$280,000.00</td>
                            <td>$1,000.00</td>
                            <td className="itemAtEnd notOnTrack">False</td>
                        </tr>


                    </table>
                </div>
            </div>
        )
    }
}
export default GoalDetailInfoContainer;