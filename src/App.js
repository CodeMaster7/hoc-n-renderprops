import React, { Component } from 'react';
import './App.css';

//import our HigerOrderComponent. Generally not named HOC but it could be
import HOC from './Components/HOC'
//import RenderProp component
import RenderProp from './Components/RENDER'

//data. this could come from an api call or whatever. It doesn't really amtter
const artists = [
  { name: 'Modest Mouse', genre: 'alternative', artistImg: 'https://www.kansascity.com/latest-news/by7r7a/picture210718134/ALTERNATES/FREE_1140/modest%20mouse.jpg' },
  { name: 'Chance the Rapper', genre: 'rap', artistImg: 'http://s3.amazonaws.com/hiphopdx-production/2016/12/Chance-The-Rapper-by-Mike-Lavin-@thehomelesspimp-4-1-800x600.jpg' },
  { name: 'Talking Heads', genre: 'alternative', artistImg: 'https://www.desktopbackground.org/download/800x600/2015/04/29/940579_talking-heads-this-must-be-the-place-naive-melody-youtube_1920x1080_h.jpg' },
  { name: 'Atmosphere', genre: 'rap', artistImg: 'https://storage.googleapis.com/rhymesayers/images/_tile/atmosp.png' },
  { name: 'David Bowie', genre: 'alternative', artistImg: 'https://media.npr.org/assets/img/2016/01/11/gettyimages-114939559-152a6dea2f0ae78878fb4b1d2a596cb229556a44-s800-c85.jpg' }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HOC</h1>
        {/* using HOC whilst passing in a list prop which is our artists array and also passing in our genre which is rap in this case */}
        <HOC list={artists} genre={'rap'} />
        {/* hr stands for headroom. This is what create that gray line and space between the components themselves */}
        <hr />
        {/* using HOC whilst passing in a list prop which is our artists array and also passing in our genre which is alternative in this case */}
        <HOC list={artists} genre={'alternative'} />
        <hr />
        {/* only list prop which is fine because we check for that in our component creation */}
        <HOC list={artists} />
        <h1>Render Prop</h1>
        {/* using RenderProp which only has a render prop. This could be called child or something similar. passing in a genre and a list because that is what we asked for in our component creation */}
        <RenderProp render={(data) => data('alternative', artists)} />
        <hr />
        <RenderProp render={(data) => data('rap', artists)} />
        <hr />
        {/* passing in null and a list because that is what we asked for in our component creation. we say null because it does not exist. don't believe me? try passing an empty string instead */}
        <RenderProp render={(data) => data(null, artists)} />
      </div>
    );
  }
}

export default App;
