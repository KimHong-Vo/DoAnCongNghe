import React, { useEffect } from "react";
import styles from "./NavigationBar.module.scss";
import { icons } from "../../../utils";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AvatarText from "./AvatarText";
import TableCreatingPopup from "../TableCreatingPopup/TableCreatingPopup";
import Popover from "@mui/material/Popover";
import WorlSpaceCreatingPopup from "../WorlSpaceCreatingPopup/WorlSpaceCreatingPopup";
import DropDown from "../DropDown/DropDown";
import WorkSpaceService from "../../../service/WorkSpaceService";

import { UserAuth } from "../../../Context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElTable, setAnchorELTable] = React.useState(null);

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const [options, setOptions] = React.useState([]);

  const workSpaceService = new WorkSpaceService();

  function getApi() {
    return workSpaceService.getAll();
  }

  useEffect(() => {
    getApi()
      .then((res) => {
        setOptions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 

  const [userName, setUserName] = React.useState("");
  
  const handleCreatingNew = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCreatingTable = (event) => {
    setAnchorELTable(event.currentTarget);
  };

  const handleCloseNew = () => {
    setAnchorEl(null);
  };

  const handleCloseCreatingTable = () => {
    setAnchorELTable(null);
  };

  const open = Boolean(anchorEl);
  const openCreatingTable = Boolean(anchorElTable);

  const [isOpenCreatingWorkSpace, setIsOpenCreatingWorkSpace] =
    React.useState(false);

  const handleLogOutBasic = async (e) => {
    e.preventDefault();
    let token = await window.localStorage.getItem("token");

    axios.get("http://localhost:8080/account/logout", {
      responseType: "json",
      headers: { Authorization: token },
    });
    window.localStorage.removeItem("token");
    setUserName("");
    navigate("/login");
  };

  async function getFunctionName() {
    let token = await window.localStorage.getItem("token");
    // console.log("get token nav bar: " + token);
    if (token == null) {
      return "";
    } else {
      let result = "";
      const uName = await axios
        .get("http://localhost:8080/account/getUser", {
          responseType: "json",
          headers: { Authorization: token },
        })
        .then((value) => {
          result = value.data.fullName;
          // console.log("get uname nav bar: " +result);
        });
      setUserName(result);
      return result;
    }
  }

  getFunctionName();
  return (
    <div className={styles.mainContainer}>
      <span className={styles.appSwitcher}>
        <icons.applicationSwitcherIcon />
      </span>

      <span className={styles.logo}>
        <Link to="/">
          <icons.logoTrello />
        </Link>
      </span>

      <div className={styles.btnAppBar}>
        <DropDown options={options} />
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
      <button
        onClick={handleCreatingNew}
        className="text-white ml-10 px-4 py-2 bg-[#2b607f] rounded-sm hover:cursor-pointer hover:bg-gray-500"
      >
        Tạo mới
      </button>

      <div className="flex items-center absolute right-2 p-2">
        <div className="mr-10">
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

        <div>
          {user?.displayName ? (
            <div className="flex items-center">
              <AvatarText nameText={user.displayName} />
              <button
                onClick={handleSignOut}
                className="hover:bg-white flex hover:text-black items-center justify-center ml-5 px-5 py-2 border border-solid font-semibold rounded-lg mr-10"
              >
                <span className="pt-1">Logout</span>
              </button>
            </div>
          ) : userName !== "" ? (
            <></>
          ) : (
            <button className="px-5 py-2 bg-gray-200 rounded-sm">
              <Link
                className="font-semibold text-black no-underline"
                to="/login"
              >
                Sign In
              </Link>
            </button>
          )}
        </div>

        <div className={styles.avatar}>
          {userName !== "" ? (
            <div className="flex items-center">
              <AvatarText
                nameText={
                  userName.includes(" ")
                    ? userName
                    : userName.concat(" ").concat(userName)
                }
              />
              <button
                onClick={handleLogOutBasic}
                className="hover:bg-white flex hover:text-black items-center justify-center ml-5 px-5 py-2 border border-solid font-semibold rounded-lg mr-10"
              >
                <span className="pt-1">Logout</span>
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleCloseNew}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div className="bg-white w-[200px] pb-3">
              <div
                onClick={handleCreatingTable}
                className="bg-gray-200 w-[90%] hover:bg-slate-300 hover:cursor-pointer m-auto h-10 rounded-sm mt-2 flex items-center justify-center"
              >
                <span className="font-semibold">Tạo bảng</span>
              </div>
              <div
                onClick={() => {
                  setIsOpenCreatingWorkSpace(!isOpenCreatingWorkSpace);
                  setAnchorEl(null);
                }}
                className="bg-gray-200 w-[90%] hover:bg-slate-300 hover:cursor-pointer m-auto h-10 rounded-sm mt-2 flex items-center justify-center"
              >
                <span className="font-semibold">Tạo Không gian làm việc</span>
              </div>
            </div>
          </Popover>
        </div>

        <div>
          <Popover
            open={openCreatingTable}
            anchorEl={anchorElTable}
            onClose={handleCloseCreatingTable}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <TableCreatingPopup />
          </Popover>
        </div>

        {isOpenCreatingWorkSpace ? <WorlSpaceCreatingPopup /> : <></>}
      </div>
    </div>
  );
};

export default NavigationBar;


