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
