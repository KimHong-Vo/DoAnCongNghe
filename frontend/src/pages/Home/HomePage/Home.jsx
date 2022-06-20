import React, { useEffect } from "react";
import NavigationBar from "../../../components/Shared/NavigationBar/NavigationBar";
import Menu from "../../../components/Shared/Menu/Menu";
import TablesOfWorkSpace from "../TablesOfWorkSpace/TablesOfWorkSpace";

const Home = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div className="w-full h-full">
      <div className="w-full">
        <NavigationBar />
      </div>
      <div className="flex flex-row w-full mt-2">
        <div>
          <Menu />
        </div>
        <div>
          <TablesOfWorkSpace />
        </div>
      </div>
    </div>
  );
};

export default Home;
