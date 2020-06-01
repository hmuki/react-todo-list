import React, { Component } from "react";
import Item from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <section>
        <div>todo list</div>
        <Item />
      </section>
    );
  }
}
