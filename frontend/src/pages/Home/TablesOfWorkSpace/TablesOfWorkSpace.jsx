
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import "./TablesOfWorkSpace.modules.scss";
import Background from "./meeting.jpg";
import PeopleTwoToneIcon from "@mui/icons-material/PeopleTwoTone";
import { Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

function TablesOfWorkSpace() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="title1">
        <div className="content1">
          <div className="iconFont">
            <span>
              <PermIdentitySharpIcon />
            </span>
          </div>
          <h3>Các bảng của bạn</h3>
        </div>
        <div>
          <ul className="boardpagesSeaction"></ul>
        </div>
      </div>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={3}>
          <Button>
            <a
              className="board-title"
              href="action"
              style={{ backgroundImage: `url(${Background})` }}
            >
              <span className="board-title-fade"></span>
              <div className="board-title-detail">
                <div
                  title="Phần mềm nghe nhạc quốc tế"
                  className="board-title-detail-name"
                >
                  <div>Phần mềm nghe nhạc quốc tế</div>
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
          </Button>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Button>
            <a
              className="board-title"
              href="action"
              style={{ backgroundImage: `url(${Background})` }}
            >
              <span className="board-title-fade"></span>
              <div className="board-title-detail">
                <div
                  title="Phần mềm nghe nhạc quốc tế"
                  className="board-title-detail-name"
                >
                  <div>Phần mềm nghe nhạc quốc tế</div>
                </div>
                <div className="board-title-detail-sub-container">
                  <span className="board-title-option">
                    <span
                      title="Bấm để gắn dấu sao bảng này. Bảng này sẽ được thêm vào danh sách được đánh dấu sao của bạn."
                      className="board-title-option-icon"
                    >
                      <StarIcon className="editStar-yellow"></StarIcon>
                    </span>
                  </span>
                </div>
              </div>
            </a>
          </Button>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Button>
            <a
              className="board-title"
              href="action"
              style={{ backgroundImage: `url(${Background})` }}
            >
              <span className="board-title-fade"></span>
              <div className="board-title-detail">
                <div
                  title="Phần mềm nghe nhạc quốc tế"
                  className="board-title-detail-name"
                >
                  <div>Phần mềm nghe nhạc quốc tế</div>
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
          </Button>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Button>
            <a
              className="board-title"
              href="action"
              style={{ backgroundImage: `url(${Background})` }}
            >
              <span className="board-title-fade"></span>
              <div className="board-title-detail">
                <div
                  title="Phần mềm nghe nhạc quốc tế"
                  className="board-title-detail-name"
                >
                  <div>Phần mềm nghe nhạc quốc tế</div>
                </div>
                <div className="board-title-detail-sub-container">
                  <span className="board-title-option">
                    <span
                      title="Bấm để gắn dấu sao bảng này. Bảng này sẽ được thêm vào danh sách được đánh dấu sao của bạn."
                      className="board-title-option-icon"
                    >
                      <StarIcon className="editStar-yellow"></StarIcon>
                    </span>
                  </span>
                </div>
              </div>
            </a>
          </Button>
        </Grid>
      </Grid>
      <div></div>
      <div className="title2">
        <div className="content1">
          <div className="iconFont">
            <span>
              <PeopleTwoToneIcon />
            </span>
          </div>
          <h3>Tất cả các bảng trong Không gian làm việc này</h3>
        </div>
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={3}>
          <Button>
            <a
              className="board-title"
              href="action"
              style={{ backgroundImage: `url(${Background})` }}
            >
              <span className="board-title-fade"></span>
              <div className="board-title-detail">
                <div
                  title="Phần mềm nghe nhạc quốc tế"
                  className="board-title-detail-name"
                >
                  <div>Phần mềm nghe nhạc quốc tế</div>
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
          </Button>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Button>
            <a
              className="board-title"
              href="action"
              style={{ backgroundImage: `url(${Background})` }}
            >
              <span className="board-title-fade"></span>
              <div className="board-title-detail">
                <div
                  title="Phần mềm nghe nhạc quốc tế"
                  className="board-title-detail-name"
                >
                  <div>Phần mềm nghe nhạc quốc tế</div>
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
          </Button>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Button>
            <a className="board-title background-table" href="action">
              <span className="createTable">Tạo bảng mới</span>
            </a>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
export default TablesOfWorkSpace;
