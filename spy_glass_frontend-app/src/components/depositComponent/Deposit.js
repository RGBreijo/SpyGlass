
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
                            <option value="volvo">Volvo XC90</option>
                            <option value="saab">Saab 95</option>
                            <option value="mercedes">Mercedes SLK</option>
                            <option value="audi">Audi TT</option>
                        </select>
                    </div>
                    
                    <div className="depositeUserDate">
                        <label for="cars" >Amount</label>
                        <input type="text" placeholder="hello world"/>
                    </div>

                </div>

                <div className="depositSubmit">
                    <input type="submit" value="Deposite"/> 
                </div>
              
                </form>
        </div>
    )
}



export default Deposit; 