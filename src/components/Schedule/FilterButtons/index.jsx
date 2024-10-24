import './FilterButtons.css';

// eslint-disable-next-line react/prop-types
const FilterButtons = ({ filter, onFilterChange }) => {
  return (
    <div className="filter-buttons">
      <button 
        className={`filter-button ${filter === 'General' ? 'active' : ''}`} 
        onClick={() => onFilterChange('General')}
      >
        General
      </button>
      <button 
        className={`filter-button ${filter === 'Secundario' ? 'active' : ''}`} 
        onClick={() => onFilterChange('Secundario')}
      >
        Talleres
      </button>
    </div>
  );
};

export default FilterButtons;
