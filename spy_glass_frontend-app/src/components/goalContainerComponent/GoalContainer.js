import GoalCard from "../goalCardComponent/GoalCard"
import GoalDetailInfoContainer from "../goalDetailInfoContainer/GoalDetailInfoContainer"
import "./GoalContainer.css"
const GoalContainer = (props) =>
{
    return(
        <div className="goalContainer">

            <div class="mainGoalContent">
                <div>
                    <div>
                        <h2 id="yourGoal">Your Financial Goals</h2>
                    </div>

                    <div id="totalSavedContainer">
                        <h3>$55,000.36</h3>
                        <p>TOTAL SAVED</p>
                    </div>
                </div>

                <div className="goalContainerTop"> 
                <GoalCard onEdit={props.onEdit}></GoalCard>
                <GoalCard onEdit={props.onEdit}></GoalCard>
                <GoalCard onEdit={props.onEdit}></GoalCard>
                <GoalCard onEdit={props.onEdit}></GoalCard>
                <GoalCard onEdit={props.onEdit}></GoalCard>
                </div>
            </div>

            <div>
                <GoalDetailInfoContainer></GoalDetailInfoContainer>
            </div>
        </div>
    )

}

export default GoalContainer;