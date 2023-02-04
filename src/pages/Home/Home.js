import CalorieMeasurementCard from '../../components/CalorieMeasurementCard/CalorieMeasurementCard';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import StatsCard from '../../components/StatsCard/StatsCard';
import SimpleRadarChart from '../../components/SimpleRadarChart/SimpleRadarChart';
import CustomActiveShapePieChart from '../../components/CustomActiveShapePieChart/CustomActiveShapePieChart';
import SimpleBarChart from '../../components/SimpleBarChart/SimpleBarChart';
import SimpleLineChart from '../../components/SimpleLineChart/SimpleLineChart';

import iconApple from '../../assets/statsCard/apple.png';
import iconCheeseburger from '../../assets/statsCard/cheeseburger.png';
import iconChicken from '../../assets/statsCard/chicken.png';
import iconEnergy from '../../assets/statsCard/energy.png';
import emoji from '../../assets/emoji/emoji.png';

import '../Home/home.css';

function Home(props) {
  return (
    <section>
      <Header />
      <section className='container'>
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
                <CalorieMeasurementCard chart={<SimpleLineChart />} />
                <CalorieMeasurementCard chart={<SimpleRadarChart />} />
                <CalorieMeasurementCard chart={<CustomActiveShapePieChart />} />
              </div>
            </div>
            <div className='content-container-right'>
              <StatsCard image={iconEnergy} icon={'icon-energy'} />
              <StatsCard image={iconChicken} icon={'icon-chicken'} />
              <StatsCard image={iconApple} icon={'icon-apple'} />
              <StatsCard image={iconCheeseburger} icon={'icon-cheesburger'} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
