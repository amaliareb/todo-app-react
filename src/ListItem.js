import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"

export default class ListItem extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onClick(this.props.index)}>
          {this.props.buttonText}
        </button>
        {this.props.text}
      </div>
    )
  }
}
