import React, { Component } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";
import List from "./List";

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      items: [],
    };
  }

  componentWillMount() {
    this.setState({
      items: [
        {
          id: uuidv4(),
          task: "Pay the rent",
          completed: false,
        },
        {
          id: uuidv4(),
          task: "Go to the gym",
          completed: false,
        },
        {
          id: uuidv4(),
          task: "Do my homework",
          completed: false,
        },
      ],
    });
  }

  handleOnChange = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({
      task: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    if (this.state.task.trim() !== "") {
      this.setState({
        task: "",
        items: [
          ...this.state.items,
          {
            id: uuidv4(),
            task: this.state.task,
            complete: false,
          },
        ],
      });
    }
  };

  markAsCompleted = (id) => {
    const foundTask = [this.state.items.find((task) => task.id === id)];
    const task = foundTask[0];
    task.completed = true;

    this.setState({
      items: [...this.state.items],
    });
  };

  removeTask = (id) => {
    const filteredTasks = this.state.items.filter((task) => task.id !== id);

    this.setState({
      items: filteredTasks,
    });
  };

  render() {
    return (
      <div className="Todo">
        <h1>New Task:</h1>

        <form onSubmit={this.handleOnSubmit}>
          <input value={this.state.task} onChange={this.handleOnChange} />
        </form>

        {this.state.items.length === 0 ? (
          <p>Your TODO List is empty.</p>
        ) : (
          <List
            items={this.state.items}
            markAsCompleted={this.markAsCompleted}
            removeTask={this.removeTask}
          />
        )}
      </div>
    );
  }
}

export default Todo;
