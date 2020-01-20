import React from 'react';

var ListEntry = (props) => {
  
  return (
  <li>
    <span>{props.item.item}&nbsp;
    <button onClick={() => props.updateHandler(props.item._id, props.item.quantity - 1)}>-</button>
    {props.item.quantity}<button onClick={() => props.updateHandler(props.item._id, props.item.quantity + 1)}>+</button></span>
    <button onClick={() => props.deleteHandler(props.item._id)}>delete</button>
  </li>
  )
}

export default ListEntry;