import React from "react";
import "./CardDetailPopup.scss";
import FComment from "./FComment";
import { IoIosCard } from 'react-icons/io'
import { AiOutlineEye } from 'react-icons/ai'
import { GrTextAlignFull } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import WallpaperOutlinedIcon from '@mui/icons-material/WallpaperOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch'
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
function CardDetailPopup({ setOpenModal }) {
  const [valueDes, setValueDes] = React.useState('');
  const [valueCom, setValueCom] = React.useState('');
  const handleChangeDes = (event) => {
    setValueDes(event.target.valueDes);
  };
  const handleChangeCom = (event) => {
    setValueCom(event.target.valueCom);
  };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#eaecf0'),
    backgroundColor: '#eaecf0',
    '&:hover': {
      backgroundColor: '#a8b4ae',

    },
  }));
  const comments = [{ id: "1", author: "Hong", text: "Th??? th??ch", date: "Today at 7:00 PM" },
  { id: "2", author: "Thuc", text: "6 ng??y", date: "Today at 8:00 PM" },
  { id: "3", author: "Hai", text: "6 ????m", date: "Today at 9:00 PM" },
  { id: "4", author: "Hieu", text: "ch???y", date: "Today at 10:00 PM" },
  { id: "5", author: "Dien", text: "deadline", date: "Today at 11:00 PM" },
  { id: "6", author: "Kiet", text: "G??t g??!!!", date: "Today at 12:00 PM" }]
  const contents = comments.map(item => {
    return (
      <FComment key={item.id} author={item.author} text={item.text} date={item.date} />
    )
  });
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (

    <div className="modalBackground">

      <div className="modalContainer">



        <div className="titlecard">
          <h2><IoIosCard />  CardTitle</h2>
          <p>trong danh s??ch ColumnName    <AiOutlineEye /></p>
          <p>Th??nh vi??n </p>
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>

        <div className="bodycard">
          <h3><GrTextAlignFull />  M?? t???</h3>

          <div className="description">
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <TextField
                id="description-textField"
                variant="outlined"
                placeholder="Th??m m?? t??? chi ti???t h??n..."
                M?? t???
                maxRows={4}
                fullWidth
                value={valueDes}
                onChange={handleChangeDes}
              /></Box>
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
                marginTop: 1
              }}
            >
              <Button disabled size="medium" variant="contained" color="success">
                L??u
              </Button>
            </Box>
          </div>
        </div>

        <div className="footercard">
          <h3><AiOutlineBars />  Ho???t ?????ng</h3>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Hi???n chi ti???t"
          /><br />
          <div className="comment">
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >

              <TextField
                id="comment-textField"

                variant="outlined"
                placeholder="Vi???t b??nh lu???n..."
                B??nh lu???n
                maxRows={4}
                fullWidth
                value={valueCom}
                onChange={handleChangeCom}
              />
            </Box>
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
                marginTop: 0.5
              }}
            >
              <Button label="cancel" size="medium" variant="outlined" startIcon={<CloseIcon fontSize="inherit" />}>
                Hu??? b???
              </Button>
              <Button label="send" size="medium" variant="contained" endIcon={<SendIcon fontSize="inherit" />}>
                G???i
              </Button>
            </Box>
          </div><br />

          <Box sx={{ marginTop: 2, display: 'flex' }}>
            <Grow in={checked}>
              <div className="ui comments">
                {contents}
              </div>
            </Grow>
          </Box>

        </div>
      </div>

      <div className="sidebarContainer">
        <div className="titleCloseBtn">
          <IconButton aria-label="Close" onClick={() => {
            setOpenModal(false);
          }} size="small">
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div> </div>
        <div className="sidebar-content">
          <h5>Th??m v??o th???</h5>
          <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1} fullWidth>
            <ColorButton fullWidth size="small" startIcon={<PersonOutlineOutlinedIcon fontSize="inherit" />}>Th??nh vi??n</ColorButton>
            <ColorButton fullWidth size="small" startIcon={<LocalOfferOutlinedIcon fontSize="inherit" />}>Nh??n</ColorButton>
            <ColorButton fullWidth size="small" startIcon={<AssignmentTurnedInOutlinedIcon fontSize="inherit" />}>Vi???c c???n l??m</ColorButton>
            <ColorButton fullWidth size="small" startIcon={<AccessTimeOutlinedIcon fontSize="inherit" />}>Ng??y</ColorButton>
            <ColorButton fullWidth size="small" startIcon={<AttachFileOutlinedIcon fontSize="inherit" />}>????nh k??m</ColorButton>
            <ColorButton fullWidth size="small" startIcon={<WallpaperOutlinedIcon fontSize="inherit" />}>???nh b??a</ColorButton>
          </Stack>

        </div>
        <div className="sidebar-content">
          <h5>Ti???n ??ch b??? sung</h5>
          <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1} fullWidth>
            <ColorButton fullWidth size="small" startIcon={<AddOutlinedIcon fontSize="inherit" />}>Th??m Power-Ups</ColorButton>
          </Stack>
        </div>
        <div className="sidebar-content">
          <h5>T??? ?????ng ho??</h5>
          <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1} fullWidth>
            <ColorButton fullWidth size="small" startIcon={<AddOutlinedIcon fontSize="inherit" />}>Th??m n??t</ColorButton>
          </Stack>
        </div>
        <div className="sidebar-content">
          <h5>Thao t??c</h5>
          <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1} fullWidth>
            <ColorButton fullWidth size="small" startIcon={<ArrowForwardOutlinedIcon fontSize="inherit" />}>Di chuy???n</ColorButton>
            <ColorButton fullWidth size="small" startIcon={<ContentCopyOutlinedIcon fontSize="inherit" />}>Sao ch??p</ColorButton>
            <ColorButton fullWidth size="small" startIcon={<BackupTableOutlinedIcon fontSize="inherit" />}>T???o m???u</ColorButton>
            <ColorButton fullWidth size="small" startIcon={<AiOutlineEye fontSize="inherit" />}>Theo d??i</ColorButton>
            <ColorButton fullWidth size="small" startIcon={<StorageOutlinedIcon fontSize="inherit" />}>L??u tr???</ColorButton>
            <ColorButton fullWidth size="small" startIcon={<ShareOutlinedIcon fontSize="inherit" />}>Chia s???</ColorButton>
          </Stack>
        </div>
      </div>

    </div>
  );
}

export default CardDetailPopup;