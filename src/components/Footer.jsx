import React from "react"
import * as Router from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import "./Footer.css"

class Footer extends React.Component {
    render() {
        return (
            <Container fluid className="bg-light border-top">
                <Row className="">
                    <Col xs={{ span: 6 }} sm={{ span: 5, offset: 2 }} md={{ span: 2, offset: 2 }} className="d-flex flex-column">
                        <h6>Sandbox</h6>
                        <Router.NavLink to="/" className="footer-link">
                            Text 1
                        </Router.NavLink>
                        <Router.NavLink to="/" className="footer-link">
                            Teext 2
                        </Router.NavLink>
                        <Router.NavLink to="/" className="footer-link">
                            Teeext 3
                        </Router.NavLink>
                        <Router.NavLink to="/" className="footer-link">
                            Teeeext 4
                        </Router.NavLink>
                    </Col>
                    <Col xs={{ span: 6 }} sm={{ span: 5 }} md={{ span: 2 }} className="d-flex flex-column">
                        <h6>Products</h6>
                        <Router.NavLink to="/" className="footer-link">
                            Teeeext 1
                        </Router.NavLink>
                        <Router.NavLink to="/" className="footer-link">
                            Teeext 2
                        </Router.NavLink>
                        <Router.NavLink to="/" className="footer-link">
                            Teext 3
                        </Router.NavLink>
                        <Router.NavLink to="/" className="footer-link">
                            Text 4
                        </Router.NavLink>
                    </Col>
                    <Col xs={{ span: 6 }} sm={{ span: 5, offset: 2 }} md={{ span: 2, offset: 0 }} className="mt-3 mt-md-0 d-flex flex-column">
                        <h6>mediumword</h6>
                        <Router.NavLink to="/" className="footer-link">
                            Text 1
                        </Router.NavLink>
                        <Router.NavLink to="/" className="footer-link">
                            Teext 2
                        </Router.NavLink>
                        <Router.NavLink to="/" className="footer-link">
                            Teeext 3
                        </Router.NavLink>
                        <Router.NavLink to="/" className="footer-link">
                            Teeeext 4
                        </Router.NavLink>
                    </Col>
                    <Col xs={{ span: 6 }} sm={{ span: 5 }} md={{ span: 2 }} className="mt-3 mt-md-0 d-flex flex-column">
                        <h6>mediumword</h6>
                        <Router.NavLink to="/" className="footer-link">
                            Teeeext 1
                        </Router.NavLink>
                        <Router.NavLink to="/" className="footer-link">
                            Teeext 2
                        </Router.NavLink>
                        <Router.NavLink to="/" className="footer-link">
                            Teext 3
                        </Router.NavLink>
                        <Router.NavLink to="/" className="footer-link">
                            Text 4
                        </Router.NavLink>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer
