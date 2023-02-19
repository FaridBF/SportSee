import { useEffect, useState } from 'react';
import axios from 'axios';

import mockUserInfos from '../../mocks/mockUserInfos.json';
import converToKCal from '../../utils/converToKCal';
import serviceApi from '../../service';

import CalorieMeasurementCard from '../../components/CalorieMeasurementCard/CalorieMeasurementCard';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import StatsCard from '../../components/StatsCard/StatsCard';
import SimpleRadarChart from '../../components/SimpleRadarChart/SimpleRadarChart';
import PieChartWithPaddingAngle from '../../components/PieChartWithPaddingAngle/PieChartWithPaddingAngle';
import SimpleBarChart from '../../components/SimpleBarChart/SimpleBarChart';
import TinyLineChart from '../../components/TinyLineChart/TinyLineChart';

import iconApple from '../../assets/statsCard/apple.png';
import iconCheeseburger from '../../assets/statsCard/cheeseburger.png';
import iconChicken from '../../assets/statsCard/chicken.png';
import iconEnergy from '../../assets/statsCard/energy.png';
import emoji from '../../assets/emoji/emoji.png';

import '../Home/home.css';

function Home() {
  const [userInfos, setUserInfos] = useState(null);
  const userId = 18;

  const fetchData = async () => {
    try {
      const response = await serviceApi.getUserInformations(userId);
      setUserInfos(response);
    } catch (error) {
      alert('Une erreur est survenue lors du chargement des données.');
    }
  };

  useEffect(() => {
    fetchData();
    // with mocked data
    // setUserInfos(mockUserInfos);
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
                  <DailyActivity chart={<SimpleBarChart />} />
                  <div className='container-caloriemeasurementcard'>
                    <CalorieMeasurementCard chart={<TinyLineChart />} />
                    <CalorieMeasurementCard
                      chart={<SimpleRadarChart data='alo' />}
                    />
                    <CalorieMeasurementCard
                      chart={<PieChartWithPaddingAngle />}
                    />
                  </div>
                </div>

                <div className='content-container-right'>
                  <div key={userInfos.id}>
                    <StatsCard
                      data={
                        converToKCal(userInfos.data.keyData.calorieCount) +
                        'kCal'
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
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
