import React from "react"
import * as Router from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

class Footer extends React.Component {
    render() {
        return (
            <Container fluid className="bg-light border-top">
                <Row className="">
                    <Col xs={{ span: 6 }} sm={{ span: 5, offset: 2 }} md={{ span: 2, offset: 2 }} className="d-flex flex-column">
                        <Router.Link to="/" className="footer-link">
                            <h6>Sandbox</h6>
                        </Router.Link>
                        <Router.Link to="/tutorial" className="footer-link">
                            Tutorial
                        </Router.Link>
                        <Router.Link to="/latest" className="footer-link">
                            Latest News
                        </Router.Link>
                        <Router.Link to="/signup" className="footer-link">
                            Sign Up
                        </Router.Link>
                        <Router.Link to="/login" className="footer-link">
                            Log In
                        </Router.Link>
                    </Col>
                    <Col xs={{ span: 6 }} sm={{ span: 5 }} md={{ span: 2 }} className="d-flex flex-column">
                        <Router.Link to="/products" className="footer-link">
                            <h6>Products</h6>
                        </Router.Link>
                        <Router.Link to="/products/catalogue" className="footer-link">
                            Catalogue
                        </Router.Link>
                        <Router.Link to="/products/corporate" className="footer-link">
                            Corporate
                        </Router.Link>
                        <Router.Link to="/products/wholesale" className="footer-link">
                            Wholesale
                        </Router.Link>
                        <Router.Link to="/products/b2b" className="footer-link">
                            B2B
                        </Router.Link>
                    </Col>
                    <Col xs={{ span: 6 }} sm={{ span: 5, offset: 2 }} md={{ span: 2, offset: 0 }} className="mt-3 mt-md-0 d-flex flex-column">
                        <Router.Link to="/about" className="footer-link">
                            <h6>Company</h6>
                        </Router.Link>
                        <Router.Link to="/faq" className="footer-link">
                            FAQ
                        </Router.Link>
                        <Router.Link to="/jobs" className="footer-link">
                            Jobs
                        </Router.Link>
                        <Router.Link to="/about" className="footer-link">
                            About Us
                        </Router.Link>
                        <Router.Link to="/tos" className="footer-link">
                            Term of Service
                        </Router.Link>
                    </Col>
                    <Col xs={{ span: 6 }} sm={{ span: 5 }} md={{ span: 2 }} className="mt-3 mt-md-0 d-flex flex-column">
                        <Router.Link to="/policy" className="footer-link">
                            <h6>Policies</h6>
                        </Router.Link>
                        <Router.Link to="/policy/privacy" className="footer-link">
                            Privacy Policy
                        </Router.Link>
                        <Router.Link to="/policy/shipping" className="footer-link">
                            Shipping Policy
                        </Router.Link>
                        <Router.Link to="/policy/return" className="footer-link">
                            Return Policy
                        </Router.Link>
                        <Router.Link to="/policy/order" className="footer-link">
                            Order Policy
                        </Router.Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer
