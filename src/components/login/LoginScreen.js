import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthContext';
import { types } from '../types/types';

export const LoginScreen = ({history}) => {
    const {dispatch} = useContext(AuthContext)
   
    const HandleLogin=()=>{
        const path=localStorage.getItem('last')|| '/'
        dispatch({
            type:types.login,
            payload:{
                nombre:'Kurugas',  
            }
        })
        history.replace(path);
    }
    return (
        <div className="container-sm">
           <h1>Login</h1>
           <hr/>
           <button className='btn btn-primary'
           onClick={HandleLogin}
           >Login Now</button>
        </div>
    )
}
