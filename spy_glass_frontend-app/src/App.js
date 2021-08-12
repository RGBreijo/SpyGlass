import logo from './logo.svg';
import './App.css';
import GoalContainer from "./components/goalContainerComponent/GoalContainer"
import Deposit from "./components/depositComponent/Deposit"
import Boost from "./components/boostComponent/Boost"
import React, {useState, useEffect} from 'react';

import MainCreateComponentScreen from "./components/mainCreateComponentScreen/MainCreateComponentScreen"
import MainEditComponentScreen from "./components/mainEditComponentScreen/MainEditComponentScreen"
import Navbar from "./components/navbar/Navbar"
function App() {


  let goalCard = 
  {
    goalId: -1,
    goalName: "",
    reason: "",
    monthlyDepo: 0.00,
    targetAmount: 0.00,
    targetDate:"",

  }

  const [displayCreateNewGoal, setDisplayCreateNewGoal] = useState(false);
  const [displayEditGoal, setDisplayEditGoal]           = useState(false);
  const [cancelClicked, setCancelClicked]               = useState(false);
  const [reloadGoal, setReloadGoal]                     = useState(true);


  let [goalCardInfo, setGoalCardInfo] = useState(goalCard);


  const createNewCardBtnClicked = () =>
  {
      setDisplayCreateNewGoal(true);
      setCancelClicked(false);
  }

  const editGoalBtnClicked = (id, goalName, reason, monthlyDepo,targetAmount, targetDate) => 
  {
    setDisplayEditGoal(true);
    setCancelClicked(false);
    goalCard.goalId = id;
    goalCard.goalName = goalName;
    goalCard.reason = reason;
    goalCard.monthlyDepo = monthlyDepo;
    goalCard.targetAmount =  targetAmount;
    goalCard.targetDate = targetDate;
    setGoalCardInfo(goalCard);
  }


  const saveBtnClicked = () =>
  {
    cancelBtnClicked();
    setReloadGoal(!reloadGoal);
  }

  const cancelBtnClicked = () =>
  {
    setCancelClicked(true);
    setDisplayEditGoal(false);
    setDisplayCreateNewGoal(false);
  }


  return (
    <div className="outerContainer">
            {!cancelClicked && displayCreateNewGoal && <MainCreateComponentScreen onCancel={cancelBtnClicked} onSave={saveBtnClicked}></MainCreateComponentScreen>}
            {!cancelClicked && displayEditGoal && <MainEditComponentScreen onCancel={cancelBtnClicked} cardInfo={goalCardInfo} onSave={saveBtnClicked}></MainEditComponentScreen>}
      
      <Navbar></Navbar>
      <div className="welcomeContainer">
        <h2>Welcome back, Bob.</h2>
      </div>
      <div className="mainContentContainer">
        <div className="sideInputContainer">
          <Deposit></Deposit>
          <Boost></Boost>
        </div>

        <div className="mainGoalInfoContainer">
           {!reloadGoal && <GoalContainer onCreate={createNewCardBtnClicked} onEdit={editGoalBtnClicked}  onReload={reloadGoal}></GoalContainer>}
           {reloadGoal && <GoalContainer onCreate={createNewCardBtnClicked} onEdit={editGoalBtnClicked}  onReload={reloadGoal}></GoalContainer>}
        </div>


      </div>
      <footer></footer>





    </div>
  );
}

export default App;
