import React, { useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { QRCodeSVG } from 'qrcode.react';

const Home = () => {
    const [content, setContent] = useState('');
    const [codeVisible, setCodeVisible] = useState(false);
    const [error, setError] = useState(false)
    
    const codeGenerator = () => {
        if (content) {
            setCodeVisible(true);
            setError(false)
        } else {
            setCodeVisible(false);
            setError(true)
        }
    };
    
    return (
        <div className='row'>
            <h1 className='text-center text-color border-bottom py-3 border-3'>Personalized QR Code Generator : </h1>
            <div className="col-sm-1"></div>
            <div className="col-sm-5 text-center">
                <div className='main'>
                    <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className='input-field px-3' placeholder='Enter Your Text' />
                    <button className='submit-btn' onClick={codeGenerator}>Create QR Code &nbsp;<FaArrowAltCircleRight /></button>
                    {
                        error ? <p className='text-danger text-start'>Please enter some text</p> : <p></p>
                    }
                </div>
            </div>
            <div className="col-sm-5">
                <div className='code-box'>
                    <p className='fs-3 text-center text-color mt-4 border-bottom border-3 w-75 mx-auto pb-3'>QR Code here:</p>
                    <div className='text-center code-here'>
                        {codeVisible && <QRCodeSVG value={content} size={200}/>}
                    </div>
                </div>
            </div>
            <div className="col-sm-1"></div>
        </div>
    );
};

export default Home;
