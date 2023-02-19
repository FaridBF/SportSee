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

import data from '../../data/stat.json';

import '../Home/home.css';
import { useEffect } from 'react';

function Home(props) {
  function converToKCal(calorie) {
    const kiloCal = calorie / 1000;
    return kiloCal.toFixed(3);
  }

  useEffect(() => {
    console.log('data', data.data);
  });

  return (
    <section>
      <Header />
      <div className='container'>
        <LeftMenu />
        <div className='daily-container'>
          <h1 className='title-container-home'>
            Bonjour <span className='name-container-home'>Farid</span>
          </h1>
          <p className='presentation-container-home'>
            Félicitation! Vous avez explosé vos objectifs hier
            <img className='emoji' src={emoji} alt='emoji applaudissement' />
          </p>{' '}
          <div className='section-container'>
            <div className='content-container-left'>
              <DailyActivity chart={<SimpleBarChart />} />
              <div className='container-caloriemeasurementcard'>
                <CalorieMeasurementCard chart={<TinyLineChart />} />
                <CalorieMeasurementCard chart={<SimpleRadarChart />} />
                <CalorieMeasurementCard chart={<PieChartWithPaddingAngle />} />
              </div>
            </div>

            <div className='content-container-right'>
              <div key={data.id}>
                <StatsCard
                  data={converToKCal(data.data.keyData.calorieCount) + 'kCal'}
                  image={iconEnergy}
                  icon={'icon-energy'}
                  name='Calories'
                />
                <StatsCard
                  data={data.data.keyData.proteinCount + 'g'}
                  image={iconChicken}
                  icon={'icon-chicken'}
                  name='Proteines'
                />
                <StatsCard
                  data={data.data.keyData.carbohydrateCount + 'g'}
                  image={iconApple}
                  icon={'icon-apple'}
                  name='Glucides'
                />
                <StatsCard
                  data={data.data.keyData.lipidCount + 'g'}
                  image={iconCheeseburger}
                  icon={'icon-cheesburger'}
                  name='Lipides'
                />
              </div>

              {/* <StatsCard image={iconEnergy} icon={'icon-energy'} />
              <StatsCard image={iconChicken} icon={'icon-chicken'} />
              <StatsCard image={iconApple} icon={'icon-apple'} />
              <StatsCard image={iconCheeseburger} icon={'icon-cheesburger'} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
