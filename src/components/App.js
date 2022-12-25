import data from 'upcoming-events.json';

import EventBoard from './EventBoard';
import Title from './Title';

// console.log(data);

function App() {
  return (
    <>
      <Title title="болтание болторезами без болтов" />
      <EventBoard props={data} />
    </>
  );
}

export default App;
