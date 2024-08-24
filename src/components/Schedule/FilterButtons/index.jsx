import './FilterButtons.css';

// eslint-disable-next-line react/prop-types
const FilterButtons = ({ filter, onFilterChange }) => {
  return (
    <div className="filter-buttons">
      <button 
        className={`filter-button ${filter === 'Principal' ? 'active' : ''}`} 
        onClick={() => onFilterChange('Principal')}
      >
        Principal
      </button>
      <button 
        className={`filter-button ${filter === 'Secundario' ? 'active' : ''}`} 
        onClick={() => onFilterChange('Secundario')}
      >
        Secundario
      </button>
    </div>
  );
};

export default FilterButtons;
