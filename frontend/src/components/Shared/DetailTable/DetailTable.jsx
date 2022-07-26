import React from 'react'
import './DetailTable.scss'

import BoardBar from './Components/BoardBar/BoardBar'
import BoardContent from './Components/BoardContent/BoardContent'
import NavigationBar from '../NavigationBar/NavigationBar'

function DetailTable() {
  return (
    <body>
      <div className="trello-master">
        {/* <BoardBar></BoardBar> */}
        <NavigationBar></NavigationBar>
        <BoardContent></BoardContent>
      </div>
    </body>
  )
}

export default DetailTable
