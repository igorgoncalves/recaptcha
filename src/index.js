import React from 'react';
import ReactDOM from 'react-dom';
import ReCAPTCHA from "react-google-recaptcha";

function onChange(token) {
  console.log("Captcha value:", token);
  console.log("ON CHANGE");
  try {
    window.ReCaptchaFlutterChannelChange.postMessage(token);
  } catch (e) {
    console.log("Something wrong...");
  }
}

function onExpired(){
  console.log("ON EXPIRED");
  try {
    window.ReCaptchaFlutterChannelExpired.postMessage("expired");
  } catch (e) {
    console.log("Something wrong reset...");
  }
}

function onErrored(){
  console.log("ON ERROR");
  try {
    window.ReCaptchaFlutterChannelError.postMessage("error");
  } catch (e) {
    console.log("Something wrong reset...");
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ReCAPTCHA
      sitekey="API_KEY"
      onChange={onChange}
      onErrored={onErrored}
      onExpired={onExpired}
      hl="pt-BR"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

