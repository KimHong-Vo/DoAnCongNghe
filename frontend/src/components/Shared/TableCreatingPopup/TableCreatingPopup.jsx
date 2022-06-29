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

const TableCreatingPopup = (props) => {
  const backgroundImage = [
    "https://images.unsplash.com/photo-1652541594278-d7dbc83be9d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjUyOTQyMTQ2&ixlib=rb-1.2.1&q=80&w=400",
    "https://images.unsplash.com/photo-1656094829222-fd695b4ba6e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjU2MjU1MTkw&ixlib=rb-1.2.1&q=80&w=400",
    "https://images.unsplash.com/photo-1656119651638-9825fe739131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjU2MjU1MTkw&ixlib=rb-1.2.1&q=80&w=400",
    "https://images.unsplash.com/photo-1656067638332-1d189bf81079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNjU2MjU1MTkw&ixlib=rb-1.2.1&q=80&w=400",
  ];
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
            <div className={Styles.backgroundImgPrototype}>
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
            <div id="background-picker">
              
              <ul className={Styles.background}>
                {/* {backgroundImage.map((x, i) => (
                  <li className={Styles.backgroundImg} key={i}>
                    <img src={x} alt="imgBackground" />
                  </li>
                ))} 
                  Map ra thẻ img vậy nè, rồi ông set sự kiện onClick cho thẻ <li></li>.
                  Ông tạo thêm cái useState là 1 cái string background ảnh, rồi mỗi lần click vô thẻ li là set background
                    của useState lại là x.
                */
                  
                }
              </ul>
              <ul className={Styles.background}>
                {[...Array(5)].map((x, i) => (
                  <li className={Styles.backgroundColor} key={i}>
                    <button
                      className={Styles.buttonChooseBackgroundColor}
                    ></button>
                  </li>
                ))}
                <li className={Styles.backgroundColor}>
                  <button className={Styles.buttonChooseBackgroundColorExtend}>
                    <MoreHoriz sx={{ color: grey[700] }}></MoreHoriz>
                  </button>
                </li>
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
            <p className={Styles.notificationText}>
              Không gian làm việc này còn 10 bảng. Các Không gian làm việc miễn
              phí chỉ có thể có 10 bảng mở. Để có bảng không giới hạn, hãy nâng
              cấp Không gian làm việc của bạn.
            </p>
            <div className="StartToTryFree">
              <button className={Styles.buttonStartToTryFree}>
                <WorkIcon sx={{ paddingRight: 1 }} fontSize="small"></WorkIcon>
                <div className={Styles.textOfStartToTryFree}>
                  Bắt đầu dùng thử miễn phí
                </div>
              </button>
            </div>
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
