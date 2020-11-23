import { Route, Switch} from 'react-router-dom'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

import Home from './containers/Home/Home'
import Books from './containers/Books/Books'
import Reviews from './containers/Reviews/Reviews'
import News from './containers/News/News'
import Contacts from './containers/Contacts/Contacts'

import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/books" component={Books}/>
            <Route path="/reviews" component={Reviews}/>
            <Route path="/news" component={News}/>
            <Route path="/contacts" component={Contacts}/>
            
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
