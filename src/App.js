import React, {Component} from 'react';
import "./Assets/css/main.css"
import PublicRoute from "./Route/Publicroute"
import { BrowserRouter, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing"
import Dashboard from "./Components/Dashboard/Dashboard"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// function App() {
  
// }
class App extends Component {
  state = {
      toggle:false
  }
  Toggle = () => {
      this.setState({toggle:!this.state.toggle});
      console.log(this.state.toggle);
      
  }
  render() {
      return (
    <BrowserRouter>
      <Switch>
        <PublicRoute component={Landing} path="/" exact />
        <PublicRoute component={Dashboard} path="/Dashboard" exact />
      </Switch>
    </BrowserRouter>
      );
  }
}
export default App;