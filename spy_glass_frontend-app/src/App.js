import logo from './logo.svg';
import './App.css';
import GoalContainer from "./components/goalContainerComponent/GoalContainer"
import Deposit from "./components/depositComponent/Deposit"
import Boost from "./components/boostComponent/Boost"
import React, {useState, useEffect} from 'react';

import MainCreateComponentScreen from "./components/mainCreateComponentScreen/MainCreateComponentScreen"

function App() {

  const [displayComponent, setDisplayComponent] = useState(false);


  const editBtnClicked = () =>
  {
      setDisplayComponent(true);
  }





  return (
    <div className="outerContainer">
            {displayComponent && <MainCreateComponentScreen></MainCreateComponentScreen>}

      <div className="welcomeContainer">
        <h2>Welcome back, Bob.</h2>
      </div>
      <div className="mainContentContainer">
        <div className="sideInputContainer">
          <Deposit></Deposit>
          <Boost></Boost>
        </div>

        <div className="mainGoalInfoContainer">
          <GoalContainer onEdit={editBtnClicked}></GoalContainer>
        </div>


      </div>
      <footer></footer>





    </div>
  );
}

export default App;
