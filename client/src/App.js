import React from 'react';
import Header from './Header';
import Selections from './Selections/Selections';
import Prep from './Selections/Prep'
import Meal from './Meal'
import Footer from './Footer';
import { Switch, Route} from 'react-router-dom';



const App = () => {
    return (
        <div id="appDiv">
            <Header />
            <Switch>
                <Route exact path='/' component={Selections}/>
                <Route path='/prep'   component={Prep}/>
                <Route path='/meal'   component={Meal}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default App;


