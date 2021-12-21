import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/home">
            <Nav/>
            <Banner/>
            <Row isLargeRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
