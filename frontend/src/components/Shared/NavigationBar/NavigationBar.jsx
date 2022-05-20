import React from "react";
import styles from "./NavigationBar.module.scss";
import { icons } from "../../../utils";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AvatarText from "./AvatarText";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#fff",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const NavigationBar = () => {
  return (
    <div className={styles.mainContainer}>
      <span className={styles.appSwitcher}>
        <icons.applicationSwitcherIcon />
      </span>

      <span className={styles.logo}>
        <icons.logoTrello />
      </span>

      <div className={styles.btnAppBar}>
        <Button variant="outlined" endIcon={<icons.downIcon />}>
          Các Không Gian Làm Việc
        </Button>
      </div>

      <div className={styles.btnAppBar}>
        <Button variant="outlined" endIcon={<icons.downIcon />}>
          Gần Đây
        </Button>
      </div>
      <div className={styles.btnAppBar}>
        <Button variant="outlined" endIcon={<icons.downIcon />}>
          Đã Đánh Dấu Sao
        </Button>
      </div>
      <div className={styles.btnAppBar}>
        <Button variant="outlined" endIcon={<icons.downIcon />}>
          Mẫu
        </Button>
      </div>
      <Button
        sx={{ bgcolor: "#014a75", padding: "5px 15px" }}
        variant="contained"
      >
        Tạo Mới
      </Button>

      <div className={styles.search}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Tìm kiếm..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>

      <div className={styles.infor}>
        <icons.informationIcon />
      </div>

      <div className= {styles.noti}>
        <icons.notificationIcon />
      </div>

      <div className= {styles.avatar}>
        <AvatarText nameText="Dang Kiet" />
      </div>
    </div>
  );
};

export default NavigationBar;
