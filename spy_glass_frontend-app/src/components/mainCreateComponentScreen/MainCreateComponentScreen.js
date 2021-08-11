import "./MainCreateComponentScreen.css"
import CreateGoal from "../createGoalComponent/CreateGoal"


const MainCreateComponentScreen = (props) =>
{
    return(
        <div className="createGoalSuperContainer">
            <div id="createGoalMainContainer">
                <CreateGoal onCancel={props.onCancel} onSave={props.onSave}></CreateGoal>
            </div>
        </div>
    )
}

export default MainCreateComponentScreen