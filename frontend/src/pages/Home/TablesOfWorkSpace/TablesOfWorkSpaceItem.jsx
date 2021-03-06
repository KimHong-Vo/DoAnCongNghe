import React from "react";
//import Grid from "@mui/material/Grid";
//import Box from "@mui/material/Box";
//import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import "./TablesOfWorkSpace.modules.scss";
//import Background from "./meeting.jpg";
//import PeopleTwoToneIcon from "@mui/icons-material/PeopleTwoTone";
//import { Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
//import StarIcon from "@mui/icons-material/Star";
//import axios from "axios";
import PropTypes from "prop-types";
const TablesOfWorkSpaceItem = props => {
  const table = props.tableProps
  return (
    <div className="board-title">
      {/* <span className="board-title-fade"></span>  */}
      <a href={table.link}>
        <div className="board-title-detail">
          <div title={table.title} className="board-title-detail-name">
            <div>{table.title}</div>
          </div>
          <div className="board-title-detail-sub-container">
            <span className="board-title-option">
              <span
                title="Bấm để gắn dấu sao bảng này. Bảng này sẽ được thêm vào danh sách được đánh dấu sao của bạn."
                className="board-title-option-icon"
              >
                <StarBorderIcon className="editStar"></StarBorderIcon>
              </span>
            </span>
          </div>
        </div>
      </a>
    </div>


  );
}
TablesOfWorkSpaceItem.propTypes = {
  tableProps: PropTypes.object.isRequired
}
export default TablesOfWorkSpaceItem;
