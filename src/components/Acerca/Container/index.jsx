import "./Container.css"
// eslint-disable-next-line react/prop-types
const Container = ({children}) => {
  return <div className="containerr mx-auto py-12 md:py-24 px-4 flex justify-center reveal fade-bottom active">{children}</div>;
};

export default Container;