import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import PriceChart from "./chartComponent";
import BreadCrumb from "./breadcrumb";
import OptionsList from "./navigatorComponent"
import Performance from "./performance component";
import Sentiments from "./Sentiments";
import About from "./AboutContainer";
import GetStarted from "./GetStartredBox";
import TrendingCoins from "./TrendingCoins";

const TestComponent = () => {
    const useStyle = {
        backgroundColor : '#EFF2F5',
    }

    return(
        <Container fluid style={useStyle} className="px-5">
            <Row className="" >
            <BreadCrumb />
                <Col xs={12} md={8} className="mb-5">
                    <div className="px-5" style={{ backgroundColor: 'white', borderRadius: '1rem' } }>
                        <PriceChart  />
                    </div>
                    <OptionsList />
                    <div className="px-5" style={{ backgroundColor: 'white', borderRadius: '1rem' } }>
                        <Performance  />
                    </div>
                    <div className="px-5 py-5" style={{ backgroundColor: 'white', borderRadius: '1rem' } }>
                        <Sentiments  />
                    </div>
                    <div className="px-5 py-5 mt-" style={{ backgroundColor: 'white', borderRadius: '1rem' } }>
                        <About  />
                    </div>
                </Col>
                <Col xs={12} md={{order:'last'}} >
                <div style={{ backgroundColor: 'white' } }>xs=6 md=4</div>
                </Col>
                <Col>
                    <div className="p-5" style={{ backgroundColor: '#0052FE', borderRadius: '1rem' } }>
                        <GetStarted  />
                    </div>
                    <div className="p-5 mt-5" style={{ backgroundColor: 'white', borderRadius: '1rem' } }>
                        <TrendingCoins  />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default TestComponent;