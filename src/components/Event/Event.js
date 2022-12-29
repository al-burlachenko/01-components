import PropTypes from 'prop-types';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import { formatDate, formatEventDistance } from 'utils';
import css from './Event.module.css';

console.log(css);
function Event({ name, location, speaker, type, timeStart, timeEnd }) {
  return (
    <div className={css.event}>
      <h2 className={css.title}>Name</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={16} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={16} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={16} />
        {formatDate(timeStart)}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} size={16} />
        {formatEventDistance(timeStart, timeEnd)}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
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
