import React from 'react'
import './WorlSpace.scss'
import Background from './CreateWSpaceBground.png'
import WSicon from './CreateWspacePic.png'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const WorlSpaceCreatingPopup = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className = 'popupBox'>
      <Grid className='container' container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={8} md={8} key={0} className= 'leftGrid'>
            <div className='leftItem'>
              <div className='title'>
                <h2>Let buil a work space</h2>
                <h4>Increating your productive by helping everyone can easyly access to tables in workspace</h4>
              </div>
              <div className='form'>
                <form action="submit" className='createWSForm'>
                  <div className='wsName'>
                    <p htmlFor='wsName'>Work space name*</p>
                    <input type='text' name="wsName" id="wsName" placeholder='Big Brain bussiness'/>
                    <p className='fiedExplain'>This is your bussiness name, group or organization</p>
                  </div>
                  <div className='wsType'>
                    <p>Type of work space*</p>
                    <select>
                      <option value="" disabled selected hidden>Choose :</option>
                      <option value="1">Marketing</option>
                      <option value="2">Small business</option>
                      <option value="3">Education</option>
                      <option value="4">Human resource</option>
                      <option value="5">Technorlogy</option>
                      <option value="10">Other</option>
                    </select>
                  </div>
                  <div className='description'>
                    <p>Decrible work space</p>
                    <textarea name="" id="" rows="6" placeholder='Our group organize every thing here.'></textarea>
                    <p className='fiedExplain'>Take your member into tables with some short description of work space</p>
                  </div>
                  <button>Continue</button>
                </form>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} sm={8} md={4} key={1} className= 'rightGrid' style={{backgroundImage: `url(${Background})`}}>
            <div className='rightItem' >
            <img src={WSicon} alt="WSicon" />
            </div>
          </Grid>
      </Grid>
    </Box>
  )
}

export default WorlSpaceCreatingPopup