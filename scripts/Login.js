import * as React from 'react';
import {
    Socket
}
from './Socket';

import {
    Input
}
from './Input';


export class GLogoutButton extends React.Component {
    logout() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function() {
            console.log('User signed out.');
            Socket.emit('glogout');
        });
    }
    render() {
        return (
            <div>
            <button onClick={this.logout} className="loginBtn loginBtn--google">
               &nbsp;
            </button>
        </div>
        );
    }
}
export class GLoginButton extends React.Component {
    componentDidMount() {
        gapi.load('auth2', function() {
            var d = gapi.auth2.init();
            console.log("auth2 loaded")
            d.attachClickHandler(document.getElementById('my-signin2'), {},
                function(googleUser) {
                    console.log("Signed in: " + googleUser.getBasicProfile().getName());
                    var token = googleUser.Zi.access_token;
                    var gName = googleUser.getBasicProfile().getName();
                    var gImage = googleUser.getBasicProfile().getImageUrl();
                    Socket.emit('googleToken', {
                        'gToken': token,
                        'gImage': gImage,
                        'gName': gName
                    });
                },
                function(error) {
                    alert(JSON.stringify(error, undefined, 2));
                });
        });
    }
    render() {
        return (
            <div>
                <button id="my-signin2" className="loginBtn loginBtn--google">
                </button>
            </div>
        );
    }
}


// -------------------------------------------------------MAIN COMPONENT

export class Logins extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            gloggedin: false,
        };
    }
    componentDidMount() {
        Socket.on('glogin', (data) => {
            console.log("entered gLogin set state")
            this.setState({
                gloggedin: true
            });
        });
        Socket.on('glogout', (data) => {
            console.log("entered glogout set state")
            this.setState({
                gloggedin: false
            });
        });
    }
    render() {
        console.log("buttons updated")
        var gloggedin = this.state.gloggedin
        let button = null;
        if (gloggedin === true) {
            button = <div className='loginarea' id="logout"><div id="loginText">LOGOUT</div><GLogoutButton /><Input /></div>
        }
        else {
            button = <div className='loginarea' id="login"><div id="loginText">LOGIN</div><GLoginButton /></div>
        }

        return (
            <div>
                {button}
            </div>
        );
    }
}
