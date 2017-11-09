import "./Register.css"
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Foundation, {Row, Column, Button} from "react-foundation";
import {history} from "./index";


class Register extends Component {
    render() {
        return (
            <div className="Register">
                <Column small={12} large={5} medium={8} centerOnLarge centerOnMedium centerOnSmall>
                    <Row className="display">
                        <Column small={12}>
                            <h2>用户注册</h2>
                        </Column>
                    </Row>
                    <Row className="display">
                        <Column small={3}>
                            <h3>姓名</h3>
                        </Column>
                        <Column small={9}>
                            <input type="text" placeholder="name"></input>
                        </Column>
                    </Row>
                    <Row className="display">
                        <Column small={3}>
                            <h3>邮箱</h3>
                        </Column>
                        <Column small={9}>
                            <input type="text" placeholder="e-mail"></input>
                        </Column>
                    </Row>
                    <Row className="display">
                        <Column small={3}>
                            <h3>手机</h3>
                        </Column>
                        <Column small={9}>
                            <input type="text" placeholder="phone number"></input>
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
                        <Column small={3}>
                            <h3>确认密码</h3>
                        </Column>
                        <Column small={9}>
                            <input type="password" placeholder="password again"></input>
                        </Column>
                    </Row>
                    <Row className="display">
                        <Column large={6} medium={8} small={10} centerOnLarge centerOnMedium centerOnSmall>
                        <Row>
                            <Column small={4} centerOnLarge centerOnSmall centerOnMedium>
                                <Button className="click-button">确定</Button>
                            </Column>
                            <Column small={6}>
                                <li><Link to="/login">已有账号？登陆</Link></li>
                            </Column>
                            <Column small={6}>
                                <li><Link to="/login">忘记密码</Link></li>
                            </Column>
                        </Row>
                        </Column>
                    </Row>
                </Column>
            </div>
        );
    }
}

export default Register;