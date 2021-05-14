import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                    <Route component={Hello} exact path="/hello" />
                </Switch>
            </Router>
        )
    }
}

const Hello = props => {
    return <div>Hello World</div>
}

export default App
