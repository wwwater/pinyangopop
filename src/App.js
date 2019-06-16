import React from 'react';
import './App.css';

import Menu    from './Menu';
import Message from './Message';
import Video   from './Video';
import Audio   from './Audio';

function App() {
  var messages = [
      ["viewer",  "23:46", "Hola Señores y señoras!" ]
    , ["Jushepe", "00:19", <div id="About">Joder, peña, nos escriben</div> ]
    , ["Eneko",   "01:04", "tum-pa-tum-pa, totally poonk" ]
    , ["viewer",  "10:31", "Me gusta vuestra musica, por cierto" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Eneko",   "12:41", <div id="Video">Has visto este video?</div> ]
    , ["Eneko",   "12:41", <Video title="Amanecer" url="https://www.youtube.com/embed/nfMh5yfrcIU"/> ]
    , ["viewer",  "12:49", "Tio, es genial! Hay más?" ]
    , ["Eneko",   "12:51", "Aqui nuestro primer disco" ]
    , ["Eneko",   "12:51", <Video title="El de la Pizza" url="https://www.youtube.com/embed?listType=playlist&list=PLLodNXd_STDluBhzNDSsbLqRmMFB2wA3M"/> ]
    , ["viewer",  "13:02", "🤯🥳💪🏽🎸" ]
    , ["Eneko",   "17:32", <div id="Music"><Audio title="Meow" url="https://archive.org/download/testmp3testfile/mpthreetest.mp3" /></div> ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Consideraba como una burla de su travieso destino haber buscado el mar sin encontrarlo, al precio de sacrificios y penalidades sin cuento, y haberlo encontrado entonces sin buscarlo, atravesado en su camino como un obstáculo insalvable" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "En cualquier lugar en que estuvieran recordaran siempre que el pasado era mentira, que la memoria no tenía caminos de regreso, que toda primavera antigua era irrecuperable, y que el amor más desatinado y tenaz era de todos modos una verdad efímera" ]
    , ["Ñango",   "12:09", "Cien años de soledad" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Puff puff" ]
    , ["Ñango",   "12:09", "Puff puff" ]

  ]

  return (
    <div id="App">
      <Menu />
      <div className="content">
        <div className="background">
        </div>
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
