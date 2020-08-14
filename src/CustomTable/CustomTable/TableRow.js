import React, { Component } from "react";
import { slideDown, slideUp } from "./anim";
import axios from "../../axios";

class TableRow extends Component {
  state = { expanded: false, person: null };
  isDataLoadingProgress = false;

  fetchInnerTableData() {
    return axios.get("/api/1.1/?results=2");// move to constant 
  }

  toggleExpander = (e) => {
    if (this.isDataLoadingProgress === true) {
      return; // don't click multiple times show spinner / If we want use state we can can move it, here we did not update any ui
    }
    if (!this.state.expanded) { // slide down
      this.isDataLoadingProgress = true;
      this.fetchInnerTableData().then((response) => {
        this.isDataLoadingProgress = false;
        const posts = response.data;
        this.setState({ expanded: true, person: response.data.results }, () => {
          if (this.refs.expanderBody) {
            slideDown(this.refs.expanderBody);
          }
        });
      });
    } else {  // slide up
      this.isDataLoadingProgress = false;
      slideUp(this.refs.expanderBody, {
        onComplete: () => {
          this.setState({ expanded: false, person: null }); //Reset person after sliding up
        },
      });
    }
  };

  render() {
    const { user } = this.props;
    return [
      <tr key="main" onClick={this.toggleExpander}>
        <td>
          {user.name.first + " " + user.name.last}
          <br />
          <small>{user.email}</small>
        </td>
        <td>
          {user.location.city} ({user.nat})
        </td>
        <td>{user.registered}</td>
      </tr>,
      this.state.expanded && (
        <tr className="expandable" key="tr-expander">
          <td className="" colSpan={6}>
            <div ref="expanderBody" className="inner">
              {/* Get inner table data for selected Row
              //I used random user api
              // change colspan Size (for merging TD)
              */}
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th> 
                    <th scope="col">State</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.person.map((person, index) => (
                    <tr key={index}>
                      <td>{person.name.first}</td>
                      <td>{person.location.city}</td>
                      <td>{person.registered}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Inner table End */}
            </div>
          </td>
        </tr>
      ),
    ];
  }
}
export default TableRow;
