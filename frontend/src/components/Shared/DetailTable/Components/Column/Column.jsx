import React, { useEffect, useRef, useState } from 'react'

import './Column.scss'
import Card from '../Card/Card'
import ConfirmModal from '../Common/ConfirmModal'
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';
import { mapOrder } from '../Utilities/sort'
import { Container, Draggable } from 'react-smooth-dnd'
import { Dropdown, Form } from 'react-bootstrap'
import { MODAL_ACTION_CONFIRM } from '../Utilities/constants'
import { saveContentAfterPressEnter, selectAllInlineText } from '../Utilities/contentEditable'
import { Button } from 'react-bootstrap'
import { cloneDeep } from 'lodash'

function Column(props) {
  const { column, onCardDrop, onUpdateColumn } = props
  // eslint-disable-next-line no-trailing-spaces
  
  const cards = mapOrder(column.cards, column.cardOrder, 'id')

  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const toggleShowConfirmModal = () => setShowConfirmModal(!showConfirmModal)

  const [columnTitle, setColumnTitle] = useState('')

  const handelColumnTitleChange = (e) => setColumnTitle(e.target.value)

  const [openNewCardForm, setOpenNewCardForm] = useState(false)
  const toggleOpenNewCardForm = () => setOpenNewCardForm(!openNewCardForm)

  const [newCardTitle, setNewCardTitle] = useState('')
  const onNewCardTitleChange = (e) => setNewCardTitle(e.target.value)

  useEffect(() => {
    setColumnTitle(column.title)
  }, [column.title])

  const newCardTextareaRef = useRef(null)
  useEffect(() => {
    if (newCardTextareaRef && newCardTextareaRef.current) {
      newCardTextareaRef.current.focus()
      newCardTextareaRef.current.select()
    }
  }, [openNewCardForm])
  const onConfirmModalAction = (type) => {
    if (type === MODAL_ACTION_CONFIRM) {
      const newColumn = {
        ...column,
        _destroy: true
      }
      onUpdateColumn(newColumn)
    }
    toggleShowConfirmModal()
  }

  const handelColumnTitleBlur = () => {
    const newColumn = {
      ...column,
      title: columnTitle
    }
    onUpdateColumn(newColumn)
  }
  const addNewCard = () => {
    if (!newCardTitle) {
      newCardTextareaRef.current.focus()
      return
    }
    const newCardToAdd = {
      id: Math.random().toString(36).substring(2, 5),
      boardId: column.boardId,
      columnId: column.id,
      cover: null,
      title: newCardTitle.trim()
    }
    let newColumn = cloneDeep(column)
    newColumn.cards.push(newCardToAdd)
    newColumn.cardOrder.push(newCardToAdd.id)
    onUpdateColumn(newColumn)
    setNewCardTitle('')
    toggleOpenNewCardForm()
  }
  return (
    <div className="column">
      <header className="column-drag-handle">
        <div className="column-title">
          <Form.Control
            size = "sm"
            type = "text"
            className="trello-content-editable"
            value={columnTitle}
            onChange={handelColumnTitleChange}
            onBlur={handelColumnTitleBlur}
            onKeyDown={saveContentAfterPressEnter}
            onClick={selectAllInlineText}
            onMouseDown={e => e.preventDefault()}
            spellCheck="false"
          />
        </div>
        <div className="column-dropdown-actions">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" size="sm" className="dropdown-btn"/>
            <Dropdown.Menu>
              <Dropdown.Item>Add card</Dropdown.Item>
              <Dropdown.Item onClick={toggleShowConfirmModal}>Remove column</Dropdown.Item>
              <Dropdown.Item>Move all cards in this column</Dropdown.Item>
              <Dropdown.Item>Archive all cards in this column</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
      <div className="card-list">
        <Container
          groupName="col"
          onDrop={dropResult => onCardDrop(column.id, dropResult)}
          getChildPayload={index => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'card-drop-preview'
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <Card card={card}></Card>
            </Draggable>
          ))}
        </Container>
        {openNewCardForm &&
          <div className="add-new-card-area">
            <Form.Control
              size = "sm"
              as = "textarea"
              rows="3"
              placeholder = "Enter a title for this card"
              className="textarea-enter-new-card"
              ref={newCardTextareaRef}
              value={newCardTitle}
              onChange={onNewCardTitleChange}
              onKeyDown={event => (event.key === 'Enter') && addNewCard()}
            />
          </div>
        }
      </div>
      <footer>
        {openNewCardForm &&
          <div className="add-new-card-actions">
            <Button variant="success" onClick={addNewCard}>Add card</Button>
            <span className="cancel-icon" onClick={toggleOpenNewCardForm}>
              <DeleteForeverIcon sx={{ color: red[500] }}/>
            </span>
          </div>
        }
        {!openNewCardForm &&
          <div className="footer-actions" onClick={toggleOpenNewCardForm}>
            <AddIcon></AddIcon> Add another card
          </div>
        }
      </footer>
      <ConfirmModal
        show={showConfirmModal}
        onAction={onConfirmModalAction}
        title="Remove column"
        content={`Are you sure remove <strong>${column.title}</strong>. <br/>All card will be remove!`}
      />
    </div>
  )
}

export default Column