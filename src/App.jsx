import UFOSightings from './components/UFOSightings';
import Heading from './components/Heading';

const App = () => {
  return (
    <div className='container mx-auto p-4'>
      <Heading value={'UFO Sightings Dashboard'} />
      <UFOSightings />
    </div>
  );
};

export default App;
