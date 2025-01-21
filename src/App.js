import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <SpeedInsights>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/singlepage/:id' component={SinglePage} exact />
        </Switch>
        <Footer />
      </Router>
    </SpeedInsights>
  );
}

export default App
