import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import './App.css';
import HeaderComponent from './components/common/HeaderComponent'
import FooterComponent from './components/common/FooterComponent'
import IntroductionComponent from './components/introduction/IntroductionComponent'
import CareerComponent from './components/career/CareerComponent'
import ProjectComponent from './components/project/ProjectComponent'
import AppComponent from './components/AppComponent'
import TogetherComponent from './components/together/TogetherComponent'

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />

        <div className = "container">
          <Switch>
              <Route path="/" exact component = {AppComponent}></Route>
              <Route path="/introduction"  component = {IntroductionComponent}></Route>
              <Route path="/career"  component = {CareerComponent}></Route>
              <Route path="/project"  component = {ProjectComponent}></Route>
              <Route path="/together"  component = {TogetherComponent}></Route>
          </Switch>
        </div>

        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
