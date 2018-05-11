import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Content } from './Content';
import { Socket } from './Socket';
import { Logins } from './Login';
import { UserCount } from './UserCount.js'
import { LanguageList } from './LanguageSelect.js';
import { Mic } from './Record.js'

ReactDOM.render(<LanguageList />, document.getElementById('languageDropdown'));
ReactDOM.render(<Content />, document.getElementById('messages'));
ReactDOM.render(<Logins />, document.getElementById('buttons'));
ReactDOM.render(<UserCount />, document.getElementById('userCount'));
ReactDOM.render(<Mic />, document.getElementById('mic'));

Socket.on('connect', function() {
    console.log('Connecting to the server!');
})
Socket.on('disconnect', function() {
    console.log('Somebody Disconnected');
})