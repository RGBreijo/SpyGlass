import GoalCard from "../goalCardComponent/GoalCard"
import GoalDetailInfoContainer from "../goalDetailInfoContainer/GoalDetailInfoContainer"
import "./GoalContainer.css"
const GoalContainer = () =>
{
    return(
        <div className="goalContainer">
            <div className="goalContainerTop"> 
            <GoalCard></GoalCard>
            <GoalCard></GoalCard>
            <GoalCard></GoalCard>
            <GoalCard></GoalCard>
            </div>

            <div>
                <GoalDetailInfoContainer></GoalDetailInfoContainer>
            </div>
        </div>
    )

}

export default GoalContainer;