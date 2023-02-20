import axios from 'axios';

import mockUserInfos from '../src/mocks/mockUserInfos.json';
import mockActivity from '../src/mocks/mockActivity.json';
import mockAverageSessions from '../src/mocks/mockAverageSessions.json';
import mockPerformance from '../src/mocks/mockPerformance.json';

const BASE_URL = 'http://localhost:3000/user';
const isMock = true;

/**
 * Get user informations
 * @param {*} id user id
 * @returns informations of the user
 */
function getUserInformations(id) {
  if (isMock === true) {
    console.log('mockUserInfos', mockUserInfos);
    return mockUserInfos;
    /// to do importer ma data ici avec les mocks
  } else {
    return axios.get(`${BASE_URL}/${id}`).then((response) => response.data);
  }
}

/**
 * Get user activity information
 * @param {*} id user id
 * @returns user activity information
 */
function getUserActivityInformations(id) {
  if (isMock === true) {
    // console.log('mockActivity', mockActivity);
    return mockActivity;
  } else {
    return axios
      .get(`${BASE_URL}/${id}/activity`)
      .then((response) => response.data);
  }
}

/**
 * Get user AverageSessions
 * @param {*} id user id
 * @returns user AverageSessions
 */
function getUserAverageSessions(id) {
  if (isMock === true) {
    // console.log('mockAverageSessions', mockAverageSessions);
    return mockAverageSessions;
  } else {
    return axios
      .get(`${BASE_URL}/${id}/average-sessions`)
      .then((response) => response.data);
  }
}

/**
 * Get user performance
 * @param {*} id user id
 * @returns user performance
 */
function getUserPerformance(id) {
  if (isMock === true) {
    // console.log('mockPerformance', mockPerformance);
    return mockPerformance;
  } else {
    return axios
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
