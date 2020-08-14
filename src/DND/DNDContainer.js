import React, { Component } from "react";
import DroppableArea from "./Target/DroppableArea";
import Card from "./Source/Card";
import CustomTable from "../CustomTable/CustomTable/CustomTable";
import SampleGrid from "../Grid/SampleGrid"
class DNDContainer extends Component {
  state = {
    sourceItems: [
      {
        id: 1,
        name: "component1",
      },
      {
        id: 2,
        name: "component2",
      },
      {
        id: 3,
        name: "component3",
      },
    ],
    currentItem: null,
  };
  selectedComponent(currentItem) {
    console.log("dragged item", currentItem);
    this.setState({ currentItem: currentItem });
  }
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-lg-3 mx-auto align-self-center">
            {this.state.sourceItems.map((item, index) => (
              <Card
                key={item.id}
                itemInfo={item}
                draggedItem={(e) => this.selectedComponent(e)}
              />
            ))}
          </div>
          <div className="col-lg-9 ">
            <DroppableArea >{this.getDraggedComponent(this.state.currentItem)}</DroppableArea>
          </div>
        </div>
      </div>
    );
  }

  getDraggedComponent(currentItem) {
    if (!currentItem) {
      return null;
    }
    switch (currentItem.name) {
      case "component1":
        return <CustomTable />;
      case "component2":
        return <SampleGrid/>;
      case "component3":
        return "component3";
      default:
        return null;
    }
  }
}

export default DNDContainer;
