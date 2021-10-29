import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home";
import PricingPage from "./pages/Pricing";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/pricing" component={PricingPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
