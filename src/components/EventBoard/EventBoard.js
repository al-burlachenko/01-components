import Event from 'components/Event';
import PropTypes from 'prop-types';
import css from './EventBoard.module.css';

function EventBoard({ events }) {
  return (
    <div className={css.eventBoard}>
      {events.map(item => (
        <Event
          key={item.name}
          name={item.name}
          location={item.location}
          speaker={item.speaker}
          type={item.type}
          timeStart={item.time.start}
          timeEnd={item.time.end}
        ></Event>
      ))}
    </div>
  );
}

export default EventBoard;

EventBoard.propTypes = {
  events: PropTypes.array,
};
