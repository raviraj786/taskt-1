import React from 'react';
import { GoogleLogin } from 'react-google-login';

import { GoogleOAuthProvider } from '@react-oauth/google';










const GoogleAuth = ({ onSuccess, onFailure }) => {


  const responseGoogle = (response) => {
    console.log(response)
    if (response && response.profileObj) {
      onSuccess(response.profileObj);
    } else {
      console.log("error")
    }
  };

  return (

      <GoogleLogin
      clientId = '777409032024-34tupvncep21l277ve7ro172kn5ha767.apps.googleusercontent.com'
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
     
    />





  )
   
};

export default GoogleAuth;


