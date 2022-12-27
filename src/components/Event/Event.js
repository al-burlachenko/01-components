import PropTypes from 'prop-types';
import css from './Event.module.css';

// console.log(s);
function Event({ name, location, speaker, type, timeStart, timeEnd }) {
  return (
    <div className={css.event}>
      <h2 className={css.title}>Name</h2>
      <p className={css.info}>
        <i className={css.icon}></i>
        Location
      </p>
      <p className={css.info}>
        <i className={css.icon}></i>
        Speaker
      </p>
      <p className={css.info}>
        <i className={css.icon}></i>
        Start Date
      </p>
      <p className={css.info}>
        <i className={css.icon}></i>
        Duration
      </p>
      <span className={css.chip}>Event type</span>
    </div>
  );
}

export default Event;

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  timeStart: PropTypes.string.isRequired,
  timeEnd: PropTypes.string.isRequired,
};
