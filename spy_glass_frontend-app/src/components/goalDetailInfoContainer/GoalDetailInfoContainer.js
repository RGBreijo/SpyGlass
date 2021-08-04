import "./GoalDetailInfoContainer.css";

const GoalDetailINfoContainer = () => 
{
    
    return(
        <div>
            <div className="tableContainer">
                <table className="goalTable">

                    <tr className="goalDetailTableHeader">
                        <th>Name &#x25B2;</th>
                        <th>Target Date &#x25B2;</th>
                        <th>Amount Saved &#x25B2;</th>
                        <th>Target Dollar Amount &#x25B2;</th>
                        <th>Amount Remaning &#x25B2;</th>
                        <th>Monthly Deposit &#x25B2;</th>
                        <th>On Track &#x25B2;</th>
                    </tr>
           
                    <tr>
                        <td className="itemAtStart">House</td>
                        <td>July 2027</td>
                        <td>$20,000.00</td>
                        <td>$300,000.00</td>
                        <td>$280,000.00</td>
                        <td>$1,000.00</td>
                        <td className="itemAtEnd onTrack">True</td>
                    </tr>

       

                    <tr>
                        <td className="itemAtStart">House</td>
                        <td>July 2027</td>
                        <td>$20,000.00</td>
                        <td>$300,000.00</td>
                        <td>$280,000.00</td>
                        <td>$1,000.00</td>
                        <td className="itemAtEnd onTrack"> True</td>
                    </tr>

                    <tr>
                        <td className="itemAtStart">House</td>
                        <td>July 2027</td>
                        <td>$20,000.00</td>
                        <td>$300,000.00</td>
                        <td>$280,000.00</td>
                        <td>$1,000.00</td>
                        <td className="itemAtEnd notOnTrack">False</td>
                    </tr>

       
       


                </table>
            </div>
        </div>
    )
}

export default GoalDetailINfoContainer; 