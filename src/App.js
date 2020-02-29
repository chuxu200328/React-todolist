import React, { Component } from "react";
import "./App.css";
import TodoList from "./ToDoList";
import TodoItems from "./TodoItems";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: { text: "" }
    };
  }
  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText };
    this.setState({
      currentItem
    });
  };
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.text !== "" && newItem.text.replace(/\s+/g, "").length !== 0) {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: ""
        }
      });
    }
  };
  deleteItem = i => {
    const items = this.state.items;
    items.splice(i, 1);
    this.setState({
      items: items
    });
  };

  crosseItem = i => {
    const items = this.state.items;
    if (items[i].isFinish) {
      items[i].isFinish = false;
    } else {
      items[i].isFinish = true;
    }

    this.setState({ items });
  };
  upItem = i => {
    if (i !== 0) {
      const items = this.state.items;
      const temp = items[i - 1];
      items[i - 1] = items[i];
      items[i] = temp;
      this.setState({ items });
    }
  };
  render() {
    return (
      <div className="App">
        <TodoList
          currentItem={this.state.currentItem}
          handleInput={this.handleInput}
          addItem={this.addItem}
        />
        <TodoItems
          entries={this.state.items}
          deleteItem={this.deleteItem}
          crosseItem={this.crosseItem}
          upItem={this.upItem}
        />
      </div>
    );
  }
}

export default App;
