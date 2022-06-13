import Ajax from 'ajax'

export const userLoginAjax = (loginForm)=>{
    console.log("login Api : ",loginForm)
    if(loginForm.id == "test" && loginForm.pw == "test"){
        return true;
    }else{
        return false;
    }

}

