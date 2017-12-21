import React from 'react';
import Video from 'react-youtube';
import style from './YouTube.css';

class YouTube extends React.Component {
    render() {
      let {movieId,onClick} = this.props;      
      const opts = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        color: 'white',
        controls: 0,
        end: 10,//movie will be stop after 10 seconds
        iv_load_policy: 3,
        //start: 10 // start the movie from 10 ahead         
        }
      };
   
      return (
        <div className={style.wrapper} onClick={() => onClick()}>
          <Video
            className={style.video}
            videoId={movieId}
            opts={opts}
            onReady={this._onReady}
          />
        </div>
      );
    }
   
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }

  export default YouTube;