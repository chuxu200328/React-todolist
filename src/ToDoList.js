import React, { Component } from "react";
class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input
              onChange={this.props.handleInput}
              value={this.props.currentItem.text}
              placeholder="Task"
            />
            <button type="submit" onClick={this.props.addItem}>
              {" "}
              Add Task{" "}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default TodoList;
