
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./component/Header/Header";
import WomenCollection from "./component/WomenCollection";
import WomenCollectionSunglasses from './component/WomenCollectionSunglasses';
import MenCollection from './component/MenCollection';
import MenCollectionSunglasses from './component/MenCollectionSunglasses';
import Home from './component/Home';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/spectacles-women" exact component={() => <WomenCollection />} />
            <Route path="/sunglasses-women" exact component={() => <WomenCollectionSunglasses />} />
            <Route path="/spectacles-men" exact component={() => <MenCollection />} />
            <Route path="/sunglasses-men" exact component={() => <MenCollectionSunglasses />} />
          </Switch>
        </Router>
      </>
  );
}

export default App;
