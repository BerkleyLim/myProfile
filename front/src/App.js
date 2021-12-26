import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import './App.css';
import HeaderComponent from './components/common/HeaderComponent'
import FooterComponent from './components/common/FooterComponent'
import IntroductionComponent from './components/introduction/IntroductionComponent'
import CareerComponent from './components/career/CareerComponent'
import ProjectComponent from './components/project/ProjectComponent'
import AppComponent from './components/AppComponent'
import TogetherComponent from './components/together/TogetherComponent'
import TogetherDetailComponent from './components/together/TogetherDetailComponent'

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />

        <div className = "modal"></div>
        <div className = "container">
          <Routes>
            <Route path="/" exact element = {<AppComponent/>}/>
            <Route path="/introduction"  element = {<IntroductionComponent/>}/>
            <Route path="/career"  element = {<CareerComponent/>}/>
            <Route path="/project"  element = {<ProjectComponent/>}/>
            <Route path="/together"  element = {<TogetherComponent/>}/>
          </Routes>
        </div>

        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
