import React from 'react';
const mtg = require('mtgsdk');




const entryStyle = {
  color: 'black',
  backgroundColor: 'lightgrey',
  maxWidth: '50%',
  borderRadius: '5px',
  align: 'center'
}


function CardEntry(props){
  return (
    <div className="cardEntry" style={entryStyle}>
      <div>{props.name}</div>
      <div>{props.colors}</div>
      <div>{props.type}</div>
    </div>
  )
};

class CardList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        {this.props.list.map((card) => (
        <CardEntry name={card.name} colors={card.colors} type={card.type}
        />

        ))}
      </div>
    )
  }
}

export default CardList