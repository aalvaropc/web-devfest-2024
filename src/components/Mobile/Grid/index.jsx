import "./Grid.css";

const Grid = ({ children }) => {
  return (
    <div className="grid__container grid__lg grid__xl grid gap__8 gap__md md__grid">
      {children}
    </div>
  );
};

export default Grid;
