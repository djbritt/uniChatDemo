import * as React from 'react';
import {
  Socket
}
from './Socket';

import {
  ReactMic
}
from './react-mic';

export class Mic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      loggedIn: false
    };
    this.record = this.record.bind(this);
  }
  componentDidMount() {
    //All off the messages sent by the server...
    Socket.on('glogin', (data) => {
      this.setState({
        loggedIn: true
      });
    });
    Socket.on('glogout', (data) => {
      this.setState({
        loggedIn: false
      });
    });
  }
  record() {

    console.log(this.state.record)
    if (this.state.record == false) {
      console.log("inside of false")
      this.setState({
        record: true
      });
      this.state.record = true
      console.log("changed to " + this.state.record)
    }
    else {
      console.log("inside of true")
      this.setState({
        record: false
      });
      this.state.record = false
      console.log("changed to " + this.state.record)
    }
  }

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob.blob);
    Socket.emit('transcribe', {
      'audio_data': recordedBlob.blob
    });
  }

  render() {
    console.log("rendering mic image")
    const img = "/static/img/microphone.png";
    var strokeColor = "#FFFFFF";
    if (this.state.record) {
      strokeColor = "invisible";
    }
    if (this.state.loggedIn) {
      if (this.state.record) {
        return (
          <div>
            <ReactMic
              record={this.state.record}
              className="sound-wave"
              onStop={this.onStop}
              strokeColor={strokeColor}
              backgroundColor="black" />
              <img id="record" src={img} onClick={this.record}/>
          </div>
        );
      }
      else {
        return (
          <div>
          <ReactMic
              record={this.state.record}
              className="sound"
              onStop={this.onStop}
              strokeColor={strokeColor}
              backgroundColor="#545454"/>
          <img id="record" src={img} onClick={this.record}/>
          </div>
        );
      }
    }
    else {
      return (<div></div>)
    }
  }
}
