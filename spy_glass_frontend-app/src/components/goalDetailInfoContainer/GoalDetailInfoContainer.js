import "./GoalDetailInfoContainer.css";

const GoalDetailINfoContainer = () => 
{
    
    return(
        <div>
            <div className="tableContainer">
                <table className="goalTable">

                    <tr className="goalDetailTableHeader">
                        <th>Name</th>
                        <th>Target Date</th>
                        <th>Amount Saved</th>
                        <th>Target Dollar Amount</th>
                        <th>Amount Remaning</th>
                        <th>Monthly Deposit</th>
                        <th>On Track</th>
                    </tr>
           
                    <tr>
                        <td className="itemAtStart">House</td>
                        <td>July 2027</td>
                        <td>$20,000.00</td>
                        <td>$300,000.00</td>
                        <td>$280,000.00</td>
                        <td>$1,000.00</td>
                        <td className="itemAtEnd">True</td>
                    </tr>

       

                    <tr>
                        <td className="itemAtStart">House</td>
                        <td>July 2027</td>
                        <td>$20,000.00</td>
                        <td>$300,000.00</td>
                        <td>$280,000.00</td>
                        <td>$1,000.00</td>
                        <td className="itemAtEnd"> True</td>
                    </tr>

                    <tr>
                        <td className="itemAtStart">House</td>
                        <td>July 2027</td>
                        <td>$20,000.00</td>
                        <td>$300,000.00</td>
                        <td>$280,000.00</td>
                        <td>$1,000.00</td>
                        <td className="itemAtEnd">True</td>
                    </tr>

       
       


                </table>
            </div>
        </div>
    )
}

export default GoalDetailINfoContainer; 