import axios from 'axios'

const GOALS_REST_API_URL = 'http://localhost:8080/users/Anta/goals';

class GoalService {

    getGoals(){
        return axios.get(GOALS_REST_API_URL);
    }
}

export default new GoalService();