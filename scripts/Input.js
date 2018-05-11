import {
    Socket
}
from './Socket';
import * as React from 'react';

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            count: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            count: event.target.value.length
        });
    }
    componentDidMount() {
         Socket.on('player', (data) => {
            console.log(data['text'])
            console.log("ENTERED PLAYER FUNCTION")
            var player = document.getElementById('player');
            player.pause();
            // In browsers that don’t yet support this functionality,
            // playPromise won’t be defined.
            if (promise !== undefined) {
              promise.then(function() {
                // Automatic playback started!
              }).catch(function(error) {
                // Automatic playback failed.
                // Show a UI element to let the user manually start playback.
              });
            }
            console.log("AFTER GETTING PLAYER FROM ID")
            var text = encodeURIComponent(data['text']);
            console.log(text);
            var fromLang = data['fromLang'];
            var toLang = data['toLang'];
            var returnVal = '/read?text=' + text + '&fromLang=' + fromLang+ '&toLang=' + toLang;
            
            //var returnVal = '/read?text=' + data['text'];
            console.log("AFTER AJAX /READ CALL")
            console.log(returnVal);
            player.src = returnVal;
            // console.log(returnVal)
            console.log("PLAYYYY");
            var promise = player.play();
            // In browsers that don’t yet support this functionality,
            // playPromise won’t be defined.
            if (promise !== undefined) {
              promise.then(function() {
                // Automatic playback started!
              }).catch(function(error) {
                // Automatic playback failed.
                // Show a UI element to let the user manually start playback.
              });
            }
        });
    }
    handleSubmit(event) {
        if($("#textarea").val().length < 160){
            console.log("The current message is!!! " + this.state.value)
            //this emits to main.js
            Socket.emit('message', {
                data: this.state.value
            });
            
            // alert('A name was submitted: ' + this.state.value);
            $("#textarea").val('')
            event.preventDefault();
            this.setState({
                count: 0
            });
        } else {
            alert("Message must be shorter than 160 characters.")
            event.preventDefault();
        }
    }

    render() {
        return (
            <div id="inputArea">
              <form id="messageForm" onSubmit={this.handleSubmit}>
                <label>
                  <input placeholder="Message..." id="textarea" type="text" onChange={this.handleChange} />
                </label>
              </form>
              <div id="charCount">{this.state.count}/160</div>
            </div>
        );
    }
}
