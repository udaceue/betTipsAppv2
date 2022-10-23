import React from 'react'

function ShowToolButton(props) {
  return (
    <button className="ui primary button" onClick={props.showComponent}>
    Show Tool
    </button>
  )
}

export default ShowToolButton