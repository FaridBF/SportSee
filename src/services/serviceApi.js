//Api service
import axios from 'axios';

import mockUserInfos from '../mocks/mockUserInfos.json';
import mockActivity from '../mocks/mockActivity.json';
import mockAverageSessions from '../mocks/mockAverageSessions.json';
import mockPerformance from '../mocks/mockPerformance.json';

const BASE_URL = 'http://localhost:3000/user';
const isMock = true;

/**
 * Get user informations
 * @param {*} id user id
 * @returns {Object} data: informations of the user
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
 * @param {*} id user id
 * @returns {Object} data: user activity information
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
 * @param {*} id user id
 * @returns {Object} data: user AverageSessions
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
 * @param {*} id user id
 * @returns {Object} data : user performance
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

export default {
  getUserInformations,
  getUserAverageSessions,
  getUserActivityInformations,
  getUserPerformance
};
