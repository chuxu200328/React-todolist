import React, { Component } from "react";
class TodoItems extends Component {
  createTasks = (item, i) => {
    return (
      <li key={i}>
        <button onClick={() => this.props.crosseItem(i)}>
          {item.isFinish ? "Unfinish" : "Finish"}
        </button>
        {item.isFinish ? <del>{item.text}</del> : <span>{item.text}</span>}
        <button onClick={() => this.props.deleteItem(i)}>delete</button>
        <button onClick={() => this.props.upItem(i)}>UP</button>
        <button onClick={() => this.props.upItem(i)}>Down</button>
      </li>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
}
export default TodoItems;
