import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';

import '../Home/home.css';

function Home(props) {
  return (
    <section>
      <Header />
      <section className='container'>
        <LeftMenu />
        <div className='content-container'>
          <h1>Bonjour Farid</h1>
          <p>Félécitation! Vous avez explosé vos objectifs hier</p>
        </div>
      </section>
    </section>
  );
}

export default Home;
