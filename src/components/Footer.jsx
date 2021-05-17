import React from "react"
import * as Router from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

class Footer extends React.Component {
    render() {
        return (
            <Container fluid className="bg-light border-top pb-5">
                <Row className="text-center">
                    <Col xs={{ span: 6 }} md={{ span: 2, offset: 2 }} className="d-flex flex-column">
                        <Router.Link to="/" className="footer-link py-3">
                            <h6>Sandbox</h6>
                        </Router.Link>
                        <Router.Link to="/latest" className="footer-link">
                            <p>Latest News</p>
                        </Router.Link>
                        <Router.Link to="/tutorial" className="footer-link">
                            <p>Tutorial</p>
                        </Router.Link>
                        <Router.Link to="/signup" className="footer-link">
                            <p>Sign Up</p>
                        </Router.Link>
                        <Router.Link to="/login" className="footer-link">
                            <p>Log In</p>
                        </Router.Link>
                    </Col>
                    <Col xs={{ span: 6 }} md={{ span: 2 }} className="d-flex flex-column">
                        <Router.Link to="/products" className="footer-link py-3">
                            <h6>Products</h6>
                        </Router.Link>
                        <Router.Link to="/products/catalogue" className="footer-link">
                            <p>Catalogue</p>
                        </Router.Link>
                        <Router.Link to="/products/corporate" className="footer-link">
                            <p>Corporate</p>
                        </Router.Link>
                        <Router.Link to="/products/wholesale" className="footer-link">
                            <p>Wholesale</p>
                        </Router.Link>
                        <Router.Link to="/products/b2b" className="footer-link">
                            <p>B2B</p>
                        </Router.Link>
                    </Col>
                    <Col xs={{ span: 6 }} md={{ span: 2, offset: 0 }} className="mt-3 mt-md-0 d-flex flex-column">
                        <Router.Link to="/about" className="footer-link py-3">
                            <h6>Company</h6>
                        </Router.Link>
                        <Router.Link to="/tos" className="footer-link">
                            <p>Term of Service</p>
                        </Router.Link>
                        <Router.Link to="/about" className="footer-link">
                            <p>About Us</p>
                        </Router.Link>
                        <Router.Link to="/jobs" className="footer-link">
                            <p>Jobs</p>
                        </Router.Link>
                        <Router.Link to="/faq" className="footer-link">
                            <p>FAQ</p>
                        </Router.Link>
                    </Col>
                    <Col xs={{ span: 6 }} md={{ span: 2 }} className="mt-3 mt-md-0 d-flex flex-column">
                        <Router.Link to="/policy" className="footer-link py-3">
                            <h6>Policies</h6>
                        </Router.Link>
                        <Router.Link to="/policy/privacy" className="footer-link">
                            <p>Privacy Policy</p>
                        </Router.Link>
                        <Router.Link to="/policy/shipping" className="footer-link">
                            <p>Shipping Policy</p>
                        </Router.Link>
                        <Router.Link to="/policy/return" className="footer-link">
                            <p>Return Policy</p>
                        </Router.Link>
                        <Router.Link to="/policy/order" className="footer-link">
                            <p>Order Policy</p>
                        </Router.Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer
