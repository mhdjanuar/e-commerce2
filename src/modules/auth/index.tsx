import React, {useEffect} from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store/reducers';
import { AuthProps } from "./interface";
import { login, resetActionType } from "./action";

const Auth: React.FC<AuthProps> = ({actionType, isAuthenticated}) => {
    const dispatch = useDispatch()

    //-----Redux State-----//
    actionType = useSelector((state: ApplicationState) => state.auth.actionType);
    isAuthenticated = useSelector((state: ApplicationState) => state.auth.isAuthenticated);

    useEffect(() => {
        resetActionType();
    }, [actionType])
    
    const goToHome = () => {
        dispatch(login());
    }

    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <>
          <h1>Login</h1>
          <div style={{display: 'flex', alignItems: 'center'}}>
              <p>Username:</p>
              <input type='input' placeholder="username" style={{height: '30px', marginLeft: '10px'}} />
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
              <p>Password:</p>
              <input type='password' placeholder="password" style={{height: '30px', marginLeft: '15px'}} />
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
             <p onClick={() => goToHome()}>silahkan masuk</p>
          </div>
        </>
    );
}

export default Auth;