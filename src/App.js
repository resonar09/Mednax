import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Users from "./components/Users/Users";
import Axios from "axios";

class App extends Component {
  state = {
    isLoading: true,
    users: [],
  };
  componentDidMount() {
    Axios.get(
      "https://jsonplaceholder.typicode.com/users?_limit=10"
    ).then((res) => {
      //test for null and set isLoading
      this.setState({ users: res.data });
    });
  }
  render() {
    return (
      <React.Fragment>
        <h1>User Table</h1>
      <table data-testid="table" className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Street</th>
            <th scope="col">Suite</th>
            <th scope="col">City</th>
            <th scope="col">Zipcode</th>
            <th scope="col">Lat</th>
            <th scope="col">Lng</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
            <th scope="col">Company</th>
            <th scope="col">Phrase</th>
            <th scope="col">Motto</th>
          </tr>
        </thead>
        <tbody>
          <Users users={this.state.users} />
        </tbody>
      </table>
      </React.Fragment>
    );
  }
}

export default App;
