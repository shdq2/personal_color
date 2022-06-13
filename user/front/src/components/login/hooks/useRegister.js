import React, {useState} from 'react';
import {applyRegisterApi} from "../apis/registerApi";

const initReg = {
    id:'',
    pw:'',
    pw_re:'',
    name:''
}

const useRegister = ()=>{
    const [regForm,setRegForm] = useState(initReg);

    const changeRegForm = (type,value)=>{
        setRegForm({
            ...regForm,
            [type]:value
        });
    }

    const checkReg = ()=>{
        if(regForm["id"] == "" || regForm["pw"] == "" || regForm["pw_re"] == "" || regForm["name"] == "" || (regForm["pw"] !== regForm["pw_re"])){
            return false;
        }

        return true;
    }

    const applyReg = ()=>{
        if(checkReg()){
            console.log("Success Reg");
            applyRegisterApi();
        }else{
            console.log("Failed Reg");
        }
    }
    return {
        changeRegForm,
        regForm,
        applyReg
    }
}

export default useRegister;