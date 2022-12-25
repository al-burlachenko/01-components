import css from './Event.module.css';
// console.log(css);

function Event({ name, location, speaker, type, timeStart, timeEnd }) {
  return (
    <div className={CSS.event}>
      <h2 className={CSS.title}>Name</h2>
      <p className={CSS.info}>
        <i className={CSS.icon}></i>
        Location
      </p>
      <p className={CSS.info}>
        <i className={CSS.icon}></i>
        Speaker
      </p>
      <p className={CSS.info}>
        <i className={CSS.icon}></i>
        Start Date
      </p>
      <p className={CSS.info}>
        <i className={CSS.icon}></i>
        Duration
      </p>
      <span className={CSS.chip}>Event type</span>
    </div>
  );
}

export default Event;
