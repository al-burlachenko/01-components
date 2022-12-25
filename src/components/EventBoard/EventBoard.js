import Event from 'components/Event';
import css from './EventBoard.module.css';

function EventBoard({ events }) {
  console.log(events);
  return events.map(item => (
    <Event
      className={css.eventBoard}
      name={item.name}
      location={item.location}
      speaker={item.speaker}
      type={item.type}
      timeStart={item.time.start}
      timeEnd={item.time.end}
    ></Event>
  ));
}

export default EventBoard;
