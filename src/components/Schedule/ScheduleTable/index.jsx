import FilterButtons from '../FilterButtons';
import SalonColumn from '../SalonColumn';
import BreakColumn from '../BreakColumn';
import './ScheduleTable.css';
import { useScheduleData } from './hooks/useScheduleData';


const ScheduleTable = () => {
  const filters = [
    { key: 'General', label: 'General' },
    { key: 'Secundaria', label: 'Secundaria' },
    { key: 'Secundario', label: 'Talleres' },
  ];
  
  const { filter, data, changeFilter } = useScheduleData('General');

  const isBreakTime = (salons) => {
    return salons.every((salon) => salon.name === 'Descanso');
  };

  const renderSalonColumn = (salon) => {
    return salon.name ? (
      <SalonColumn salon={salon} />
    ) : (
      <div className="empty-salon"></div>
    );
  };

  return (
    <div className="schedule-container">
      <FilterButtons 
        filters={filters} 
        activeFilter={filter} 
        onFilterChange={changeFilter} 
      />

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
            slot.salons.map((salon) => renderSalonColumn(salon))
          )}
        </div>
      ))}
    </div>
  );
};

export default ScheduleTable;
