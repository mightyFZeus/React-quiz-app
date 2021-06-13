import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Instructions from "./components/instruction/Instructions";

export default function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Route path="/instructions" exact component={Instructions} />
      </>
    </Router>
  );
}
