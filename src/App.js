import "./App.css";
import React, { Component } from "react";

import UsersList from "./UserList";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <UsersList />;
  }
}
