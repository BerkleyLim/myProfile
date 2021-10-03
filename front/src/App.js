import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import './App.css';
import HeaderComponent from './components/common/HeaderComponent'
import FooterComponent from './components/common/FooterComponent'

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />

        <div className = "container">
          <Switch>
              {/* <Route path="/" exact component = {ListBoardComponent}></Route> */}
          </Switch>
        </div>

        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
