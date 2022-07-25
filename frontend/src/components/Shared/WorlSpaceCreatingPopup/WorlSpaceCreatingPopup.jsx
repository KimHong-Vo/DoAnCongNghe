import React from "react";
import "./WorlSpace.scss";
import Background from "./CreateWSpaceBground.png";
import WSicon from "./CreateWspacePic.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import axios from "axios";
import isEmpty from "validator/lib/isEmpty";
import { useNavigate } from "react-router-dom"
import Alert from '@mui/material/Alert';
const style = {
  position: "absolute",
  top: "50%",
  left: "35%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  outline: "none",
  border: "none",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const WorlSpaceCreatingPopup = () => {
  const [wsName, setWSName] = useState("");
  const history= useNavigate();
  const [wsType, setWSType] = useState("");
  const [description, setDescription] = useState("");
  const [validationMsg, setValidationMsg] = useState({});
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  const validateAll = () => {
    const msg={}
    if (isEmpty(wsName)) {
      msg.wsName ="Please input a name"}
      setValidationMsg(msg)
      if (Object.keys(msg).length > 0) return false
      return true
    }
  const handleSubmitBtn = async (e) => {
    const isValid = validateAll()
     
    e.preventDefault();
    console.log(">>>check data state: ", wsName, wsType, description);
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/insertWorkspace",
        data: {
          // data instead params when method isn't get
          name: wsName,
          type: wsType,
          description: description
        }
      });
    } catch(error) {
      console.log(error)
    }
    if (!isValid) return
    history('/tablesofworkspace')
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} className="popupBox">
        <Grid
          className="container"
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={8} md={8} key={0} className="leftGrid">
            <div className="leftItem">
              <div className="title">
                <h2>Let buil a work space</h2>
                <h4>
                  Increating your productive by helping everyone can easyly
                  access to tables in workspace
                </h4>
              </div>
              <div className="form">
                <form className="createWSForm" onSubmit={handleSubmitBtn}>
                  <div className="wsName">
                    <p htmlFor="wsName">Work space name*</p>
                    <input
                      type="text"
                      name="wsName"
                      id="wsName"
                      value={wsName}
                      onChange={(e) => setWSName(e.target.value)}
                      placeholder="Big Brain bussiness"
                    />
                    <Alert severity="error">{validationMsg.wsName}</Alert>
                    
                    <p className="fiedExplain">
                      This is your bussiness name, group or organization
                    </p>
                  </div>
                  <div className="wsType">
                    <p>Type of work space*</p>
                    <select
                      value={wsType}
                      onChange={(e) => setWSType(e.target.value)}
                    >
                      <option value="" disabled selected hidden>
                        Choose :
                      </option>
                      <option value="1">Marketing</option>
                      <option value="2">Small business</option>
                      <option value="3">Education</option>
                      <option value="4">Human resource</option>
                      <option value="5">Technorlogy</option>
                      <option value="10">Other</option>
                    </select>
                  </div>
                  <div className="description">
                    <p>Decrible work space</p>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      name=""
                      id="descriptionText"
                      rows="6"
                      placeholder="Our group organize every thing here."
                    />
                    <p className="fiedExplain">
                      Take your member into tables with some short description
                      of work space
                    </p>
                  </div>
                  <button type="submit">Continue</button>
                </form>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={4}
            sm={8}
            md={4}
            key={1}
            className="rightGrid"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <div className="rightItem">
              <img src={WSicon} alt="WSicon" />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default WorlSpaceCreatingPopup;
