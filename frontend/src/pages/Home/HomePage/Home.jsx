import React, { useEffect, useState } from "react";
import NavigationBar from "../../../components/Shared/NavigationBar/NavigationBar";
import Menu from "../../../components/Shared/Menu/Menu";
import TablesOfWorkSpace from "../TablesOfWorkSpace/TablesOfWorkSpace";
import WorkSpaceService from "../../../service/WorkSpaceService";
import axios from "axios";
const Home = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const [listTableState, setListTableState] = useState([]);
  useEffect(() => {
    const getTable = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/talbe",
        );

        res.setHeader("contet-type", "Access-Control-Allow-Origin");
       
        //console.log(res.data)
        setListTableState(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTable();
  }, []);
  return (
    <div className="w-full h-full">
      <div className="w-full">
        {/* <NavigationBar /> */}
      </div>
      <div className="flex flex-row w-full mt-2">
        <div className="w-1/5">
          <Menu />
        </div>
        <div className="w-4/5">
          <TablesOfWorkSpace />
        </div>
      </div>
    </div>
  );
};

export default Home;
