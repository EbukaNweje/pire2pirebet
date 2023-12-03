// import { useState } from "react";
// import HomeHeader from "../HomeHeader/HomeHeader";
import HomeContents from "./HomeContents";
import "./HomePage.css";

const HomePage = () => {

  // const[home1, setHome1] = useState(true)
  // const[home2, setHome2] = useState(false)

  

    return (
        <>
            <div className="HomePageBody">
              {/* <HomeHeader /> */}
                <HomeContents />
            </div>
        </>
    );
};

export default HomePage;
