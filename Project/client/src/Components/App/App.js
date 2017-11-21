import React, { Component } from 'react';
import style from './App.css';
import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'
import API from '../API/API'

class App extends Component {
  constructor() {
    super();
    this.api = new API();
    this.state = { data: [] };
  }

   async componentWillMount(){
    let data = await this.api.getData();
    this.setState( { data } );
  }

  render() {
    let {data} = this.state;
    return (
      <div className={style.container}>
          <Header/>
          <Aside/>
          <Gallery data={data}/>
          <Footer/>
      </div>
    );
  }
}

export default App;

