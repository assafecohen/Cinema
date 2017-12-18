import React, { Component } from 'react';
import style from './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Youtube from '../Youtube/YouTube';
import API from '../API/API';

class App extends Component {
  constructor() {
    super();
    this.api = new API();
    this.state = { data: [], selectedMovie: false };
    this.handleClickShowVideo = this.handleClickShowVideo.bind(this);
    this.handleClickHideVideo = this.handleClickHideVideo.bind(this);
    this.handleClickFilterGallery = this.handleClickFilterGallery.bind(this);
    
  }

  async componentWillMount() {
    console.log("RENDER");
    let data = await this.api.getData();
    this.setState({ data });
  }

  handleClickShowVideo(movieId) {
    this.setState({ selectedMovie: movieId });
  }
  
  handleClickHideVideo() {
    this.setState({ selectedMovie: false });
  }

  handleClickFilterGallery(type) {
    console.log(type);
    let dataFilter = this.state.data.filter(movie => movie.type === type);
    console.log(dataFilter);
    this.setState({data: dataFilter});
  }

  render() {
    let { data, selectedMovie } = this.state;
    return (
      <div className={style.container}>
        <Header onClick={this.handleClickFilterGallery} />
        <Gallery data={data} onClick={this.handleClickShowVideo} />
        {selectedMovie && <Youtube movieId={selectedMovie} onClick={this.handleClickHideVideo} />}
        <Footer />
      </div>
    );
  }
}

export default App;
