import React from 'react';
import useLogin from "./hooks/useLogin";

const LoginComponent = ()=>{
    const {setLogin,userLogin,loginForm} = useLogin();
    return(
        <div>
            <input type={"text"} value={loginForm.id} onChange={(e)=>setLogin("id",e.target.value)} />
            <input type={"text"} value={loginForm.pw} onChange={(e)=>setLogin("pw",e.target.value)} />
            <input type={"button"} value={"Login"} onClick={userLogin} />
            <input type={"button"} value={"Sign Up"} onClick={()=>{}} />
        </div>
    )
}

export default LoginComponent;