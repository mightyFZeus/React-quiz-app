import "./styles.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'

export default function App() {
  return (

    <Router>
      <>
        <Home />
      </>
    </Router>
  );
}
