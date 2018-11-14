import React from "react"
import ReactDOM from "react-dom"
import ListToDo from "./ListToDo"

import "./styles.css"

function App() {
	return (
		<div className="App">
			<ListToDo />
		</div>
	)
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
