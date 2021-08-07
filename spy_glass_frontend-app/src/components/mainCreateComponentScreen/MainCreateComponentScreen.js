import "./MainCreateComponentScreen.css"
import CreateGoal from "../createGoalComponent/CreateGoal"


const MainCreateComponentScreen = () =>
{
    return(
        <div className="createGoalSuperContainer">
            <div id="createGoalMainContainer">
                <CreateGoal></CreateGoal>
            </div>
        </div>
    )
}

export default MainCreateComponentScreen