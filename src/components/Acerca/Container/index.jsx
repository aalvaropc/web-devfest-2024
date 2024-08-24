import "./Container.css"
const Container = ({children}) => {
  return <div className="containerr mx-auto py-12 md:py-24 px-4 flex justify-center reveal fade-bottom active">{children}</div>;
};

export default Container;