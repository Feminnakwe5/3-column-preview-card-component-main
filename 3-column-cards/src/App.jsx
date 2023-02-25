import './App.css';
import Card from './components/Card';
import sedan from '../../images/icon-sedans.svg';
import suvs from '../../images/icon-suvs.svg';
import luxury from '../../images/icon-luxury.svg';

function App() {
  return (
    <div className='Main-content'>
      <Card
        img={sedan}
        title='SEDANS'
        text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
      />
      <Card
        img={suvs}
        title='SUVS'
        text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
      />
      <Card
        img={luxury}
        title='LUXURY'
        text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
      />
    </div>
  );
}

export default App;
