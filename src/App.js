import './App.css';
import { useState } from 'react';
// import {Sonnet, Tabs, Tab} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'

// Import Components
import LandingPage from './Components/LandingPage';
import Music from './Components/Music';
import Photography from './Components/Photography';
import Blog from './Components/Blog';
import About from './Components/About';

//  Import Photograpy Sub Components
import Music_Photograpy from './Components/PhotographySubComponents/Photograph_Music'
import Music_Photograpy_Artists from './Components/PhotographySubComponents/Photograph_Music_Artists'
import Music_Photograpy_Live from './Components/PhotographySubComponents/Photograph_Music_Live'

import Event_Photography from './Components/PhotographySubComponents/Photograph_Events'
import Portrait_Photography from './Components/PhotographySubComponents/Photograph_Portrait'
import Other_Photography from './Components/PhotographySubComponents/Photograph_Other'


import Header from './Components/Header'
import Footer from './Components/Footer';

function App() {
  const [CurrentPage,setCurrentPage] = useState('LandingPage')

  let LandingPageRender = CurrentPage === 'LandingPage' ?
    <LandingPage siteSelector={setCurrentPage} ></LandingPage> :
    null

  let PhotographyPageRender = CurrentPage === 'PhotographyPage' ?
    <Photography></Photography> :
    null
  
  let Music_Photography_Render = CurrentPage === 'MusicPhotography' ?
    <Photography></Photography> :
    null

  let Music_Photography_Artists_Render = CurrentPage === 'MusicPhotographyArtists' ?
    <Photography></Photography> :
    null

  let Music_Photography_Live_Render = CurrentPage === 'MusicPhotographyLive' ?
    <Photography></Photography> :
    null

  let Event_Photography_Render = CurrentPage === 'EventPhotography' ?
    <Photography></Photography> :
    null

  let Portrait_Photography_Render = CurrentPage === 'PortraitPhotography' ?
    <Photography></Photography> :
    null

  let Other_Photography_Render = CurrentPage === 'OtherPhotography' ?
    <Photography></Photography> :
    null

  let MusicPageRender = CurrentPage === 'MusicPage' ?
    <Music></Music> :
    null

  let BlogPageRender = CurrentPage === 'BlogPage' ?
    <Blog></Blog>:
    null

  let AboutPageRender = CurrentPage === 'AboutPage' ?
    <About></About> :
    null

  return (
    <div className="App bg-white">
      <Header siteSelector={setCurrentPage}></Header>
        {LandingPageRender}
        {PhotographyPageRender}
        {MusicPageRender}
        {BlogPageRender}
        {AboutPageRender}
      <Footer></Footer>
    </div>
  );
}

export default App;
