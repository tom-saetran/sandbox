import React from "react"
import { withRouter } from "react-router"
import Dropdown from "react-bootstrap/Dropdown"
import Navbar from "react-bootstrap/Navbar"
import * as Router from "react-router-dom"
import * as Icon from "react-bootstrap-icons"

class NavBar extends React.Component {
    render() {
        return (
            <Navbar className="d-flex justify-content-center border-bottom" bg="light" expand="lg">
                <Dropdown className="">
                    <Dropdown.Toggle className="text-dark no-shadow" variant="light">
                        1xx
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="text-center" style={{ minWidth: "63px" }}>
                        <Dropdown.Header>
                            <Icon.InfoCircle color="blue" />
                        </Dropdown.Header>
                        <Dropdown.Item as={Router.NavLink} to="/status/100">
                            100
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/101">
                            101
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/102">
                            102
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/103">
                            103
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="">
                    <Dropdown.Toggle className="text-dark no-shadow" variant="light">
                        2xx
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="text-center" style={{ minWidth: "63px" }}>
                        <Dropdown.Header>
                            <Icon.Check2Circle color="green" />
                        </Dropdown.Header>
                        <Dropdown.Item as={Router.NavLink} to="/status/200">
                            200
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/201">
                            201
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/202">
                            202
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/203">
                            203
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/204">
                            204
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/205">
                            205
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/206">
                            206
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/207">
                            207
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/208">
                            208
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/226">
                            226
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="">
                    <Dropdown.Toggle className="text-dark no-shadow" variant="light">
                        3xx
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="text-center" style={{ minWidth: "63px" }}>
                        <Dropdown.Header>
                            <Icon.QuestionCircle color="purple" />
                        </Dropdown.Header>
                        <Dropdown.Item as={Router.NavLink} to="/status/300">
                            300
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/301">
                            301
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/302">
                            302
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/303">
                            303
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/304">
                            304
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/305">
                            305
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/306">
                            306
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/307">
                            307
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/308">
                            308
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="">
                    <Dropdown.Toggle className="text-dark no-shadow" variant="light">
                        4xx
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="text-center" style={{ minWidth: "63px" }}>
                        <Dropdown.Header>
                            <Icon.XCircle color="orange" />
                        </Dropdown.Header>
                        <Dropdown.Item as={Router.NavLink} to="/status/400">
                            400
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/401">
                            401
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/402">
                            402
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/403">
                            403
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/404">
                            404
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/405">
                            405
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/406">
                            406
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/407">
                            407
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/408">
                            408
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/409">
                            409
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/410">
                            410
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/411">
                            411
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/412">
                            412
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/413">
                            413
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/414">
                            414
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/415">
                            415
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/416">
                            416
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/417">
                            417
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/418">
                            418
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/421">
                            421
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/422">
                            422
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/423">
                            423
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/424">
                            424
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/425">
                            425
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/426">
                            426
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/428">
                            428
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/429">
                            429
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/431">
                            431
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/451">
                            451
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="text-dark no-shadow" variant="light">
                        5xx
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="text-center" style={{ minWidth: "63px" }}>
                        <Dropdown.Header>
                            <Icon.XCircle color="red" />
                        </Dropdown.Header>
                        <Dropdown.Item as={Router.NavLink} to="/status/500">
                            500
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/501">
                            501
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/502">
                            502
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/503">
                            503
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/504">
                            504
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/505">
                            505
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/506">
                            506
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/507">
                            507
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/508">
                            508
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/510">
                            510
                        </Dropdown.Item>
                        <Dropdown.Item as={Router.NavLink} to="/status/511">
                            511
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
        )
    }
}

export default withRouter(NavBar)
