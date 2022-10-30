import './styles/styles.scss';
import Cards from './components/Cards';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CreateCard from './components/CreateCard';
import EditCard from './components/EditCard';
import CardDetail from './components/CardDetail';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
        <Route exact path='/' component={Cards}></Route>
          <Route exact path='/user/create' component={CreateCard} />
          <Route exact path='/:id/edit-card' component={EditCard} />
          <Route exact path='/:id' component={CardDetail} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
