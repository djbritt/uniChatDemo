import {
    Socket
}
from './Socket';
import * as React from 'react';

export class UserCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
        };
    }
    componentDidMount() {
        Socket.on('userConnection', (data) => {
            console.log("incoming connection data")
            console.log(data)
            this.state.userData = ''
            this.setState({
                userData: data
            });
        });
    }

    render() {
        console.log('userData is')
        console.log(this.state.userData)
        var info = this.state.userData
        if (info.length == 0) {
            console.log("nobody connected")
            var data = "0 CONNECTED"
        }
        else {

            console.log("userCount updated")

            //have to loop through users, and make sure none have a blank name
            //reason they would is because I cannot force a reconnect of the user
            //so I have to reuse their sid
            for (var i in info) {
                if (info[i].name != '') {
                    var data = ''
                    for (var i in info) {
                        if (info[i].name == '') {
                            continue
                        }
                        var name = info[i].name
                        var lang = info[i].language
                        data += name + '\n'
                    }
                }
            }
            //if after looping through info, no data, do this
            if (data == undefined) {
                console.log("nobody connected")
                var data = "0 CONNECTED"
            }
        }
        if (data == "0 CONNECTED") {
            return (
                <div id="userCount">
                <div>User Count</div>
                {data.split("\n").map(i => {
                    return <div>{i}</div>;
                })}
            </div>
            );
        }
        else {
            return (
                <div id="userCount">
                <div>User Count</div>
                {data.split("\n").map(i => {
                    return <div className='noconnect'>{i}</div>;
                })}
            </div>
            );
        }

    }
}
