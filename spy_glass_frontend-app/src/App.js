import logo from './logo.svg';
import './App.css';
import GoalContainer from "./components/goalContainerComponent/GoalContainer"
import Deposit from "./components/depositComponent/Deposit"
import Boost from "./components/boostComponent/Boost"
import CreateGoal from "./components/createGoalComponent/CreateGoal"

function App() {
  return (
    <div>
      <div className="welcomeContainer">
        <h2>Welcome back, Bob.</h2>
      </div>
      <div className="mainContentContainer">
        <div className="sideInputContainer">
          <Deposit></Deposit>
          <Boost></Boost>
        </div>

        <div className="mainGoalInfoContainer">
          <GoalContainer></GoalContainer>
        </div>


      </div>

      <CreateGoal></CreateGoal>

      <footer></footer>





    </div>
  );
}

export default App;
