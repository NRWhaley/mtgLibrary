import React from 'react';
const mtg = require('mtgsdk');

const entryStyle = {
  color: 'black',
  backgroundColor: 'lightgrey',
  maxWidth: '50%',
  borderRadius: '5px',
  align: 'center'
}

function cardEntry(props){
  return (
    <div className="cardEntry" style={entryStyle}>
      <div>{props.name}</div>
      <div>{props.colors}</div>
      <div>{props.type}</div>
    </div>
  )
}

export cardEntry;