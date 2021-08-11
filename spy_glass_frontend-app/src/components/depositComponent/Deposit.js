
import "./Deposit.css"

const Deposit = () =>
{
    return(
        <div className="depositContainer">
            <h2>Deposit Into Savings</h2>
          <form>
                <div className="depositContent">
                    <div className="depositeUserDate">
                        <label for="cars">Choose a Goal</label>
                        <select id="cars" name="cars">
                            <option value="volvo">House</option>
                            <option value="saab">Car</option>
                            <option value="mercedes">Vacation</option>
                            <option value="audi">Phone</option>
                        </select>
                    </div>
                    
                    <div className="depositeUserDate">
                        <label for="cars" >Amount</label>
                        <input type="text" placeholder="100.00"/>
                    </div>

                </div>

                <div className="depositSubmit">
                    <input type="submit" value="Deposit"/> 
                </div>
              
                </form>
        </div>
    )
}



export default Deposit; 