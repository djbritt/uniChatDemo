import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Socket
}

from './Socket';
import Recorder from 'react-recorder'


var messagesArray = [];
var num = 0;

export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'data': '',
            'messages': []
        };
    }
    scrollToBottom() {
        console.log(this)
        // var elem = document.getElementById('yourId');
        // this.scrollTop = this.scrollHeight;
        // this.el.scrollIntoView({ behavior: 'smooth' });
        // this.el.scrollBy(0, -65);
        // window.scrollTo(0, tesNode.offsetTop);

        // window.scrollTo(0, tesNode.offsetTop);
    }
    componentDidMount() {
        Socket.emit('pageLoad');

        Socket.on('transcript', (data) => {
            console.log(data["transcript"])
        });
        Socket.on('loadAuth', () => {
            console.log("About to load auth2")
            gapi.load('auth2', function() {
                if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
                    console.log("Entered gapi")
                    var d = gapi.auth2.init();
                    // console.log(d)
                    console.log("Signed in: " + googleUser.getBasicProfile().getName());
                }
            });
        })
        Socket.on('allMessages', (list) => {
            num++
            console.log("Message list recieved" + num + "-")
            console.log(list['data'])
            this.setState({
                "messages": list['data']
            });
            console.log("-------------------------------")
        });
    }
    componentDidUpdate() {
        //this will run every time there is an update to the component
        //but this check only tries to run the scrollToBottom() when there is
        //actually messages on the page, otherwise it is undefined
        // this.scrollToBottom()
        // this.scrollDiv.scrollIntoView(false);

        // if (this.state.messages.length > 2) {
        this.el.scrollIntoView({ behavior: 'smooth' });

        console.log("scrolled page")
        //     this.scrollToBottom();
        // }
        // this.scrollToBottom();
    }
    render() {

        console.log("messages length is " + this.state.messages.length)
        if (this.state.messages.length > 0) {
            for (var i in this.state.messages) {
                var current = this.state.messages[i].message;
                //CHECK FOR URLS
                if (current.includes("<a")) {
                    var str = current.replace('<a', '');
                    this.state.messages[i].message = <a target='_blank' href={current}>{str}</a>;
                }
                else console.log("No links found!")
                //CHECK FOR IMAGES
                if (current.includes(".jpg") || current.includes(".png") || current.includes(".jpeg") || current.includes(".gif")) {
                    this.state.messages[i].message = <img style={{'height': '500px'}} src={current} />;
                }
                else console.log("No images found!")
                // }
            }

            console.log("all messages")
            console.log(this.state.messages);

            var current = this.state.messages;
            const messages = current.map((n, index) => {
                return (<div key={index} id="message" ref={el => { this.el = el; }}>
                <img id="messageImage" style={{height: '40px'}} src={n['pic']} />
                <div id="messageName">{n['name']}</div>
                <div id="messageText">{n.message}</div>
            </div>);

            });
            return (
                <div>
                    <br />
                    <ul>{messages}</ul>
                </div>
            );
        }
        else {
            console.log("Messages length is 0")
            return (
                <div>
            </div>
            );
        }
    }
}
