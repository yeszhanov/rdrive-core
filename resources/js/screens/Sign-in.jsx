import React, { Component } from "react";
//components
import Div from "../components/ui/Layout"
import Input from  "../components/ui/Input"
import Button from "../components/ui/Button"
//image
import Logo from "../../../public/images/logo-signin.svg"


class SignIn extends Component {
    state = {

    }
    render() { 
        return ( 
            <Div vertical width={"333px"} alignItems={"center"}>
                <img src={Logo} alt=""/>
                <Input placeholder={'Логин'} width={'333px'}/>
                <Input placeholder={'Пароль'} width={'333px'}/>
                <Button width={'333px'} >Войти </Button>
            </Div>
        );
    }
}
 
export default SignIn;