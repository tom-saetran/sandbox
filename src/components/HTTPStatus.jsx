import React from "react"
import { withRouter } from "react-router"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import codes from "../json/codes.json"
import { Check2Circle, InfoCircle, QuestionCircle, XCircle } from "react-bootstrap-icons"

class HTTPStatus extends React.Component {
    state = {
        code: null
    }

    componentDidMount = () => {
        if (this.props.match.params.code && Object.keys(codes).includes(this.props.match.params.code)) {
            this.setState({ code: this.props.match.params.code })
        } else if (this.props.code) this.setState({ code: this.props.code })
        else this.setState({ code: undefined })
    }

    componentDidUpdate = (_previousProps, _previousState) => {
        if (_previousProps.match.params.code !== this.props.match.params.code)
            this.setState({
                code: Object.keys(codes).includes(this.props.match.params.code) ? this.props.match.params.code : "undefined"
            })
    }

    icon = {
        info: <InfoCircle color="blue" />,
        success: <Check2Circle color="green" />,
        redirect: <QuestionCircle color="purple" />,
        clientError: <XCircle color="orange" />,
        serverError: <XCircle color="red" />
    }

    render() {
        return (
            <Container fluid>
                {this.state.code === undefined && <h1 className="text-center">Status code {this.props.match.params.code} does not exist!</h1>}

                {this.state.code && (
                    <Row className="pt-5 text-center justify-content-center">
                        <Col sm={10}>
                            <Card className="">
                                <Card.Header>
                                    <h1 className="">
                                        {this.state.code[0] === "1" && this.icon.info}
                                        {this.state.code[0] === "2" && this.icon.success}
                                        {this.state.code[0] === "3" && this.icon.redirect}
                                        {this.state.code[0] === "4" && this.icon.clientError}
                                        {this.state.code[0] === "5" && this.icon.serverError} {codes[this.state.code].number} - {codes[this.state.code].name}
                                    </h1>
                                    <h2 className="">{codes[this.state.code].type}</h2>
                                </Card.Header>

                                <Card.Body>
                                    <Card.Text className="">{codes[this.state.code].description}</Card.Text>

                                    {codes[this.state.code].description_extra && (
                                        <ListGroup className="">
                                            <ListGroupItem>
                                                <strong>GET:</strong> {codes[this.state.code].description_extra.get}
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>POST:</strong> {codes[this.state.code].description_extra.post}
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>PUT:</strong> {codes[this.state.code].description_extra.put}
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>HEAD:</strong> {codes[this.state.code].description_extra.head}
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>TRACE:</strong> {codes[this.state.code].description_extra.trace}
                                            </ListGroupItem>
                                        </ListGroup>
                                    )}
                                </Card.Body>

                                {codes[this.state.code].note && (
                                    <Card.Footer>
                                        <h5 className="">NOTE: {codes[this.state.code].note}</h5>
                                    </Card.Footer>
                                )}
                            </Card>
                        </Col>
                    </Row>
                )}
            </Container>
        )
    }
}

export default withRouter(HTTPStatus)
