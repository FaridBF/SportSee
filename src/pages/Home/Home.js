import CalorieMeasurementCard from '../../components/CalorieMeasurementCard/CalorieMeasurementCard';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import StatsCard from '../../components/StatsCard/StatsCard';

import '../Home/home.css';

function Home(props) {
  return (
    <section>
      <Header />
      <section className='container'>
        <LeftMenu />
        <div className='daily-container'>
          <h1>Bonjour Farid</h1>
          <p>Félécitation! Vous avez explosé vos objectifs hier</p>{' '}
          <div className='section-container'>
            <div className='content-container-left'>
              <DailyActivity />
              <div className='container-caloriemeasurementcard'>
                {' '}
                <CalorieMeasurementCard />
                <CalorieMeasurementCard />
                <CalorieMeasurementCard />
              </div>
            </div>
            <div className='content-container-right'>
              <StatsCard />
              <StatsCard />
              <StatsCard />
              <StatsCard />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
