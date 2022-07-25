import React from 'react'

import './BoardBar.scss'
import{ Container as BootstrapContainer, Row, Col } from 'react-bootstrap'

function BoardBar() {
  return (
    <div className="navbar-board">
      <BootstrapContainer className="trello-container">
        <Row>
          <Col sm={10} sx={12} className="col-no-padding">
            <div className="board-info">
              <div className="item board-logo-icon"><i className="fa fa-coffee"/>&nbsp;&nbsp;<strong>Trello Clone App</strong></div>
              <div className="divider"></div>
              <div className="item board-type">Private WorkSpace</div>
              <div className="divider"></div>
              <div className="item member-avatar">
                <img src="http://trungquandev.com/wp-content/uploads/2021/01/trungquandev-avatar-2021.jpg" alt="avatar"></img>
                <img src="http://trungquandev.com/wp-content/uploads/2018/04/trungquandev-avatar.jpeg" alt="avatar"></img>
                <img src="http://trungquandev.com/wp-content/uploads/2018/04/trungquandev-avatar.jpeg" alt="avatar"></img>
                <img src="http://trungquandev.com/wp-content/uploads/2018/04/trungquandev-avatar.jpeg" alt="avatar"></img>
                <img src="http://trungquandev.com/wp-content/uploads/2018/04/trungquandev-avatar.jpeg" alt="avatar"></img>
                <span className="more-members">+7</span>
                <span className="invite">Invite</span>
              </div>
            </div>
          </Col>
          {/* <Col sm={2} sx={12} className="col-no-padding">
            <div className="board-actions">
              <div className="item menu"><i className="fa fa-ellipsis-h mr-2"/> Show menu</div>
            </div>
          </Col> */}
        </Row>
      </BootstrapContainer>
    </div>
  )
}

export default BoardBar