import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faCircleInfo, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faBlogger } from '@fortawesome/free-brands-svg-icons';
import { Stack } from 'react-bootstrap';

const Sentiments = () => {
  return (
    <div className="sentiments-container">
      <h2 >Sentiments</h2>
      <div className="key-events mt-3">
        <h5 style={{color: '#44475B', fontWeight: '700'}}>
          Key Events <FontAwesomeIcon size='xs' icon={faCircleInfo} style={{color: '#7C7E8C'}} />
        </h5>

        <Stack direction='horizontal' gap={5} className="events-container mt-4">
          <div className="event p-3" style={{ backgroundColor: '#E8F4FD'}}>
          <div className='mt-2' style={{backgroundColor:'#0082ff', height: '2.5rem', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', borderRadius: '50%'}}><FontAwesomeIcon icon={faBlogger} style={{color: "#ffffff",}} />
        </div>
          <div>
            <p style={{fontWeight: '500'}}>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
            <p style={{color: 'grey'}}>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
          </div>
          </div>
          <div className="event p-3" style={{ backgroundColor: '#EBF9F4'}}>
            <div className='mt-2' style={{backgroundColor:'#0FBA83', height: '2.5rem', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', borderRadius: '50%'}}><FontAwesomeIcon icon={faArrowTrendUp} style={{color: "#ffffff",}} />
            </div>
            <div>
                <p style={{fontWeight: '500'}}>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                <p style={{color: 'grey'}}>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
            </div>
          </div>
        </Stack>
      </div>


      <div className="analyst-estimates">
        <h5 className='my-5' style={{color:'#44475B', fontWeight: '700'}}>
          Analyst Estimates <FontAwesomeIcon className='ms-1' size='xs' icon={faCircleInfo} style={{color: '#7C7E8C'}} />
        </h5>
        <div className="estimate-container">
          <div className="circle" style={{ backgroundColor: '#EBF9F4', color: '#2AC291', fontSize:'2rem' }}>
            76%
          </div>
          <div className="estimates">
            <div className='bar-container'>
                <div style={{width: '10%'}}>Buy</div>
                <div className="bar my-auto" style={{ width: '76%', backgroundColor: '#00B386' }}></div>
            </div >
            <div className='bar-container'>
                <div style={{width: '10%'}}>Hold</div>
                <div className="bar my-auto" style={{ width: '8%', backgroundColor: '#C7C8CE' }}></div>
            </div>
            <div className='bar-container'>
                <div style={{width: '10%'}}>Sell</div>
                <div className="bar my-auto" style={{ width: '16%', backgroundColor: '#F7324C' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiments;
