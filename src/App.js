import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "@fortawesome/fontawesome-free/css/all.min.css";
// showing vs-code github setup

function App() {
  return (
    <React.Fragment>
      <TodoInput />
      <TodoList />
    </React.Fragment>
  );
}

export default App;
