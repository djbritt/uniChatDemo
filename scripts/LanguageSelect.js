import {
    Socket
}
from './Socket';
import * as React from 'react';
// const languages = 

export class Contact extends React.Component {
    render() {
        return (
            <option className="contact" value={this.props.code}>
            {this.props.name}
          </option>
        );
    }
};

export class LanguageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'en',
            loggedIn: false,
            languages: [
                { name: "Afrikaans (South Africa)", code: "af" },
                { name: "Amharic (Ethiopia)", code: "am" },
                { name: "Arabic (Egypt)", code: "ar" },
                { name: "Armenian (Armenia)", code: "hy" },
                { name: "Azeerbaijani", code: "az" },
                { name: "Basque (Spain)", code: "eu" },
                { name: "Bengali (Bangladesh)", code: "bn" },
                { name: "Bengali (India)", code: "bn" },
                { name: "Bulgarian (Bulgaria)", code: "bg" },
                { name: "Catalan (Spain)", code: "ca" },
                { name: "Chinese, Mandarin (Simplified, Hong Kong)", code: "zh-CN" },
                { name: "Chinese, Mandarin (Simplified, China)", code: "zh-CN" },
                { name: "Chinese, Mandarin (Traditional, Taiwan)", code: "zh-TW" },
                { name: "Chinese, Cantonese (Traditional, Hong Kong)", code: "zh-TW" },
                { name: "Croatian (Croatia)", code: "hr" },
                { name: "Czech (Czech Republic)", code: "cs" },
                { name: "Danish (Denmark)", code: "da" },
                { name: "Dutch (Netherlands)", code: "nl" },
                { name: "English (US)", code: "en" },
                { name: "Finnish (Finland)", code: "fi" },
                { name: "French (Canada)", code: "fr" },
                { name: "French (France)", code: "fr" },
                { name: "Galician (Spain)", code: "gl" },
                { name: "Georgian (Georgia)", code: "ka" },
                { name: "German (Germany)", code: "de" },
                { name: "Greek (Greece)", code: "el" },
                { name: "Gujarati (India)", code: "gu" },
                { name: "Hebrew (Israel)", code: "iw" },
                { name: "Hindi (India)", code: "hi" },
                { name: "Hungarian (Hungary)", code: "hu" },
                { name: "Icelandic (Iceland)", code: "is" },
                { name: "Indonesian (Indonesia)", code: "id" },
                { name: "Italian (Italy)", code: "it" },
                { name: "Japanese (Japan)", code: "ja" },
                { name: "Javanese (Indonesia)", code: "jw" },
                { name: "Kannada (India)", code: "kn" },
                { name: "Khmer (Cambodia)", code: "km" },
                { name: "Korean (South Korea)", code: "ko" },
                { name: "Lao (Laos)", code: "lo" },
                { name: "Latvian (Latvia)", code: "lv" },
                { name: "Lithuanian (Lithuania)", code: "lt" },
                { name: "Malay (Malaysia)", code: "ms" },
                { name: "Malayalam (India)", code: "ml" },
                { name: "Marathi (India)", code: "mr" },
                { name: "Nepali (Nepal)", code: "ne" },
                { name: "Norwegian Bokmål (Norway)", code: "no" },
                { name: "Persian (Iran)", code: "fa" },
                { name: "Polish (Poland)", code: "pl" },
                { name: "Portuguese (Brazil)", code: "pt" },
                { name: "Portuguese (Portugal)", code: "pt" },
                { name: "Romanian (Romania)", code: "ro" },
                { name: "Russian (Russia)", code: "ru" },
                { name: "Serbian (Serbia)", code: "sr" },
                { name: "Sinhala (Sri Lanka)", code: "si" },
                { name: "Slovak (Slovakia)", code: "sk" },
                { name: "Slovenian (Slovenia)", code: "sl" },
                { name: "Spanish (Mexico)", code: "es" },
                { name: "Sundanese (Indonesia)", code: "su" },
                { name: "Swahili (Tanzania)", code: "sw" },
                { name: "Swahili (Kenya)", code: "sw" },
                { name: "Swahili (Kenya)", code: "sw" },
                { name: "Swedish", code: "sv" },
                { name: "Tamil (India)", code: "ta" },
                { name: "Tamil (Singapore)", code: "ta-SG" },
                { name: "Tamil (Sri Lanka)", code: "ta-LK" },
                { name: "Tamil (Malaysia)", code: "ta-MY" },
                { name: "Telugu (India)", code: "te" },
                { name: "Urdu (India)", code: "te" },
                { name: "Thai (Thailand)", code: "th" },
                { name: "Turkish (Turkey)", code: "tr" },
                { name: "Ukrainian (Ukraine)", code: "uk" },
                { name: "Urdu (Pakistan)", code: "ur" },
                { name: "Vietnamese (Vietnam)", code: "vi" },
                { name: "Zulu (South Africa)", code: "zu" },
            ],
            displayedContacts: [
                { name: "Afrikaans (South Africa)", code: "af" },
                { name: "Amharic (Ethiopia)", code: "am" },
                { name: "Arabic (Egypt)", code: "ar" },
                { name: "Armenian (Armenia)", code: "hy" },
                { name: "Azeerbaijani", code: "az" },
                { name: "Basque (Spain)", code: "eu" },
                { name: "Bengali (Bangladesh)", code: "bn" },
                { name: "Bengali (India)", code: "bn" },
                { name: "Bulgarian (Bulgaria)", code: "bg" },
                { name: "Catalan (Spain)", code: "ca" },
                { name: "Chinese, Mandarin (Simplified, Hong Kong)", code: "cmn-Hans-HK" },
                { name: "Chinese, Mandarin (Simplified, China)", code: "cmn-Hans-CN" },
                { name: "Chinese, Mandarin (Traditional, Taiwan)", code: "cmn-Hant-TW" },
                { name: "Chinese, Cantonese (Traditional, Hong Kong)", code: "yue-Hant-HK" },
                { name: "Croatian (Croatia)", code: "hr" },
                { name: "Czech (Czech Republic)", code: "cs" },
                { name: "Danish (Denmark)", code: "da" },
                { name: "Dutch (Netherlands)", code: "nl" },
                { name: "English (US)", code: "en" },
                { name: "Finnish (Finland)", code: "fi" },
                { name: "French (Canada)", code: "fr" },
                { name: "French (France)", code: "fr" },
                { name: "Galician (Spain)", code: "gl" },
                { name: "Georgian (Georgia)", code: "ka" },
                { name: "German (Germany)", code: "de" },
                { name: "Greek (Greece)", code: "el" },
                { name: "Gujarati (India)", code: "gu" },
                { name: "Hebrew (Israel)", code: "iw" },
                { name: "Hindi (India)", code: "hi" },
                { name: "Hungarian (Hungary)", code: "hu" },
                { name: "Icelandic (Iceland)", code: "is" },
                { name: "Indonesian (Indonesia)", code: "id" },
                { name: "Italian (Italy)", code: "it" },
                { name: "Japanese (Japan)", code: "ja" },
                { name: "Javanese (Indonesia)", code: "jw" },
                { name: "Kannada (India)", code: "kn" },
                { name: "Khmer (Cambodia)", code: "km" },
                { name: "Korean (South Korea)", code: "ko" },
                { name: "Lao (Laos)", code: "lo" },
                { name: "Latvian (Latvia)", code: "lv" },
                { name: "Lithuanian (Lithuania)", code: "lt" },
                { name: "Malay (Malaysia)", code: "ms" },
                { name: "Malayalam (India)", code: "ml" },
                { name: "Marathi (India)", code: "mr" },
                { name: "Nepali (Nepal)", code: "ne" },
                { name: "Norwegian Bokmål (Norway)", code: "no" },
                { name: "Persian (Iran)", code: "fa" },
                { name: "Polish (Poland)", code: "pl" },
                { name: "Portuguese (Brazil)", code: "pt" },
                { name: "Portuguese (Portugal)", code: "pt" },
                { name: "Romanian (Romania)", code: "ro" },
                { name: "Russian (Russia)", code: "ru" },
                { name: "Serbian (Serbia)", code: "sr" },
                { name: "Sinhala (Sri Lanka)", code: "si" },
                { name: "Slovak (Slovakia)", code: "sk" },
                { name: "Slovenian (Slovenia)", code: "sl" },
                { name: "Spanish (Mexico)", code: "es" },
                { name: "Sundanese (Indonesia)", code: "su" },
                { name: "Swahili (Tanzania)", code: "sw" },
                { name: "Swahili (Kenya)", code: "sw" },
                { name: "Swahili (Kenya)", code: "sw" },
                { name: "Swedish", code: "sv" },
                { name: "Tamil (India)", code: "ta" },
                { name: "Tamil (Singapore)", code: "ta-SG" },
                { name: "Tamil (Sri Lanka)", code: "ta-LK" },
                { name: "Tamil (Malaysia)", code: "ta-MY" },
                { name: "Telugu (India)", code: "te" },
                { name: "Urdu (India)", code: "te" },
                { name: "Thai (Thailand)", code: "th" },
                { name: "Turkish (Turkey)", code: "tr" },
                { name: "Ukrainian (Ukraine)", code: "uk" },
                { name: "Urdu (Pakistan)", code: "ur" },
                { name: "Vietnamese (Vietnam)", code: "vi" },
                { name: "Zulu (South Africa)", code: "zu" },
            ]
        };
        this.handleChange = this.handleChange.bind(this);

    }
    componentDidMount() {
        //All off the messages sent by the server...
        Socket.on('glogin', (data) => {
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
    }
    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            value: event.target.value
        });

    }

    render() {
        if (this.state.loggedIn) {
            return (
                <div>
                <select value={this.state.value} onChange={this.handleChange}>
                  {
                    this.state.displayedContacts.map((n, index) => {
                      return <Contact 
                        name={n.name} 
                        code={n.code}
                        key={index}
                      />;
                    })
                  }
                </select>
            </div>
            );
        }
        else {
            return (
                <select>
                    <option>Must log in.</option>
                </select>
            )
        }
    }
};