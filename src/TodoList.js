import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import Todo from "./Todo";

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <Fragment key={todo.id}>
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              ></Todo>
              {i < todos.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  } else {
    return null;
  }
}
