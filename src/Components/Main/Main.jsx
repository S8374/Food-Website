
import Body from "../Body/Body";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";

const Main = () => {
    return (
        <div className="md:container md:mx-auto ">
            <div>
                  <Header ></Header>
            </div>
          
              <div>
                  <Body></Body>
              </div>
              <div>
                   <Cards></Cards>
              </div>
        </div>
    );
};

export default Main;