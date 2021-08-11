import EditGoal from "../editGoalComponent/EditGoal"


const MainEditComponentScreen = (props) =>
{
    return(
        <div className="createGoalSuperContainer">
            <div id="createGoalMainContainer">
                <EditGoal onCancel={props.onCancel} cardInfo={props.cardInfo}></EditGoal>
            </div>
        </div>
    )
}
export default MainEditComponentScreen