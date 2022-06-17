import React from 'react'
import './BoardMenu.scss';
import { DiTrello } from 'react-icons/di'
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineSetting } from 'react-icons/ai'
import { BsTable } from 'react-icons/bs'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
const BoardMenu = () => {
  return (
    <div>
      <div className='main-menu'>
        <div className='big-title'>Đồ án công nghệ</div>
        <div className='menu-item'>
          <div className='sub-menu'>
              <DiTrello /><span className='item-title'>Bảng</span>
          </div>
          <div className='sub-menu'>
            <AiOutlineUser />
            <div className='sub-menu-plus'>
            <span className='item-title'>Thành viên</span>
            <span className='right-item'><AiOutlinePlus /></span>
            </div>
          </div>
          <div className='sub-menu'>
            <AiOutlineSetting /><span className='item-title'>Cài đặt</span>
          </div>
          <div className='sub-menu-title'>
            Trình xem Không gian làm việc
          </div>
          <div className='sub-menu'>
            <BsTable /><span className='item-title'>Bảng</span>
          </div>
          <div className='sub-menu'>
            <FaRegCalendarAlt /><span className='item-title'>Lịch</span>
          </div>
          <div className='sub-menu-title-plus'>
            <span>Các bảng của bạn</span>
            <span className='right-item-plus'><AiOutlinePlus /></span>
          </div>
          <div className='sub-menu-boards'>
            <div className='img-sub-menu-item'></div>
            <span className='item-title'>Outline planning</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardMenu