
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
                            <option value="volvo">Volvo XC90</option>
                            <option value="saab">Saab 95</option>
                            <option value="mercedes">Mercedes SLK</option>
                            <option value="audi">Audi TT</option>
                        </select>
                    </div>
                    
                    <div className="boostProperties">
                        <label for="etf" >Quantity</label>
                        <input type="text" placeholder="hello world"/>
                    </div>
                    <div className="boostProperties"> 
                        <label>Choose a goal</label>
                        <select id="cars" name="cars">
                            <option value="volvo">Volvo XC90</option>
                            <option value="saab">Saab 95</option>
                            <option value="mercedes">Mercedes SLK</option>
                            <option value="audi">Audi TT</option>
                        </select>
                    </div>

                    <div>
                        <p> Estimated price: $199</p>
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