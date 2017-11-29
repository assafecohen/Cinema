import React from 'react';
import Video from 'react-youtube';

class YouTube extends React.Component {
    render() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        color: 'white',
        controls: 0,
        end: 10,//movie will be stop after 10 seconds
        iv_load_policy: 3,
        //start: 10 // start the movie from 10 ahead         
        }
      };
      let {movieId} = this.props;
   
      return (
        <Video
          videoId={movieId}
          opts={opts}
          onReady={this._onReady}
        />
      );
    }
   
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }

  export default YouTube;