import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TableService from "../../service/TableService";
import NavigationBar from "../../components/Shared/NavigationBar/NavigationBar";
import Menu from "../../components/Shared/Menu/Menu";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div className="w-full">{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const WorkSpaceDetail = (props) => {
  const [value, setValue] = React.useState(0);

  const [workspaces, setWorkspaces] = React.useState([]);

  const tableService = new TableService();

  function getApi() {
    return tableService.getAll(props.idSelected);
  }

  useEffect(() => {
    getApi()
      .then((res) => {
        setWorkspaces(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.idSelected]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="w-full h-screen">
      <div className="w-full">
        <NavigationBar />
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="w-1/6"><Menu /></div>
          <div className="w-3/4 ml-10">
            <div className="w-full">
              <Box sx={{ width: "100%", marginTop: 5 }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      style={{
                        fontWeight: 600,
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: 15,
                      }}
                      label="Bảng"
                      {...a11yProps(0)}
                    />
                    <Tab
                      style={{
                        fontWeight: 600,
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: 15,
                      }}
                      label="Bảng không gian làm việc"
                      {...a11yProps(1)}
                    />
                    <Tab
                      style={{
                        fontWeight: 600,
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: 15,
                      }}
                      label="Thành viên"
                      {...a11yProps(2)}
                    />
                    <Tab
                      style={{
                        fontWeight: 600,
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: 15,
                      }}
                      label="Cài đặt"
                      {...a11yProps(3)}
                    />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <div className="w-full flex flex-wrap">
                    {workspaces.map((workspace, index) => (
                      <div
                        key={workspace.id}
                        className="w-[300px] h-[100px] relative ml-5 mt-2"
                      >
                        
                        <div className="absolute w-full h-full cursor-pointer">
                          <img
                            className="rounded-lg object-cover w-[320px] h-[100px]"
                            src={workspace ? workspace.background.path : ""}
                            alt="img"
                          />
                        </div>
                        <div className="w-full h-full z-20 absolute top-4">
                          <span className="font-semibold text-white p-3">
                            {workspace.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Bảng không gian làm việc
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Thành viên
                </TabPanel>
                <TabPanel value={value} index={3}>
                  Cài đặt
                </TabPanel>
              </Box>
            </div>
          </div>
      </div>
    </div>
  );
};

export default WorkSpaceDetail;
