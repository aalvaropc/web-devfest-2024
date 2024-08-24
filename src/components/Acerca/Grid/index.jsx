import "./Grid.css"

const Grid = ({children}) => {
  return <div className="grid__containerr grid__lg grid__xl gridd gap__8 gap__md md__grid">{children}</div>;
}

export default Grid