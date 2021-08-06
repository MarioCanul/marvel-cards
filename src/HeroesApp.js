import React, {useEffect, useReducer} from 'react'
import { AuthContext } from './components/Auth/AuthContext'
import { RouterApp } from './components/routers/RouterApp'
import { authReducer } from './components/Auth/authReducer'

const init =()=>{
    return JSON.parse(localStorage.getItem('user'))||{
        logged:false
    }
}
export const HeroesApp = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init)
    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(user))
    }, [user])
    return (
        <div className="container-fluid">
        <AuthContext.Provider value={{user,dispatch}}>
           <RouterApp/>
        </AuthContext.Provider>
        </div>
    )
}
