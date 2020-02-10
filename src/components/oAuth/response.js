import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
    console.log(response);
}

ReactDOM.render(
    <GoogleLogin
        clientId="669827031301-ad0ilubokhjudbpvbn9lti3h62ecv4al.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />,
    document.getElementById('googleButton')
);
ReactDOM.render(
    <GoogleLogin
        clientId="669827031301-ad0ilubokhjudbpvbn9lti3h62ecv4al.apps.googleusercontent.com"
        render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />,
    document.getElementById('googleButton')
);