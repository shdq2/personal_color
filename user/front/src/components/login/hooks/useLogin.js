import React, {useState} from 'react';
import {userLoginAjax} from "../apis/loginApi";

const initLoginForm = {
    id:'',
    pw:''
}

const useLogin = ()=>{
    const [loginForm,setLoginForm] = useState(initLoginForm);

    const setLogin = (type,value)=>{
        setLoginForm({
            ...loginForm,
            [type]:value
        })
    }

    const userLogin = ()=>{
        const data = userLoginAjax(loginForm)
        console.log(data);
    }

    return {
        setLogin,
        userLogin,
        loginForm
    }
}

export default useLogin;