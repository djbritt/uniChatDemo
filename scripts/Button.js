import * as React from 'react';
import {
    Socket
}
from './Socket';


export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": false,
            loggedIn: false
        };
        this.handleChange=this.handleChange.bind(this);
    }
    componentDidMount(){
        //All off the messages sent by the server...
        Socket.on('glogin', (data) => {
            this.setState({
                loggedIn: true
            });
        });
        //All off the messages sent by the server...
        Socket.on('sendFB', (data) => {
            this.setState({
                loggedIn: true
            });
        });
        //All off the messages sent by the server...
        Socket.on('glogout', (data) => {
            this.setState({
                loggedIn: false
            });
        });
        //All off the messages sent by the server...
        Socket.on('fblogout', (data) => {
            this.setState({
                loggedIn: false
            });
        });
    }
    handleChange(event) {
        if (this.state.value == false) {
            this.setState({
                "value": true
            });
            Socket.emit('cleverbotTrue');
            console.log("cleverbotTrue sent");
        } else {
            this.setState({
                "value": false
            });
            Socket.emit('cleverbotFalse');
            console.log("cleverbotFalse sent");
        }
    }
    render() {
        if(this.state.loggedIn){
             return (
                <div>
                <div id="talkToBotBox">BOT RESPONSE</div>
                    <label className="switch">
                      <input type="checkbox" onChange={this.handleChange}/>
                      <div className="slider round"></div>
                    </label>
                </div>
            );   
        } else {
            return <div></div>
        }
    }
}
