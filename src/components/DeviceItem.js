import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import star from '../assets/star.png';
import {useNavigate} from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate()
    console.log(navigate)
    return (
        <Col md={3} className={'mt-3'} onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
            <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
                <Image style={{width: 'auto', height: 150, margin: 'auto'}} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className='text-black-50 d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <div>{device.rating}</div>
                        <Image src={star} width={15} height={15} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;