import React from "react";
import Styles from "./TableCreatingPopup.module.scss";

import {
  Popover,
  Button,
  IconButton,
  FormControl,
  NativeSelect,
  Select,
  Box,
  MenuItem,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ClearIcon from "@mui/icons-material/Clear";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import WorkIcon from "@mui/icons-material/Work";
import { useState } from "react";

const TableCreatingPopup = (props) => {
  const bgColors = [
    "rgb(0, 121, 191)",
    "rgb(210, 144, 52)",
    "rgb(81, 152, 57)",
    "rgb(176, 70, 50)",
    "rgb(137, 96, 158)",
    "rgb(131, 140, 145)",
  ];
  const elementWorkSpace = [
    "WorkSpace 1",
    "WorkSpace 2",
    "WorkSpace 3",
    "WorkSpace 4",
  ];
  const[changeBackgroundColor, setBackgroundColor] = useState(bgColors[0]);
 
  const [permission, setPermission] = React.useState(20);

  const handleChange = (event) => {
    setPermission(event.target.value);
  };

  return (
    <div>
      <section className={Styles.tableCreatingPopup}>
        <header className={Styles.headerTableCreatingPopup}>
          <IconButton aria-label="goBack" sx={{ gridColumn: 1, gridRow: 1 }}>
            <ChevronLeftIcon sx={{ fontSize: 25 }}></ChevronLeftIcon>
          </IconButton>
          <IconButton aria-label="close" sx={{ gridColumn: 3, gridRow: 1 }}>
            <ClearIcon sx={{ fontSize: 20 }}></ClearIcon>
          </IconButton>
          <div className={Styles.titleHeader}>Tạo bảng</div>
        </header>
        <div className={Styles.bodyTableCreatingPopup}>
          <div className={Styles.prototypeBackground}>         
              <div className={Styles.backgroundImgPrototype} style={{backgroundColor: (changeBackgroundColor)}}>
                <img
                  src="https://a.trellocdn.com/prgb/dist/images/board-preview-skeleton.14cda5dc635d1f13bc48.svg"
                  alt=""
                  role="presentation"
                ></img>
              </div>
          </div>
          <div className={Styles.chooseBackground}>
            <div>
              {" "}
              <label for="background-picker">Phông nền</label>{" "}
            </div>
            <div class="background-picker">      
              <ul className={Styles.background}>
                {bgColors.map((x, i) => (
                  <button className={Styles.buttonChooseBackgroundColor} key={i} onClick = {() => setBackgroundColor(x)}>
                    <li className={Styles.backgroundColor} style ={{backgroundColor: (x)}}> </li>
                  </button>
                ))}
              </ul>
            </div>
          </div>
          <form>
            <div className="TittleTable">
              <label className={Styles.titleTable}>
                <div>
                  Tiêu đề bảng
                  <span className={Styles.noteImportantSpan}>*</span>
                </div>
                <input
                  className={Styles.inputField}
                  type="text"
                  spellCheck="off"
                ></input>
              </label>
            </div>
            <div className={Styles.notification}>
              <span
                role="img"
                aria-label="wave"
                className={Styles.notificationIcon}
              >
                👋
              </span>
              <p>Tiêu đề bảng là bắt buộc</p>
            </div>
            <label>Không gian làm việc</label>
            <FormControl fullWidth>
              <NativeSelect
                defaultValue={1}
                inputProps={{
                  name: "nameOfWorkSpace",
                  id: "uncontrolled-native",
                }}
              >
                {elementWorkSpace.map((value, index) => {
                  return <option key={index}>{value}</option>;
                })}
              </NativeSelect>
            </FormControl>
            <label>Quyền xem</label>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  defaultValue={20}
                  value={permission}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Riêng tư</MenuItem>
                  <MenuItem value={20}>Không gian làm việc</MenuItem>
                  <MenuItem value={30}>Công khai</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <button disabled className={Styles.buttonCreateNew}>
              Tạo mới
            </button>
          </form>
          <button className={Styles.buttonStartWithTemplate}>
            Bắt đầu với mẫu
          </button>
        </div>
      </section>
    </div>
  );
};

export default TableCreatingPopup;
