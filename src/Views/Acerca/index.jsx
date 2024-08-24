import "./Acerca.css";
import Grid from "../../components/Acerca/Grid";
import Text from "../../components/Acerca/Text";
import Image from "../../components/Acerca/Image";

function Acerca() {
  return (
    <div className="page-container">
      <h1 className="acerca__titulo">Acerca</h1>
        <Grid>
          <div className="centered-image">
          <Image />
        </div>
          <div className="flex flex-col md:justify-center">
            <Text />
          </div>
        </Grid>
      </div>
    );
  }

  export default Acerca;
