import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


function BreadCrumb() {
    const separatorStyle = {
        fontSize: '1.5rem',
        verticalAlign: 'middle',
        marginRight: '0.5rem',
        marginLeft: '0.5rem',
        transform: 'translateY(-20%)',
        color : '#595C5F'
    };

    return (
        <Breadcrumb className='mt-4'>
        <Breadcrumb.Item active>Cryptocurrencies</Breadcrumb.Item>
        <span style={separatorStyle}>»</span>
        <Breadcrumb.Item active style={{color:'black', fontWeight: 'bold'}}>Bitcoin</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadCrumb;
