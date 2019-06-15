import React from 'react';
import './App.css';

import Message from './Message';
import Video from './Video';
import Audio from './Audio';

function App() {
  var messages = [
      ["viewer",  "23:46", "Hola Señores y señoras!" ]
    , ["Jushepe", "00:19", "Joder, peña, nos escriben" ]
    , ["Eneko",   "01:04", "tum-pa-tum-pa, totally poonk" ]
    , ["viewer",  "10:31", "Me gusta vuestra musica, por cierto" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Eneko",   "12:41", "Has visto este video?" ]
    , ["Eneko",   "12:41", <Video title="Amanecer" url="https://www.youtube.com/embed/nfMh5yfrcIU"/> ]
    , ["viewer",  "12:49", "Tio, es genial! Hay más?" ]
    , ["Eneko",   "12:51", "Aqui nuestro primer disco" ]
    , ["Eneko",   "12:51", <Video title="El de la Pizza" url="https://www.youtube.com/embed?listType=playlist&list=PLLodNXd_STDluBhzNDSsbLqRmMFB2wA3M"/> ]
    , ["viewer",  "13:02", "🤯🥳💪🏽🎸" ]
    , ["Eneko",   "17:32", <Audio title="Meow" url="https://archive.org/download/testmp3testfile/mpthreetest.mp3" /> ]

  ]

  return (
    <div className="App">
      <div className="background">
      </div>
      <div className="content">
        {messages.map((message, i) =>
          <Message
            key={i}
            author={message[0]}
            date={message[1]}
            content={message[2]}/>
        )}
      </div>
    </div>
  );
}


export default App;
