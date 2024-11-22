import './FilterButtons.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const FilterButtons = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter.key}
          className={`filter-button ${activeFilter === filter.key ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.key)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
FilterButtons.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterButtons;
