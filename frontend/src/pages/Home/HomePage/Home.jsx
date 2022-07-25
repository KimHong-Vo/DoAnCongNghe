import React, { useEffect, useState } from "react";
import NavigationBar from "../../../components/Shared/NavigationBar/NavigationBar";
import Menu from "../../../components/Shared/Menu/Menu";
import TablesOfWorkSpace from "../TablesOfWorkSpace/TablesOfWorkSpace";
import WorkSpaceDetail from "../../WorkSpaceDetail/WorkSpaceDetail";
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
        <div className="w-1/5 bg-red-400">
          
        </div>
        <div className="w-4/5">
          <WorkSpaceDetail />
        </div>
      </div>
    </div>
  );
};

export default Home;
