import * as React from "react"
import { render } from "react-dom"
import Hello from "./components/Hello"

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className="app">
                <Hello name={'world'} />
            </div>
        )
    }
}

render(
    <App />, document.getElementById("content")
)