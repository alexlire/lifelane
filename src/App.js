import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import NavigationMenu from "./components/navigationMenu/navigationMenu";
import Downloads from "./components/downloads/downloads";

function App() {
  const containerSpring = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <animated.div style={containerSpring} className="App">
      <Router>
        <NavigationMenu />
        <Container>
          <Switch>
            <Route path="/downloads">
              <Downloads />
            </Route>
            <Route path="/">
              <Downloads />
            </Route>
          </Switch>
        </Container>
      </Router>
    </animated.div>
  );
}

export default App;
