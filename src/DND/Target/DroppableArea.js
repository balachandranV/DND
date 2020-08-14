import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import "./DroppableArea.css";


class DroppableArea extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    const {
      getDropResult,
      getItem,
      canDrop,
      isOver,
      connectDropTarget,
      dropedItem,
    } = this.props;
    console.log("getDropResult:", getDropResult);
    console.log("getItem:", getItem);
    const isActive = canDrop && isOver;
    let backgroundColor = "#fff";
    if (isActive) {
      backgroundColor = "darkgreen";
    } else if (canDrop) {
      backgroundColor = "darkkhaki";
    }

    return (
      <div
        className="dropContainer border"
        ref={connectDropTarget}
        style={{ backgroundColor }}
      >
        {isActive ? <h4 className="display-4">Release to drop</h4> : <h4 className="display-4">Drag a box here</h4>}
        {this.props.children}
      </div>
    );
  }
}

export default DropTarget(
  ItemTypes.CARD,
  {
    drop: (props) => {
      console.log("droped item");
      return { scucces: true };
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    getDropResult: monitor.getDropResult(),
    getItem: monitor.getItem(),
  })
)(DroppableArea);
