import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import HTTPStatus from "./components/HTTPStatus"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "./App.css"
import Container from "react-bootstrap/Container"

class ContextMenu extends React.Component {
    state = {
        xPos: "0px",
        yPos: "0px",
        showMenu: false
    }

    componentDidMount() {
        document.addEventListener("click", this.handleClick)
        document.addEventListener("contextmenu", this.handleContextMenu)
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick)
        document.removeEventListener("contextmenu", this.handleContextMenu)
    }

    handleClick = e => {
        if (this.state.showMenu) this.setState({ showMenu: false })
    }

    handleContextMenu = e => {
        e.preventDefault()

        let maxX = e.view.innerWidth
        let maxY = e.view.innerHeight

        let width = 200

        console.log(maxX + " - " + maxY)
        this.setState({
            xPos: `${e.pageX + width > e.view.innerWidth ? e.pageX - width : e.pageX}px`,
            yPos: `${e.pageY}px`,
            width: `${width}px`,
            showMenu: true
        })
    }

    render() {
        const { showMenu, xPos, yPos, width } = this.state

        if (showMenu)
            return (
                <ul
                    className="menuu"
                    style={{
                        width: width,
                        top: yPos,
                        left: xPos,
                        position: "absolute",
                        backgroundColor: "white",
                        border: "1px solid black",
                        padding: "30px",
                        zIndex: "2000"
                    }}
                >
                    <li>Logggggin</li>
                    <li>Register</li>
                    <li>Open Profile</li>
                </ul>
            )
        else return null
    }
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route render={() => <NavBar />} />
                <Container fluid style={{ minHeight: "100vh" }}>
                    <Route render={() => <ContextMenu />} />
                    <Switch>
                        <Route render={() => <Hello />} exact path="/" />

                        <Route render={() => <Help />} exact path="/help" />
                        <Route render={() => <User />} exact path="/user/:id" />
                        <Route render={() => <HTTPStatus />} exact path="/status/:code" />
                        <Redirect from="/status" to="/status/200" />
                        <Route render={() => <HTTPStatus code={501} />} exact path="/feed" />
                        <Route render={() => <HTTPStatus code={404} />} />
                    </Switch>
                </Container>
                <Route render={() => <Footer />} />
            </Router>
        )
    }
}

const Hello = props => <div>Hello World!</div>
const Help = props => <div>Hello Help</div>
const User = props => <div>Hello User</div>

export default App
