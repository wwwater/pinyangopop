import React from 'react';
import './App.css';

import Menu    from './Menu';
import DateMessage from './DateMessage';
import Preview from './Preview';
import Message from './Message';
import Video   from './Video';
import Audio   from './Audio';

function App() {
  var messages = [
      ["17/08/2019"]
    , ["Jushepe", "13:46", "Kaixo peña!" ]
    , ["Ñango",   "14:22", "heeey Jush" ]
    , ["Keko",    "18:01", "Perdona peña que estaba liado, di Jush" ]
    , ["Jushepe", "18:13", "A ver, tenemos que ponernos con la web. He pensado que primero podíamos pensar entre los 3 las secciones que habría que poner" ]
    , ["20/08/2019"]
    , ["Jushepe", "10:31", "hola" ]
    , ["Keko",    "10:56", "ostia, parkatu mil, tio, se me fue la olla el otro día. A ver, yo creo que lo primero sería ver que secciones vamos a poner. Yo propongo: Bio, lanzamientos, videos, links a merchan, y a RRSS. Que os parece?" ]
    , ["Jushepe", "10:31", "A mi me parece way" ]
    , ["Ñango",   "10:31", "a mi tbb" ]
    , ["Jushepe", "10:38", "Yo tengo esta bio escrita, a ver que te parece:" ]
    , ["Jushepe", "10:39", <div id="About"><Audio title="Bio" url="https://archive.org/download/testmp3testfile/mpthreetest.mp3" /></div>  ]
    , ["Keko",    "10:45", "Por mi guay" ]
    , ["Jushepe", "10:58", "Ñango?" ]
    , ["Ñango",   "11:09", "Palanteeeee" ]
    , ["Jushepe", "11:10", "Venga, eso listo. Más" ]
    , ["Ñango",   "11:12", "abrá q poner los discos tb" ]
    , ["Jushepe", "11:13", <div id="Music">hay que poner nuestra "discografía", por llamarle algo</div> ]
    , ["Jushepe", "11:14", <div className="joke-clock"></div> ]
    , ["Keko",    "11:18", "jajajajajaja" ]
    , ["Ñango",   "11:23", "abrá q poner los discos tb Xdddd" ]
    , ["Keko",    "11:27", "\"discos\" tenemos uno. \"El de la Pizza\"" ]
    , ["Keko",    "11:28", <Preview title="El de la Pizza, by Piñango Pop"
                                    text="14 track album on Bandcamp"
                                    image="pizza"
                                    url="https://pinangopop.bandcamp.com/album/el-de-la-pizza" /> ]
    , ["Keko",    "11:28", <Preview title="El de la Pizza"
                                    text="El de la Pizza, an album by Piñango Pop on Spotify"
                                    image="pizza"
                                    url="https://open.spotify.com/album/6010KNCEaYPAikrL3kgqGp?si=kVvzK-IaS-qYzfa4St44XA" /> ]
    , ["Jushepe", "11:33", "Yo pondría el EP con Medina tb" ]
    , ["Ñango",   "11:35", "va" ]
    , ["Keko",    "11:40", "Y obviamente los singles nuevos" ]
    , ["Keko",    "11:40", "Estos están todos juntos aquí en Bandcamp y Spotify" ]
    , ["Keko",    "11:40", <Preview title="Piñango Pop"
                                    text="Grungecore proletario y milennial."
                                    image="flames"
                                    url="https://pinangopop.bandcamp.com" /> ]
    , ["Keko",    "11:40", <Preview title="Piñango Pop"
                                    text="Category: Artist, Albums: El de la Pizza, Singles: Valcárcel, Cuchillo Contra Cadena, Top Tracks: Asaltados de Mayo, Valcárcel, Persiana, Mot, Santa Agueda"
                                    image="flames"
                                    url="https://open.spotify.com/artist/3LMSFKQb5fs4THmT5jdOU9?si=e2hbXOe5RuqgD68jhA_qwQ" /> ]
    , ["Jushepe", "11:45", "Importante tb que \"El de la Pizza\" en físico se puede pillar en la DDT, en Brixton, en Power Records y en el Bohemian Lane." ]
    , ["Ñango",   "11:51", "Eso eeeees!" ]
    , ["Ñango",   "11:51", <div id="Video">Videos?</div> ]
    , ["Jushepe", "11:51", "Ostia, es verdad xD a veces se me olvida que tenemos dos... Pásame los links mese" ]
    , ["Ñango",   "12:01", <Video title="Persiana" url="https://www.youtube.com/embed/vLbbiQ_3fLA"/> ]
    , ["Ñango",   "12:02", <Video title="Amanecer" url="https://www.youtube.com/embed/nfMh5yfrcIU"/> ]
    , ["Keko",    "12:03", "Máquina" ]
    , ["Jushepe", "12:03", <div className="joke-cat"></div> ]
    , ["Ñango",   "12:04", "hahahahahahaha" ]
    , ["Keko",    "12:05", "Que más?" ]
    , ["Jushepe", "12:06", "Mmmmm" ]
    , ["Jushepe", "12:06", <div id="Social-networks">Redes sociales...</div> ]
    , ["Keko",    "12:08", <Preview title="Piñango Pop (@pinangopop) • Instagram photos and videos"
                                    text="359 Followers, 213 Following, 39 Posts - See Instagram photos and videos from Piñango Pop (@pinangopop)"
                                    image="flames-instagram"
                                    url="https://instagram.com/pinangopop?igshid=10jon2cprsuw2" /> ]
    , ["Keko",    "12:08", <Preview title="Piñango Pop"
                                    text="Piñango Pop. 865 Me gusta. Keko, Jushepe, Ñango"
                                    image="flames"
                                    url="https://www.facebook.com/Pi%C3%B1ango-Pop-2200920556815701/" /> ]
    , ["Keko",    "12:08", "y lo del MERCHAN" ]
    , ["Jushepe", "12:09", "Ostia es verdad. Como era la página??" ]
    , ["Keko",    "12:10", <a href="/shop.html" target="_blank" rel="noopener noreferrer">Tienda</a> ]
    , ["Ñango",   "12:13", <div className="joke-simpsons"></div> ]
    , ["Keko",    "12:13", "😂😂😂😂" ]
    , ["Jushepe", "12:13", "🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣" ]
    , ["Ñango",   "12:14", "pues ya estaría, no??" ]
    , ["Jushepe", "12:14", "Bai" ]
  ]

  return (
    <div id="App">
      <Menu />
      <div className="content">
        <div className="background">
        </div>
        {messages.map((message, i) => {
          if (message.length === 1) {
            return <DateMessage key={i} date={message[0]} />
          } else {
            return <Message
              key={i}
              author={message[0]}
              date={message[1]}
              content={message[2]}/>
          }
        }
      )}
      </div>
    </div>
  );
}


export default App;
