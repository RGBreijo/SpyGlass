import logo from './logo.svg';
import './App.css';
import GoalContainer from "./components/goalContainerComponent/GoalContainer"
import Deposit from "./components/depositComponent/Deposit"


function App() {
  return (
    <div>
      <div>
        <Deposit></Deposit>
      </div>
      <div>
        <GoalContainer></GoalContainer>
      </div>
    </div>
  );
}

export default App;
