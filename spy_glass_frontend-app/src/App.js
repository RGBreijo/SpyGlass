import logo from './logo.svg';
import './App.css';
import GoalContainer from "./components/goalContainerComponent/GoalContainer"
import Deposit from "./components/depositComponent/Deposit"
import Boost from "./components/boostComponent/Boost"
import React, {useState, useEffect} from 'react';

import MainCreateComponentScreen from "./components/mainCreateComponentScreen/MainCreateComponentScreen"
import MainEditComponentScreen from "./components/mainEditComponentScreen/MainEditComponentScreen"


function App() {

  const [displayCreateNewGoal, setDisplayCreateNewGoal] = useState(false);
  const [displayEditGoal, setDisplayEditGoal] = useState(false);

  const [cancelClicked, setCancelClicked]       = useState(false);



  const createNewCardBtnClicked = () =>
  {
      setDisplayCreateNewGoal(true);
      setCancelClicked(false);
  }

  const editGoalBtnClicked = () => 
  {
    setDisplayEditGoal(true);
    setCancelClicked(false);
  }

  const cancelBtnClicked = () =>
  {
    setCancelClicked(true);
    setDisplayEditGoal(false);
    setDisplayCreateNewGoal(false);
  }


  return (
    <div className="outerContainer">
            {!cancelClicked && displayCreateNewGoal && <MainCreateComponentScreen onCancel={cancelBtnClicked}></MainCreateComponentScreen>}
            {!cancelClicked && displayEditGoal && <MainEditComponentScreen onCancel={cancelBtnClicked}></MainEditComponentScreen>}

      <div className="welcomeContainer">
        <h2>Welcome back, Bob.</h2>
      </div>
      <div className="mainContentContainer">
        <div className="sideInputContainer">
          <Deposit></Deposit>
          <Boost></Boost>
        </div>

        <div className="mainGoalInfoContainer">
          <GoalContainer onCreate={createNewCardBtnClicked} onEdit={editGoalBtnClicked}></GoalContainer>
        </div>


      </div>
      <footer></footer>





    </div>
  );
}

export default App;
