import React from 'react';
import { Button,Spinner} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const{googleSignIn,isLoading,setIsLoading}=useAuth();
    const history=useHistory();
    const location=useLocation();
    const redirectedUrl= location?.state?.from.pathname || '/home';
    console.log(redirectedUrl);
    const handleSignIn=()=>{
        setIsLoading(true);
        googleSignIn()
        .then(()=>{
            history.push(redirectedUrl);
            
        })
        .finally(()=> setIsLoading(false))
    }
    if(isLoading){
        return <div>
    <Button variant="success" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
        </div>
    }
    return (
        <div className='container googleSignIn'>
            <h1>Please Login</h1>
            <button onClick={handleSignIn} className='btn btn-primary'>Google SIgn In</button>
        </div>
    );
};

export default Login;