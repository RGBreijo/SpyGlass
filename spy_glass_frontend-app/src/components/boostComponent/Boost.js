
import "./Boost.css"

const Boost = () =>
{
    return(
        <div className="boostContainer">
            <div>
                <h2>Boost Your Financial Goal</h2>
                <p className="boostDescription">Achieve your financial goal faster by investing 
                in one of our top-rated ETF'S*</p>
            </div>
            <form>
                <div>
                    <div className="boostProperties">
                        <label>Choose an ETF</label>
                        <select id="cars" name="cars">
                            <option value="volvo">Extended Duration Treasury $143.56</option>
                        </select>
                    </div>
                    
                    <div className="boostProperties">
                        <label for="etf" >Quantity</label>
                        <input type="text" placeholder="1"/>
                    </div>
                    <div className="boostProperties"> 
                        <label>Choose a goal</label>
                        <select id="cars" name="cars">
                            <option value="volvo">House</option>
                            <option value="saab">Car</option>
                            <option value="mercedes">Vacation</option>
                            <option value="audi">Iphone</option>
                        </select>
                    </div>

                    <div className="boostFootnote">
                        <p> With an average yearly return of <span className="footNoteHighlight"> 10% </span>you will achieve 
                            your house goal <span className="footNoteHighlight"> 1 year </span> sooner.* </p>
                    </div>

                    <div className="buyDescriptionContainer">
                        <p>Estimated Total: $200</p>
                        <p className="buyDescriptionNote">Based on current market price</p>
                    </div>


                    <div className="boostSubmitContainer">
                        <input type="submit" value="Boost"/> 
                    </div>

                </div>
                </form>
        </div>
    )
}

export default Boost;