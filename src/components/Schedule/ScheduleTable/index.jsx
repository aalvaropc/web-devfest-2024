import { useState, useEffect } from 'react';
import FilterButtons from '../FilterButtons';
import SalonColumn from '../SalonColumn';
import BreakColumn from '../BreakColumn';
import './ScheduleTable.css';
import scheduleData from '../../../data/scheduleData.json';

const ScheduleTable = () => {
  const [filter, setFilter] = useState('Principal');
  const [data, setData] = useState([]);

  useEffect(() => {
    // Load schedule data
    setData(scheduleData);
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const isBreakTime = (salons) => {
    return salons.every(salon => salon.name === 'Descanso');
  };

  return (
    <div className="schedule-container">
      <FilterButtons filter={filter} onFilterChange={handleFilterChange} />

      <div className="header-row">
        <div className="time-header">Horas</div>
        {data[0]?.salons
          .filter(salon => filter === 'Principal' ? salon.environment === 'Principal' : salon.environment === 'Secundario')
          .map((salon, index) => (
            <div key={index} className={`header-column ${salon.environment.toLowerCase()}-env`}>
              {salon.environment} - {salon.name}
            </div>
          ))}
      </div>

      {data.map((slot, index) => (
        <div key={index} className="schedule-row">
          <div className="time-column">{slot.time}</div>
          {isBreakTime(slot.salons) ? (
            <BreakColumn />
          ) : (
            slot.salons
              .filter(salon => filter === 'Principal' ? salon.environment === 'Principal' : salon.environment === 'Secundario')
              .map((salon, i) => (
                <SalonColumn key={i} salon={salon} />
              ))
          )}
        </div>
      ))}
    </div>
  );
};

export default ScheduleTable;
