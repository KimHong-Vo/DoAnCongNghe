
import React, { Fragment, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import "./TablesOfWorkSpace.modules.scss";
//import Background from "./meeting.jpg";
import PeopleTwoToneIcon from "@mui/icons-material/PeopleTwoTone";
import { Button } from "@mui/material";
//import StarBorderIcon from "@mui/icons-material/StarBorder";
//import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import TablesOfWorkSpaceItem from "./TablesOfWorkSpaceItem";

function TablesOfWorkSpace() {
  const [listTableState, setListTableState] = useState([])
  useEffect(() => {
    const getTable = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=4"
        )
        //console.log(res.data)
        setListTableState(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getTable()
  }, [])

  return (

    <Fragment>

      <Box sx={{ flexGrow: 1 }}>
        <div className="title1">
          <div className="content1">
            <div className="iconFont">
              <span>
                <PermIdentitySharpIcon />
              </span>
            </div>
            <h3>Các bảng của bạn</h3>
          </div>
          <div>
            <ul className="boardpagesSeaction"></ul>
          </div>
        </div>
        <Grid item xs={2} sm={4} md={3}>
          {listTableState.map(table => {
            return (
              <TablesOfWorkSpaceItem
                key={table.id}
                tableProps={table}
              />)
          })}
          <Button>
            <a className="board-title background-table" href="action">
              <span className="createTable">Tạo bảng mới</span>
            </a>
          </Button>
        </Grid>
        {/* <Grid item xs={2} sm={4} md={3}>
          
        </Grid> */}
        <div className="title2">
          <div className="content1">
            <div className="iconFont">
              <span>
                <PeopleTwoToneIcon />
              </span>
            </div>
            <h3>Tất cả các bảng trong Không gian làm việc này</h3>
          </div>
        </div>
        <Grid item xs={2} sm={4} md={3}>
          {listTableState.map(table => {
            return (
              <TablesOfWorkSpaceItem
                key={table.id}
                tableProps={table}
              />)
          })}

          <Button>
            <a className="board-title background-table" href="action">
              <span className="createTable">Tạo bảng mới</span>
            </a>
          </Button>

        </Grid>


      </Box>

    </Fragment>
  );
}
export default TablesOfWorkSpace;
