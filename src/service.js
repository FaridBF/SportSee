import axios from 'axios';

// import User from './models/User';

const API = {
  BASE_URL: 'http://localhost:3000/user',
  USER_ACTIVITY: 'activity',
  USER_AVERAGE_SESSIONS: 'average-sessions',
  USER_PERFORMANCE: 'performance'
};

/**
 * Get user informations
 * @param {*} id user id
 * @returns informations of the user
 */
function getUserInformations(id) {
  return axios.get(`${API.BASE_URL}/${id}`).then((response) => response.data);
  // .then((data) => data.map((apiData) => User.fromAPI(apiData)))
}

export default { getUserInformations };
