import React, { Component } from "react";
import Foundation, {Row, Column} from "react-foundation";
import "./Display,css";

class Display extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:"undefined",
            description:"There are positions need to fill.",
            money:99999999,
            id:-1
        }
    }
    render(){
        <div className="Display">
            <Column small={10} medium= {8} large={5} centerOnLarge centerOnMedium centerOnSmall>
                <Row>
                </Row>
            </Column>
        </div>
    }
}