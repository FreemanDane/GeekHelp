import React, { Component } from "react";
import Foundation, {Row, Column, Button, Colors} from "react-foundation";
import ReactDOM from "react-dom";
import "./Login.css"
import {history} from "./index";
import Ajax from "react-ajax";

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <Column small={12} large={5} medium={8} centerOnLarge centerOnMedium centerOnSmall>
                    <Row className="display">
                        <Column small={12}>
                            <h2>用户登陆</h2>
                        </Column>
                    </Row>
                    <Row className="display">
                        <Column small={3}>
                            <h3>账号</h3>
                        </Column>
                        <Column small={9}>
                            <input type="text" placeholder="account"></input>
                        </Column>
                    </Row>
                    <Row className="display">
                        <Column small={3}>
                            <h3>密码</h3>
                        </Column>
                        <Column small={9}>
                            <input type="password" placeholder="password"></input>
                        </Column>
                    </Row>
                    <Row className="display">
                        <Column large={6} medium={8} small={10} centerOnLarge centerOnMedium centerOnSmall>
                            <Column small={6}>
                                <Button className="click-button">登陆</Button>
                            </Column>
                            <Column small={6}>
                                <Button className="click-button" onClick={this.jumpToRegister}>注册</Button>
                            </Column>
                        </Column>
                    </Row>
                </Column>
            </div>
        );
    }
    jumpToRegister(){
        history.push("/register")
    }
}

export default Login;
