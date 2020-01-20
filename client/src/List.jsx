import React from 'react';
import ListEntry from './ListEntry.jsx';

var List = (props) => {
  return (
    <ul>
      { props.list.map((item, index) => 
        <ListEntry item={item} key={index} deleteHandler={props.deleteHandler} 
        updateHandler={props.updateHandler}/>) }
    </ul>
  )
}
export default List;