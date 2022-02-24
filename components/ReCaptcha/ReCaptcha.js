import React from 'react';
import ReCAPTCHA from "react-google-recaptcha"


const ReCaptcha = () => {

    function onChange(value) {
        console.log("Captcha value:", value)
    }

    return (
        <div>
            <ReCAPTCHA sitekey="6Le3HZIeAAAAADNgYh01LQzJjeiSRZv1o-5G60Z1" onChange={onChange} />
        </div>
    );
};

export default ReCaptcha;
