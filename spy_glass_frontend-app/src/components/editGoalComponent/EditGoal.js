import "./EditGoal.css"
import vanguard from "../images/vanguard.jpg"
const CreateGoal = (props) =>
{

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
                            <input type="text"></input>
                        </div>

                        <div className="moneyInputContainer">
                            <label>Target Dollar Amount</label>
                            <input type="text" placeholder="5000.00"></input>
                        </div>
                    </div>


                    <div className="createGoalInputContainer">

                        <div>
                            <label>Achieve By Date</label>
                            <input type="date"></input>
                        </div>
                    </div>

                    <div className="createGoalInputContainer">
                        <div className="moneyInputContainer">
                            <label>Monthly Deposit</label>
                            <input type="text" placeholder="300.00"></input>
                        </div>

          
                        <div id="imgUploadContainer">
                            <label for="img" id="goalImgLabel">Upload Image</label>
                            <input className="inputFile" type="file" id="img" name="img" accept="image/*"></input>
                        </div>
                    </div>

                    <div id="descriptionContainer">
                        <label>Description</label>
                        <textarea placeholder="Why do you want to achieve this goal?"></textarea>
                    </div>


                    <div className="CreateGoalButtonContainer">

                         <input onClick = {props.onCancel} type="button" value="cancel" id="createCancelBtn"></input>
                        <input type="submit" value="save" id="createSaveBtn"></input>
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


export default CreateGoal; 
