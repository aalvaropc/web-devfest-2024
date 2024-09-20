
import ScheduleTable from '../../components/Schedule/ScheduleTable';
import './Schedule.css';

const Schedule = () => {
  return (
    <div className="schedule-view">
      {/* <h1>Calendario de Eventos</h1> */}

      <h1 className="calendario__titulo">Agenda</h1>
      <div className="calendario__container">
          <ScheduleTable />
      </div>
    </div>
  );
};

export default Schedule;
