<<<<<<< HEAD
import './app.css';

import { Route, useLocation } from "react-router-dom";
import { Landing, Form, Home, DetailCont } from "./views";
import NavBar from "./components/NavBar/NavBar";
import ViewPoke from "./views/ViewPoke/ViewPoke"

function App() {

  const location = useLocation();


  return (
    <div className="app">

      {location.pathname !== "/" && <NavBar />}

      <Route exact path="/">
        <Landing />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/form">
        <Form />
      </Route>

      <Route path="/detail/:id">
        <DetailCont />
      </Route>

      <Route path="/detailbyname">
        <ViewPoke/>
      </Route>
=======
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
>>>>>>> 33b52b7f722583c4da27e9d73c99e6553b156f6f
    </div>
  );
}

export default App;
