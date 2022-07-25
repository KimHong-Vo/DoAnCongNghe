//onKeydown
export const saveContentAfterPressEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.target.blur()
    }
  }
  //Select all value when click
  export const selectAllInlineText = (e) => {
    e.target.focus()
    e.target.select()
}