import schedulePrincipal from '../../../data/schedulePrincipal.json';
import scheduleSecundario from '../../../data/scheduleSecundario.json';
import { useState, useEffect } from 'react';
import FilterButtons from '../FilterButtons';
import SalonColumn from '../SalonColumn';
import BreakColumn from '../BreakColumn';
import './ScheduleTable.css';


const ScheduleTable = () => {
  const [filter, setFilter] = useState('General');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filter === 'General') {
      setData(schedulePrincipal);
    } else {
      setData(scheduleSecundario);
    }
  }, [filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const isBreakTime = (salons) => {
    return salons.every(salon => salon.name === 'Descanso');
  };

  const getSalonColumn = (salon) => {
    return salon.name ? (
      <SalonColumn salon={salon} />
    ) : (
      <div className="empty-salon"></div>
    );
  };

  return (
    <div className="schedule-container">
      <FilterButtons filter={filter} onFilterChange={handleFilterChange} />

      <div className="header-row">
        <div className="time-header">Horas</div>
        {data[0]?.salons.map((salon, index) => (
          <div key={index} className={`header-column ${salon.environment.toLowerCase()}-env`}>
            {salon.environment} - {salon.name}
          </div>
        ))}
      </div>

      {data.map((slot, index) => (
        <div 
          key={index} 
          className={`schedule-row ${isBreakTime(slot.salons) ? 'break-time' : ''}`}
        >
          <div className="time-column">{slot.time}</div>
          {isBreakTime(slot.salons) ? (
            <BreakColumn />
          ) : (
            slot.salons.map(salon => getSalonColumn(salon))
          )}
        </div>
      ))}
    </div>
  );
};

export default ScheduleTable;
