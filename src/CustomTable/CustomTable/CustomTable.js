import React, { Component } from "react";
import "./CustomTable.css";
import UserTableRow from "./TableRow";

import axios from "../../axios";
class CustomTable extends Component {
  state = { users: null };
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    axios.get("/api/1.1/?results=2").then((response) => {
      const posts = response.data;
      if (this._isMounted) {
        this.setState({ users: response.data.results });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { users } = this.state;
    const isLoading = users === null;
    return (
      <main>
        <div className="table-container">
          <div className="">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>City</th>
                  <th>Registered</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={6} className="text-center">
                      <em className="text-muted">Loading...</em>
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <UserTableRow key={index} index={index + 1} user={user} />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}
export default CustomTable;
