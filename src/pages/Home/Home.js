import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import DataModelisationService from '../../services/serviceModelisationData';
import serviceApi from '../../services/serviceApi';

import CalorieMeasurementCard from '../../components/CalorieMeasurementCard/CalorieMeasurementCard';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import StatsCard from '../../components/StatsCard/StatsCard';
import SimpleRadarChart from '../../components/SimpleRadarChart/SimpleRadarChart';
import ScoreRadialBarChart from '../../components/ScoreRadialBarChart/ScoreRadialBarChart';
import SimpleBarChart from '../../components/SimpleBarChart/SimpleBarChart';
import TinyLineChart from '../../components/TinyLineChart/TinyLineChart';

import iconApple from '../../assets/statsCard/apple.png';
import iconCheeseburger from '../../assets/statsCard/cheeseburger.png';
import iconChicken from '../../assets/statsCard/chicken.png';
import iconEnergy from '../../assets/statsCard/energy.png';
import emoji from '../../assets/emoji/emoji.png';

import '../Home/home.css';
import '../../styles/loading_spinner.css';

/**
 * Home is a component that displays user section on the homepage.
 ** @return {ReactElement} The JS markup for the Home component
 */
function Home() {
  const [userInfos, setUserInfos] = useState(null);
  const [activity, setActivity] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);

  const userId = 18;

  /**
   * Here, I call on my services (serviceAPI) to recover the data that corresponds
   ** @return {Object} Data
   */
  const fetchData = async () => {
    try {
      const responseUserInformations = await serviceApi.getUserInformations(
        userId
      );
      setUserInfos(responseUserInformations);
      // console.log('responseUserInformations', responseUserInformations);
      const responseUserActivityInformations =
        await serviceApi.getUserActivityInformations(userId);
      setActivity(responseUserActivityInformations);
      const responseUserAverageSessions =
        await serviceApi.getUserAverageSessions(userId);
      setAverageSessions(responseUserAverageSessions);
      const responseUserPerformance = await serviceApi.getUserPerformance(
        userId
      );
      setPerformance(responseUserPerformance);
    } catch (error) {
      alert('Une erreur est survenue lors du chargement des données.');
    }
  };

  /**
   * This code is using the useEffect hook to call the fetchData function when the component is mounted.
   * The empty array passed as the second argument ensures that the effect is only run once, when the component first mounts.
   */
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <Header />
      <div className='container'>
        <LeftMenu />
        <div className='daily-container'>
          {userInfos ? (
            <>
              <h1 className='title-container-home'>
                Bonjour
                <span className='name-container-home'>
                  {userInfos.data.userInfos.firstName}
                </span>
              </h1>
              <p className='presentation-container-home'>
                Félicitation! Vous avez explosé vos objectifs hier
                <img
                  className='emoji'
                  src={emoji}
                  alt='emoji applaudissement'
                />
              </p>
              <div className='section-container'>
                <div className='content-container-left'>
                  {activity && (
                    <DailyActivity
                      chart={<SimpleBarChart activity={activity} />}
                    />
                  )}
                  <div className='container-caloriemeasurementcard'>
                    {averageSessions && (
                      <CalorieMeasurementCard
                        chart={
                          <TinyLineChart averageSessions={averageSessions} />
                        }
                      />
                    )}
                    {performance && (
                      <CalorieMeasurementCard
                        chart={<SimpleRadarChart performance={performance} />}
                      />
                    )}

                    <CalorieMeasurementCard
                      chart={<ScoreRadialBarChart userInfos={userInfos} />}
                    />
                  </div>
                </div>

                <div className='content-container-right'>
                  <div key={userInfos.id}>
                    <StatsCard
                      data={
                        DataModelisationService.converToKCal(
                          userInfos.data.keyData.calorieCount
                        ) + 'kCal'
                      }
                      image={iconEnergy}
                      icon={'icon-energy'}
                      name='Calories'
                    />
                    <StatsCard
                      data={userInfos.data.keyData.proteinCount + 'g'}
                      image={iconChicken}
                      icon={'icon-chicken'}
                      name='Proteines'
                    />
                    <StatsCard
                      data={userInfos.data.keyData.carbohydrateCount + 'g'}
                      image={iconApple}
                      icon={'icon-apple'}
                      name='Glucides'
                    />
                    <StatsCard
                      data={userInfos.data.keyData.lipidCount + 'g'}
                      image={iconCheeseburger}
                      icon={'icon-cheesburger'}
                      name='Lipides'
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className='animation'>
              <span className='loader loader_spinner'></span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

CalorieMeasurementCard.propTypes = {
  chart: PropTypes.node.isRequired
};

DailyActivity.propTypes = {
  chart: PropTypes.node.isRequired
};

ScoreRadialBarChart.propTypes = {
  userInfos: PropTypes.object.isRequired
};

SimpleBarChart.propTypes = {
  activity: PropTypes.object.isRequired
};

SimpleRadarChart.propTypes = {
  performance: PropTypes.object.isRequired
};

StatsCard.propTypes = {
  data: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

TinyLineChart.propTypes = {
  averageSessions: PropTypes.object.isRequired
};

export default Home;
