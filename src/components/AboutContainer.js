import React from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return(
        <React.Fragment>
            <h3 className="mb-3" style={{fontWeight: '700'}}>About Bitcoin</h3>
            <h5 className="mb-2" style={{fontWeight: '700'}}>What is Bitcoin?</h5>
            <p style={{color: '#3E424A', fontWeight: '500'}} className="mb-4">Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
            <hr />
            <h5 className="my-4" style={{fontWeight: '700'}}>Lorem ipsum dolor sit amet</h5>
            <p style={{color: '#3E424A', fontWeight: '500'}} className="mb-4">
                Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
            </p>
            <p style={{color: '#3E424A', fontWeight: '500'}} className="mb-4">
                Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
            </p>
            <p style={{color: '#3E424A', fontWeight: '500'}} className="mb-4">
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
            </p>

            <hr />
            <h3 className="mb-3" style={{fontWeight: '700'}}>Already Holding Bitcoin?</h3>
            <div className="already-holding-boxes-container mb-5">
                <div className="already-holding-boxes box-one p-3">
                    <div style={{borderRadius: '0.5rem', height: '100%'}}>
                        <img style={{height: '100%', borderRadius: '0.5rem'}} src="https://www.pipscompare.com/wp-content/uploads/2023/08/image-362-570x570.jpg"></img>
                    </div>
                    <div className="box-text ms-4">
                        <h4>Calculate Your Profits</h4>
                        <Button style={{width: 'fit-content', fontWeight: '500'}} className='px-4' variant="light">Check Now <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </div>
                </div>
                <div className="already-holding-boxes box-two p-3">
                    <div style={{borderRadius: '0.5rem', height: '100%'}}>
                        <img style={{height: '100%', borderRadius: '0.5rem'}} src="https://enpowered.com/wp-content/uploads/2021/05/thumbnails-25.png"></img>
                    </div>
                    <div className="box-text ms-4">
                        <h4>Calculate Your tax libility</h4>
                        <Button style={{width: 'fit-content', fontWeight: '500'}} className='px-4' variant="light">Check Now <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </div>
                </div>
            </div>
            <hr />
            <p style={{color: '#3E424A', fontWeight: '500'}} className="mt-4">
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
            </p>
        </React.Fragment>
    );
};

export default About;