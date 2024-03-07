import React from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const GetStarted = () =>{
    return(
        <React.Fragment>
            <div className="get-started-container">
                <h3 style={{lineHeight: '3rem', fontWeight: '700'}}>Get Started With KoinX For Free</h3>
                <p>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
                <img className="get-started-image" src="./assets/images/getStartedImage.png"></img>
                <Button style={{width: 'fit-content', fontWeight: '500'}} className='px-4 py-2' variant="light">Get Started For FREE <FontAwesomeIcon icon={faArrowRight} /></Button>
            </div>
        </React.Fragment>
    );
};

export default GetStarted;