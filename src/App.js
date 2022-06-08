import React, {useRef} from 'react';
import './App.css'
import { Parallax, ParallaxLayer} from '@react-spring/parallax';
import server from './server.svg';

function App() {
  return (
    <div>
      <Parallax pages={4} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          factor={1}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <p class="font-raleway"> Scroll up 
            <p class="font-oswald">
              Scroll
            </p>
          </p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <p>Scroll up</p>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{start: 0.5, end: 2.5}}
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            color: 'white',
          }}>
          <img src="server.svg" class="img-style" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={2}
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            color: 'white',
          }}>
            <svg width={500} height={500} >
            
            </svg>
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={3}
          speed={2}
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            color: 'white',
          }}>
          <img src="server.svg" style={{ width: '30%' }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;