import * as React from 'react';
import videojs from 'video.js';

import 'video.js/dist/video-js.css';

class App extends React.Component {
  private player?: videojs.Player;
  private videoNode?: HTMLVideoElement;

  constructor() {
    super({});
    this.player = undefined;
    this.videoNode = undefined;
  }
  componentDidMount() {
    this.player = videojs(this.videoNode, {
      autoplay: false,
      controls: true,
      sources: [
        {
          src: 'http://vjs.zencdn.net/v/oceans.mp4',
          type: 'video/mp4',
        },
      ],
    }).ready(function onReady() {
      // console.log('onPlayerReady', this);
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }
  public render() {
    return (
      <div className="App">
        <div data-vjs-player>
          <video
            ref={(node: HTMLVideoElement) => (this.videoNode = node)}
            className="video-js"
          />
        </div>
      </div>
    );
  }
}

export default App;
