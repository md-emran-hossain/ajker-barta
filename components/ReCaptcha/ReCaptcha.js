import React from 'react';
import ReCAPTCHA from "react-google-recaptcha"



const ReCaptcha = async () => {

    function onChange(value) {
        console.log("Captcha value:", value)
    }



    // await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    //     method: "POST",
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    //     },
    //     body: `secret=${"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"}&response=${humanKey}`
    // })


    return (
        <div>
            <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} />
        </div>
    );
};

export default ReCaptcha;
