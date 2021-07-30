import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import { Card, CardBody, CardFooter, CardHeader, Row } from 'reactstrap';
import CardLayout from '../../components/CardLayout';
import Footer from '../../components/Footer';
import FooterSection from '../../components/FooterSection';

import Header from '../../components/header'
import HeaderSection from '../../components/HeaderSection';
import routes from '../../routes';

export default function Common(props) {

    const [state, setState] = React.useState({
        data: [],
    })

    return (
        <div>
            <Header />
            <Card>
                <CardHeader>
                    <HeaderSection />
                </CardHeader>
                <CardBody>
                    <div className="p-3">
                        <h2>Recent Posts</h2>
                    </div>
                    <div className="row mx-0">
                        <div className="col-lg-4 mb-3"><CardLayout /></div>
                        <div className="col-lg-4 mb-3"><CardLayout /></div>
                        <div className="col-lg-4 mb-3"><CardLayout /></div>
                        <div className="col-lg-4 mb-3"><CardLayout /></div>
                        <div className="col-lg-4 mb-3"><CardLayout /></div>
                        <div className="col-lg-4 mb-3"><CardLayout /></div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-center">
                        <div style={{width: 40, height: 40,padding: 7, borderRadius: '50%', background: '#8bc34a', color: 'white', textAlign: 'center'}} className="mx-1">1</div>
                        <div style={{width: 40, height: 40,padding: 7, borderRadius: '50%', background: '#2f89fc', color: 'white', textAlign: 'center'}} className="mx-1">2</div>
                        <div style={{width: 40, height: 40,padding: 7, borderRadius: '50%', background: '#2f89fc', color: 'white', textAlign: 'center'}} className="mx-1">3</div>
                        <div style={{width: 40, height: 40,padding: 7,textAlign: 'center'}} className="mx-1">...</div>
                        <div style={{width: 40, height: 40,padding: 7, borderRadius: '50%', background: '#2f89fc', color: 'white', textAlign: 'center'}} className="mx-1">10</div>

                    </div>
                </CardBody>
                <CardFooter>
                    <FooterSection />
                </CardFooter>
                <Footer />
            </Card>
        </div>
    )
}
