import React from "react";
import { ItemTypes } from "../ItemTypes";
import { DragSource } from "react-dnd";
import "./Card.css";

const Card = ({ itemInfo, isDragging, connectDragSource }) => {
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div
      className="card mb-2 dragable-souce"
      ref={connectDragSource}
      style={{ opacity }}
    >
      <div className="card-body"> {itemInfo.name}</div>
    </div>
  );
};
export default DragSource(
  ItemTypes.CARD,
  {
    beginDrag: (props) => {
      props.draggedItem(null);
      return { itemInfo: props.itemInfo };
    },
    endDrag(props, monitor) {
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      if(dropResult){
        props.draggedItem(props.itemInfo);
        console.log(`You dropped ${item.itemInfo.name} into ${dropResult.name}!`);
      }
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })
)(Card);
