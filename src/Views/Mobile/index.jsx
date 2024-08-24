import "./Mobile.css";
import Grid from "../../components/Mobile/Grid";
import Text from "../../components/Mobile/Text";
import Image from "../../components/Mobile/Image";

function Mobile() {
  return (
    <div className="page-container">
      <h1 className="acerca__titulo"></h1>
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

  export default Mobile;
