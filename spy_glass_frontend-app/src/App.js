import logo from './logo.svg';
import './App.css';
import GoalContainer from "./components/goalContainerComponent/GoalContainer"
import Deposit from "./components/depositComponent/Deposit"
import Boost from "./components/boostComponent/Boost"

function App() {
  return (
    <div>
      <div>
        <Deposit></Deposit>
      </div>
      <div>
        <GoalContainer></GoalContainer>
        <Boost></Boost>
      </div>
    </div>
  );
}

export default App;
