
import './login.css';
import GoogleLogin from 'react-google-login';


function login() {
    //check if the user is already logged in (don't render the log-in information)
    return (<GoogleLogin
    clientId="1087899154485-hom6em59ple1njqvrnk08nfmou6v7q1g.apps.googleusercontent.com"
    render={renderProps => (
      <button onClick={renderProps.onClick} disabled={renderProps.disabled} id="sign-in_button">Google Login</button>
    )}
    buttonText="Login"
    onSuccess={onSignIn}
    onFailure={logInFail}
    cookiePolicy={'single_host_origin'}
  />);
}

function onSignIn(googleUser) {
    document.getElementById("sign-in_button").innerHTML = "Logged In";
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);

    //display sign out button
}

function logInFail() {
    console.log("Log in failed.");
}

export default login;
