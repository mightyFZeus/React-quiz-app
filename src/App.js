import "./styles.css";
import {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Instructions from "./components/instruction/Instructions";
import WebFont from 'webfontloader';



export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Raleway', 'sans-serif']
      }
    });
   }, []);
  return (
    <Router>
      <>
        <div className='app'>
        <Route exact path="/" component={Home} />
        <Route path="/instructions" exact component={Instructions} />
        
        </div>
        
      </>
    </Router>
  );
}
