import React from 'react';
import useRegister from "./hooks/useRegister";

const RegisterComponent = ()=>{
    const {applyReg,regForm,changeRegForm} = useRegister();

    return (
        <div>
            <input type={"text"} value={regForm.id} id={"id"} onChange={(e)=>changeRegForm(e.target.id,e.target.value)} />
            <input type={"password"} value={regForm.pw} id={"pw"} onChange={(e)=>changeRegForm(e.target.id,e.target.value)} />
            <input type={"password"} value={regForm.pw_re} id={"pw_re"} onChange={(e)=>changeRegForm(e.target.id,e.target.value)} />
            <input type={"text"} value={regForm.name} id={"name"} onChange={(e)=>changeRegForm(e.target.id,e.target.value)} />
            <input type={"button"} value={"Register"} onClick={applyReg} />
        </div>
    )
}

export default RegisterComponent;