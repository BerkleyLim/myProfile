import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
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

        <div className = "container">
          <Switch>
            <Route path="/" exact component = {AppComponent}/>
            <Route path="/introduction"  component = {IntroductionComponent}/>
            <Route path="/career"  component = {CareerComponent}/>
            <Route path="/project"  component = {ProjectComponent}/>
            <Route path="/together"  component = {TogetherComponent}/>
          </Switch>
        </div>

        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
