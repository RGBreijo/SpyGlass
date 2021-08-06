import "./CreateGoal.css"

const CreateGoal = () =>
{
    return(
        <div className="createGoalContainer"> 
            <div className="createGoalHeaderContainer"> 
                <h2>Your Goal</h2>
            </div>
                <form className="createGoalFormContainer">

                    <div className="createGoalInputContainer">
                        <div>
                            <label>Goal Name</label>
                            <input type="text"></input>
                        </div>

                        <div>
                            <label>Target Dollar Amount</label>
                            <input type="text"></input>
                        </div>
                    </div>


                    <div className="createGoalInputContainer">
                        <div>
                            <label>Initial Deposit</label>
                            <input type="text"></input>
                        </div>

                        <div>
                            <label>Achieve By Date</label>
                            <input type="date"></input>
                        </div>
                    </div>

                    <div className="createGoalInputContainer">
                        <div className="moneyInputContainer">
                            <label>Monthly Deposit</label>
                            <input type="text"></input>
                        </div>

                        <div id="imgUploadContainer">
                            <label for="img">Goal Image</label>
                            <input type="file" id="img" name="img" accept="image/*"></input>
                        </div>
                    </div>

                    <div id="descriptionContainer">
                        <label>Description</label>
                        <textarea></textarea>
                    </div>


                    <div className="CreateGoalButtonContainer">

                         <input type="button" value="cancel" id="createCancelBtn"></input>
                        <input type="submit" value="save" id="createSaveBtn"></input>
                    </div>


                       
                </form>
            <div>

            </div>
        </div>
    )
}


export default CreateGoal; 
