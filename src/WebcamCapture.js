import React, { useCallback, useRef, useState } from 'react';
import {useHistory} from 'react-router-dom'
import Webcam from 'react-webcam';
import {useDispatch} from 'react-redux';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { setCameraImage } from './features/cameraSlice';
import './WebcamCapture.css';


const videoConstraints = {
    width:250,
    height:400,
    facingMode:"user",
};


function WebcamCapture(){
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const capture = useCallback(() => {
     const imageSrc = webcamRef.current.getScreenshot();
     dispatch(setCameraImage(imageSrc));
     history.push('/Preview')
       
        


    },[webcamRef]);
    return <div className='webcamCapture'>
    <Webcam
    audio={false}
    height={videoConstraints.height}
    ref={webcamRef} 
    screenshotFormat='image/jpeg'
    width={videoConstraints.width} 
    videoConstraints={videoConstraints}

    
/>
<RadioButtonUncheckedIcon className="webcamCapture__button" 
onClick={capture} fontSize="large"/>

</div>;
}


export default WebcamCapture;