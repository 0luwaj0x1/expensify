import React from 'react';
import ReactDOM from 'react-dom';


const RequireAuth = (props) => (

  <div>
    
      <h1>Auth</h1>

      <p>Your are authenticated: {props.message}</p>
  
  </div>

)

const AuthWrapper = (WrappedComponent) => {

  return (props) => (
    <div>

      {props.auth && <p>Nigga you are Authenticathed</p>}

      <WrappedComponent  {...props} />

    </div>
   

  );

};


const Auth = AuthWrapper(RequireAuth)






ReactDOM.render(<Auth auth={false} message="this is the prop text" />, document.getElementById('app'))



