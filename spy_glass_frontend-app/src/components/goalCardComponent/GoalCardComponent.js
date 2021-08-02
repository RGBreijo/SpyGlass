import "./GoalCardComponent.css"

const GoalCardComponent = () => 
{
    return (
        <div className="goalCard">
                <h2>House</h2>
                <div className="goalCardInnerSection">
                    <div className="goalDescription">
                        <p>I've always lived in a small cramped apartment. 
                        I'm never able to have any friends over
                        because of this. I also have to deal with 
                        upstairs neighbors 
                        </p>
                    </div>
                    <div>
                        <img src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" height="134px" width="200"></img>
                    </div>
                </div>

                <div className="progressBar">
                    <div className="progressBarCurrent">
                      
                    </div>
                    <div className="progressBarFinish">
                      
                    </div>
                </div>

                <div className="priceContainer">
                    <p>$20,000</p>
                    <p>$200,000</p>
                </div>

            <div className="cardAchieveContainer">
                <p>Achieve your goal on July 2027 by saving $500 each month</p>
            </div>
        </div>
    )
}


export default GoalCardComponent; 