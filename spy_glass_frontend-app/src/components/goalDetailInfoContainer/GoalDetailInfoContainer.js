import "./GoalDetailInfoContainer.css";

const GoalDetailINfoContainer = () => 
{


    // Note: Each th was given the same class instead of putting 
    return(
        <div>
            <div className="tableContainer">
                <table className="goalTable">

                     
                    <tr className="goalDetailTableHeader">
                        <th>Name <span className="sortPointer">&#x25B2;</span></th>
                        <th>Target Date <span className="sortPointer">&#x25B2;</span></th>
                        <th>Amount Saved <span className="sortPointer">&#x25B2;</span></th>
                        <th>Target Dollar Amount <span className="sortPointer">&#x25B2;</span></th>
                        <th> Amount Remaning <span className="sortPointer">&#x25B2;</span></th>
                        <th>Monthly Deposit <span className="sortPointer">&#x25B2;</span></th>  
                        <th>On Track <span className="sortPointer">&#x25B2;</span></th>
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
                        <td className="itemAtEnd onTrack">True</td>
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
                        <td className="itemAtEnd notOnTrack">False</td>
                    </tr>
            
           
     

                </table>
            </div>
        </div>
    )
}

export default GoalDetailINfoContainer; 