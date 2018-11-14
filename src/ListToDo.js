import React from "react"
import ReactDOM from "react-dom"
import ListItem from "./ListItem"

import "./styles.css"

export default class ListToDo extends React.Component {
  state = {
    toDoItems: [],
    nextIndex: 0,
    inputValue: "",
  }

  moveToDoItem(index) {
    const prevToDoItems = this.state.toDoItems

    this.setState({
      toDoItems: prevToDoItems.filter(toDoItem => toDoItem.index !== index),
    })
  }

  addToDoItem() {
    const {
      inputValue: text,
      nextIndex: index,
      toDoItems: toDoItems,
    } = this.state
    const newToDoItem = {
      text,
      index,
    }
    this.setState({
      nextIndex: index + 1,
      toDoItems: toDoItems.concat([
        {
          text: newToDoItem.text,
          index: newToDoItem.index,
        },
      ]),
      inputValue: "",
    })
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    })
  }

  render() {
    const toDoItems = this.state.toDoItems.map(toDoItem => {
      return (
        <li key={toDoItem.index}>
          <ListItem
            onClick={index => this.moveToDoItem(index)}
            buttonText="👌"
            text={toDoItem.text}
            index={toDoItem.index}
          />
        </li>
      )
    })
    return (
      <div>
        <div className="">
          <p>Add task</p>
          <input
            value={this.state.inputValue}
            type="text"
            onChange={event => this.handleChange(event)}
          />
          <button onClick={() => this.addToDoItem()}>✔</button>
        </div>
        <div>
          <ul>{toDoItems}</ul>
        </div>
      </div>
    )
  }
}
