//Api service
import PropTypes from 'prop-types';
import axios from 'axios';

import mockUserInfos from '../mocks/mockUserInfos.json';
import mockActivity from '../mocks/mockActivity.json';
import mockAverageSessions from '../mocks/mockAverageSessions.json';
import mockPerformance from '../mocks/mockPerformance.json';

const BASE_URL = 'http://localhost:3000/user';
const isMock = false;

/**
 * Get user informations
 * @param {number} id user id
 * @returns {Promise<Object>} data: informations of the user
 */
async function getUserInformations(id) {
  if (isMock === true) {
    // console.log('mockUserInfos', mockUserInfos);
    return mockUserInfos;
  } else {
    return await axios
      .get(`${BASE_URL}/${id}`)
      .then((response) => response.data);
  }
}

/**
 * Get user activity information
 * @param {number} id user id
 * @returns {Promise<Object>} data: user activity information
 */
async function getUserActivityInformations(id) {
  if (isMock === true) {
    // console.log('mockActivity', mockActivity);
    return mockActivity;
  } else {
    return await axios
      .get(`${BASE_URL}/${id}/activity`)
      .then((response) => response.data);
  }
}

/**
 * Get user AverageSessions
 * @param {number} id user id
 * @returns {Promise<Object>} data: user AverageSessions
 */
async function getUserAverageSessions(id) {
  if (isMock === true) {
    // console.log('mockAverageSessions', mockAverageSessions);
    return mockAverageSessions;
  } else {
    return await axios
      .get(`${BASE_URL}/${id}/average-sessions`)
      .then((response) => response.data);
  }
}

/**
 * Get user performance
 * @param {number} id user id
 * @returns {Promise<Object>} data : user performance
 */
async function getUserPerformance(id) {
  if (isMock === true) {
    // console.log('mockPerformance', mockPerformance);
    return mockPerformance;
  } else {
    return await axios
      .get(`${BASE_URL}/${id}/performance`)
      .then((response) => response.data);
  }
}

const Api = {
  getUserInformations: PropTypes.func.isRequired,
  getUserActivityInformations: PropTypes.func.isRequired,
  getUserAverageSessions: PropTypes.func.isRequired,
  getUserPerformance: PropTypes.func.isRequired
};

Api.propTypes = Api;

export default {
  getUserInformations,
  getUserAverageSessions,
  getUserActivityInformations,
  getUserPerformance
};
